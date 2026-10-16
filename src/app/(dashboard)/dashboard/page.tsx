import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import { ShieldCheck, ArrowUpRight, Terminal } from "lucide-react";

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
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Welcome Banner */}
      <div className="p-6 rounded-lg border border-zinc-800 bg-[#121215] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded border border-zinc-800 bg-zinc-900 text-zinc-400 font-mono text-[10px] mb-2 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Free Community Edition
          </div>
          <h1 className="text-xl font-bold text-white tracking-tight">
            Welcome back{profile?.full_name ? `, ${profile.full_name}` : ""}
          </h1>
          <p className="text-zinc-400 text-xs mt-0.5">
            Supabase authentication and session cookie rotation active.
          </p>
        </div>

        <Link
          href="https://apollosolal.gumroad.com/l/shipkit-pro"
          target="_blank"
          className="px-4 py-2 rounded bg-white hover:bg-zinc-200 text-zinc-950 font-semibold text-xs transition flex items-center gap-1.5 whitespace-nowrap shadow-sm"
        >
          Get ShipKit Pro ($29) <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Status Cards */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="p-5 rounded-lg border border-zinc-800 bg-[#121215]">
          <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 mb-1">Authentication Layer</div>
          <div className="text-lg font-bold text-white flex items-center gap-2">
            Supabase Auth <ShieldCheck className="w-4 h-4 text-emerald-400" />
          </div>
          <p className="text-[11px] text-zinc-500 mt-1 font-mono">Cookie-based session persistence active</p>
        </div>

        <div className="p-5 rounded-lg border border-zinc-800 bg-[#121215]">
          <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 mb-1">Billing & Webhooks</div>
          <div className="text-lg font-bold text-zinc-300 flex items-center gap-2">
            Not Configured (Lite)
          </div>
          <p className="text-[11px] text-zinc-500 mt-1 font-mono">Upgrade to Pro for Stripe Checkout & Webhook sync</p>
        </div>
      </div>

      {/* Quick Architecture Info */}
      <div className="p-6 rounded-lg border border-zinc-800 bg-[#121215]">
        <h2 className="text-sm font-bold text-white tracking-tight mb-3 flex items-center gap-2">
          <Terminal className="w-4 h-4 text-zinc-400" />
          Next Steps for Your Project
        </h2>
        <ul className="space-y-2 text-xs font-mono text-zinc-400">
          <li className="flex items-start gap-2">
            <span className="text-emerald-400 font-bold">01.</span>
            <span>Create your feature routes inside <code className="text-zinc-200">src/app/(dashboard)/...</code></span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-emerald-400 font-bold">02.</span>
            <span>Add database tables in <code className="text-zinc-200">supabase/migrations/</code> with RLS policies</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-emerald-400 font-bold">03.</span>
            <span>Deploy to Vercel, Coolify, or self-host with Docker</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
