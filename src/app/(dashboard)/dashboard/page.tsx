import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import { Sparkles, ArrowRight, ShieldCheck, Code2, ExternalLink } from "lucide-react";

export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: profile } = await supabase
    .from("profiles")
    .select("full_name")
    .eq("id", user?.id)
    .single();

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Banner */}
      <div className="p-8 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-900/60 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-brand-400" /> Free Community Edition
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
            Welcome{profile?.full_name ? `, ${profile.full_name}` : ""}!
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            Your Supabase authentication and dashboard routing are working properly.
          </p>
        </div>

        <Link
          href="https://gumroad.com"
          target="_blank"
          className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold text-sm transition shadow-lg flex items-center gap-2 whitespace-nowrap"
        >
          Get ShipKit Pro ($29) <ExternalLink className="w-4 h-4" />
        </Link>
      </div>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
          <div className="text-xs font-semibold uppercase text-slate-400 mb-2">Supabase Session</div>
          <div className="text-xl font-bold text-white flex items-center gap-2">
            Connected <ShieldCheck className="w-5 h-5 text-emerald-400" />
          </div>
          <p className="text-xs text-slate-500 mt-2">Authenticated via Supabase SSR Cookies</p>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
          <div className="text-xs font-semibold uppercase text-slate-400 mb-2">Payments & Billing</div>
          <div className="text-xl font-bold text-amber-400 flex items-center gap-2">
            Not Configured (Lite)
          </div>
          <p className="text-xs text-slate-500 mt-2">Upgrade to Pro for Stripe Checkout & Webhooks</p>
        </div>
      </div>
    </div>
  );
}
