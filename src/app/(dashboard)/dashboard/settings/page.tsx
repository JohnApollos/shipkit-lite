import { createClient } from "@/lib/supabase/server";
import { User, Mail, Save } from "lucide-react";

export default async function SettingsPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: profile } = await supabase
    .from("profiles")
    .select("full_name, email, created_at")
    .eq("id", user?.id)
    .single();

  const updateProfile = async (formData: FormData) => {
    "use server";
    const fullName = formData.get("fullName") as string;
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (user) {
      await supabase
        .from("profiles")
        .update({ full_name: fullName, updated_at: new Date().toISOString() })
        .eq("id", user.id);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div>
        <h1 className="text-xl font-bold text-white tracking-tight">Account Settings</h1>
        <p className="text-zinc-400 text-xs mt-0.5">
          Manage your developer profile and authentication identity.
        </p>
      </div>

      <div className="p-6 rounded-lg border border-zinc-800 bg-[#121215] shadow-xl">
        <form action={updateProfile} className="space-y-4 text-xs font-mono">
          <div>
            <label className="block text-zinc-400 mb-1">Full Name</label>
            <div className="relative">
              <input
                type="text"
                name="fullName"
                defaultValue={profile?.full_name || ""}
                className="w-full pl-9 pr-3 py-2 bg-zinc-950 border border-zinc-800 rounded text-white text-xs focus:outline-none focus:border-zinc-500 transition"
                placeholder="Alex Mercer"
              />
              <User className="w-3.5 h-3.5 text-zinc-500 absolute left-3 top-2.5" />
            </div>
          </div>

          <div>
            <label className="block text-zinc-400 mb-1">Email Address</label>
            <div className="relative">
              <input
                type="email"
                disabled
                value={user?.email || ""}
                className="w-full pl-9 pr-3 py-2 bg-zinc-900 border border-zinc-800/60 rounded text-zinc-400 text-xs cursor-not-allowed"
              />
              <Mail className="w-3.5 h-3.5 text-zinc-600 absolute left-3 top-2.5" />
            </div>
            <p className="text-[10px] text-zinc-500 mt-1 font-sans">
              To update primary email, contact support at johnapollosolal@gmail.com.
            </p>
          </div>

          <div className="pt-3 border-t border-zinc-800 flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 rounded bg-white hover:bg-zinc-200 text-zinc-950 font-bold text-xs transition flex items-center gap-1.5 shadow-sm"
            >
              <Save className="w-3.5 h-3.5" /> Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
