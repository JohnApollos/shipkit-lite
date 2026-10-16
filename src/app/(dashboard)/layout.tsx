import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { LayoutDashboard, Settings, LogOut, ArrowUpRight } from "lucide-react";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const signOut = async () => {
    "use server";
    const supabase = await createClient();
    await supabase.auth.signOut();
    redirect("/login");
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-[#f4f4f5] flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-60 bg-[#0c0c0e] border-r border-zinc-800 p-5 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-zinc-800/80">
            <Link href="/" className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
              <span className="font-mono font-bold text-xs tracking-wider text-white">SHIPKIT</span>
            </Link>
            <span className="text-[10px] font-mono text-zinc-500 border border-zinc-800 px-1 rounded">Lite</span>
          </div>

          <nav className="space-y-1 font-mono text-xs">
            <Link
              href="/dashboard"
              className="flex items-center gap-2.5 px-3 py-2 rounded text-zinc-300 hover:text-white hover:bg-zinc-850 transition"
            >
              <LayoutDashboard className="w-3.5 h-3.5 text-zinc-400" />
              Overview
            </Link>
            <Link
              href="/dashboard/settings"
              className="flex items-center gap-2.5 px-3 py-2 rounded text-zinc-300 hover:text-white hover:bg-zinc-850 transition"
            >
              <Settings className="w-3.5 h-3.5 text-zinc-400" />
              Settings
            </Link>
          </nav>

          {/* Upgrade Card in Sidebar */}
          <div className="mt-8 p-4 rounded-lg border border-zinc-800 bg-[#121215]">
            <div className="text-[10px] font-mono font-semibold text-zinc-400 uppercase tracking-wider mb-1">
              PRO UPGRADE
            </div>
            <p className="text-xs text-zinc-400 mb-3 leading-relaxed">
              Unlock Stripe Subscriptions, automated webhooks, and Docker configs.
            </p>
            <a
              href="https://apollosolal.gumroad.com/l/shipkit-pro"
              target="_blank"
              className="w-full py-2 px-3 rounded bg-white hover:bg-zinc-200 text-zinc-950 text-xs font-semibold text-center transition flex items-center justify-center gap-1 shadow-sm"
            >
              Upgrade ($29) <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>

        <div className="pt-4 border-t border-zinc-800">
          <p className="text-[11px] font-mono text-zinc-300 truncate mb-3">{user.email}</p>
          <form action={signOut}>
            <button
              type="submit"
              className="w-full flex items-center gap-2 px-2.5 py-1.5 rounded text-xs font-mono text-zinc-500 hover:text-zinc-200 hover:bg-zinc-850 transition"
            >
              <LogOut className="w-3.5 h-3.5" />
              Sign Out
            </button>
          </form>
        </div>
      </aside>

      <main className="flex-1 p-6 md:p-10 overflow-y-auto">{children}</main>
    </div>
  );
}
