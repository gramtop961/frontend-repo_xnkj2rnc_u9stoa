import React from 'react';
import { Sparkles, ArrowRight, MessageSquare } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.2),transparent_60%)]" />
      <div className="max-w-6xl mx-auto px-4 pt-16 pb-24 relative">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-emerald-300 text-xs mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>AI-powered sourcing & screening</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight">
              Hire 10x faster with autonomous recruiting agents
            </h1>
            <p className="mt-4 text-base md:text-lg text-slate-300 max-w-xl">
              FluxHire automates talent discovery, qualification and outreach — matching companies with top candidates while guiding applicants through every step with personal AI agents.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-md bg-emerald-400 text-black px-5 py-3 font-medium hover:bg-emerald-300 transition">
                Request a demo
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#candidates" className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 px-5 py-3 text-slate-100 hover:bg-white/10 transition">
                <MessageSquare className="w-4 h-4" />
                Try the candidate agent
              </a>
            </div>
            <div className="mt-6 text-xs text-slate-400">No long setup. Integrates with your ATS in minutes.</div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-tr from-emerald-500/20 via-cyan-500/10 to-transparent blur-2xl rounded-3xl" />
            <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-4 md:p-6 shadow-2xl">
              <div className="grid grid-cols-2 gap-4">
                <StatCard label="Qualified matches" value="128" trend="+34%" />
                <StatCard label="Time-to-hire" value="12d" trend="-41%" negative />
                <MiniList title="Top Skills" items={["Go", "React", "Kubernetes", "PostgreSQL"]} />
                <MiniList title="Screening" items={["Role fit ✅", "Comp match ✅", "Availability ✅"]} />
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {['Sourcing','Screening','Outreach'].map((t, i) => (
                  <div key={t} className="rounded-lg border border-white/10 bg-black/40 p-3">
                    <div className="text-xs text-slate-400">{t}</div>
                    <div className="mt-1 h-2 w-full rounded bg-slate-800">
                      <div className="h-2 rounded bg-gradient-to-r from-emerald-400 to-cyan-400" style={{ width: `${60 + i*12}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ label, value, trend, negative = false }) {
  return (
    <div className="rounded-xl border border-white/10 bg-black/40 p-4">
      <div className="text-xs text-slate-400">{label}</div>
      <div className="mt-1 flex items-baseline gap-2">
        <div className="text-2xl font-semibold">{value}</div>
        <div className={"text-xs " + (negative ? 'text-rose-400' : 'text-emerald-400')}>{trend}</div>
      </div>
    </div>
  );
}

function MiniList({ title, items }) {
  return (
    <div className="rounded-xl border border-white/10 bg-black/40 p-4">
      <div className="text-xs text-slate-400 mb-2">{title}</div>
      <ul className="space-y-1">
        {items.map((it) => (
          <li key={it} className="text-sm text-slate-200">{it}</li>
        ))}
      </ul>
    </div>
  );
}
