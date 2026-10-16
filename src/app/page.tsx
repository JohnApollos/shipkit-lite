"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Check,
  Copy,
  Terminal,
  ArrowRight,
  ExternalLink,
  Shield,
  Layers,
  Code2,
} from "lucide-react";

export default function LandingPage() {
  const [copied, setCopied] = useState(false);

  const copyCommand = () => {
    navigator.clipboard.writeText("git clone https://github.com/JohnApollos/shipkit-lite.git");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-zinc-800 selection:text-white">
      {/* Navigation */}
      <header className="border-b border-zinc-800/80 sticky top-0 z-50 backdrop-blur-md bg-zinc-950/80">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-mono font-bold text-sm tracking-tight text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
              ShipKit<span className="text-zinc-500 font-normal">/lite</span>
            </span>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded border border-zinc-800 bg-zinc-900 text-zinc-400">
              MIT License
            </span>
          </div>

          <div className="flex items-center gap-3 font-mono text-xs">
            <Link
              href="/login"
              className="text-zinc-400 hover:text-white px-3 py-1.5 transition"
            >
              Sign In
            </Link>
            <Link
              href="https://gumroad.com"
              target="_blank"
              className="px-3 py-1.5 rounded bg-zinc-100 text-zinc-900 hover:bg-white font-medium transition flex items-center gap-1.5"
            >
              Get ShipKit Pro ($29) <ExternalLink className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-left">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded border border-zinc-800 bg-zinc-900/60 text-zinc-400 text-xs font-mono mb-6">
          <span>Next.js 15 App Router</span>
          <span className="text-zinc-600">·</span>
          <span>Supabase SSR Auth</span>
          <span className="text-zinc-600">·</span>
          <span>Tailwind CSS</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
          Production Next.js starter kit.
          <br />
          <span className="text-zinc-400 font-normal">Zero setup friction, 100% open-source.</span>
        </h1>

        <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mb-8 leading-relaxed">
          ShipKit Lite delivers a clean, modular foundation: SSR cookie-based authentication, 
          PostgreSQL schema with Row Level Security, protected route middleware, and a responsive SaaS dashboard.
        </p>

        {/* Quick Clone Terminal Box */}
        <div className="p-3 rounded-lg border border-zinc-800 bg-zinc-900/90 font-mono text-xs flex items-center justify-between mb-8 max-w-xl">
          <div className="flex items-center gap-2 overflow-x-auto text-zinc-300">
            <Terminal className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
            <span className="text-zinc-500">$</span>
            <span>git clone https://github.com/JohnApollos/shipkit-lite.git</span>
          </div>
          <button
            onClick={copyCommand}
            className="ml-3 px-2.5 py-1 rounded border border-zinc-700 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs transition flex items-center gap-1.5 shrink-0"
          >
            {copied ? (
              <>
                <Check className="w-3 h-3 text-emerald-400" />
                <span className="text-emerald-400">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/signup"
            className="px-4 py-2 rounded bg-zinc-100 hover:bg-white text-zinc-900 font-medium text-xs transition flex items-center gap-2"
          >
            Launch Local Demo <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <a
            href="https://github.com/JohnApollos/shipkit-lite"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded border border-zinc-800 bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 text-xs font-mono transition flex items-center gap-2"
          >
            <Code2 className="w-3.5 h-3.5 text-zinc-400" />
            View GitHub Repository
          </a>
        </div>
      </section>

      {/* Upgrade Banner */}
      <section className="px-6 max-w-4xl mx-auto mb-16">
        <div className="p-6 rounded-lg border border-zinc-800 bg-zinc-900/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">
                PRO UPGRADE
              </span>
              <span className="text-xs font-mono text-zinc-500">$29 one-time</span>
            </div>
            <h2 className="text-base font-bold text-white">Need automated billing & deployment?</h2>
            <p className="text-xs text-zinc-400 mt-1 max-w-xl leading-relaxed">
              Upgrade to ShipKit Pro for end-to-end Stripe Subscriptions, automated webhook synchronization,
              Resend transactional emails, and multi-stage Docker configurations.
            </p>
          </div>
          <Link
            href="https://gumroad.com"
            target="_blank"
            className="px-4 py-2 rounded bg-zinc-100 hover:bg-white text-zinc-900 font-semibold text-xs transition whitespace-nowrap flex items-center gap-2 shrink-0"
          >
            Get Full Version ($29) <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-12 px-6 max-w-4xl mx-auto border-t border-zinc-800/80">
        <h2 className="text-sm font-mono uppercase tracking-wider text-zinc-400 mb-6">
          Architectural Comparison: Lite vs. Pro
        </h2>
        <div className="border border-zinc-800 rounded-lg overflow-hidden bg-zinc-900/30 font-mono text-xs">
          <table className="w-full text-left">
            <thead className="bg-zinc-900/80 text-[11px] text-zinc-400 border-b border-zinc-800">
              <tr>
                <th className="p-3.5 font-normal">Component</th>
                <th className="p-3.5 text-center font-normal">Lite (Free)</th>
                <th className="p-3.5 text-center font-semibold text-white">Pro ($29)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/80 text-zinc-300">
              <tr>
                <td className="p-3.5">Next.js 15 App Router & React 19</td>
                <td className="p-3.5 text-center text-emerald-400">Included</td>
                <td className="p-3.5 text-center text-emerald-400 font-medium">Included</td>
              </tr>
              <tr>
                <td className="p-3.5">Supabase SSR Cookie Auth & Middleware</td>
                <td className="p-3.5 text-center text-emerald-400">Included</td>
                <td className="p-3.5 text-center text-emerald-400 font-medium">Included</td>
              </tr>
              <tr>
                <td className="p-3.5">SaaS Dashboard & User Profile Settings</td>
                <td className="p-3.5 text-center text-emerald-400">Included</td>
                <td className="p-3.5 text-center text-emerald-400 font-medium">Included</td>
              </tr>
              <tr>
                <td className="p-3.5">Stripe Checkout & Billing Portal</td>
                <td className="p-3.5 text-center text-zinc-600">—</td>
                <td className="p-3.5 text-center text-emerald-400 font-medium">Included</td>
              </tr>
              <tr>
                <td className="p-3.5">Cryptographic Webhook Sync to Supabase</td>
                <td className="p-3.5 text-center text-zinc-600">—</td>
                <td className="p-3.5 text-center text-emerald-400 font-medium">Included</td>
              </tr>
              <tr>
                <td className="p-3.5">Resend Transactional Email Templates</td>
                <td className="p-3.5 text-center text-zinc-600">—</td>
                <td className="p-3.5 text-center text-emerald-400 font-medium">Included</td>
              </tr>
              <tr>
                <td className="p-3.5">Multi-Stage Dockerfile & Docker Compose</td>
                <td className="p-3.5 text-center text-zinc-600">—</td>
                <td className="p-3.5 text-center text-emerald-400 font-medium">Included</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800/80 py-8 px-6 text-xs font-mono text-zinc-500">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-zinc-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
            <span>ShipKit Lite by Apollos Digital Solutions</span>
          </div>
          <p>© {new Date().getFullYear()} John Apollos. MIT Licensed.</p>
        </div>
      </footer>
    </div>
  );
}
