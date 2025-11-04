import React from 'react';
import { Search, Shield, Users, Bot, Zap, CheckCircle2 } from 'lucide-react';

const features = [
  {
    icon: Search,
    title: 'Autonomous sourcing',
    desc: 'Continuously scans public profiles, communities and talent graphs to surface high-intent candidates.'
  },
  {
    icon: CheckCircle2,
    title: 'Smart screening',
    desc: 'Evaluates skills, intent, compensation and availability to produce a true-fit short list.'
  },
  {
    icon: Bot,
    title: 'AI agents for candidates',
    desc: 'Personal agent helps applicants improve resumes, prep for interviews and manage offers.'
  },
  {
    icon: Users,
    title: 'AI agents for teams',
    desc: 'Hiring agents coordinate with managers, write role briefs and run compliant outreach.'
  },
  {
    icon: Shield,
    title: 'Bias-aware matching',
    desc: 'Fairness safeguards and explainable scoring for equitable hiring decisions.'
  },
  {
    icon: Zap,
    title: 'ATS in minutes',
    desc: 'Plug into Greenhouse, Lever and more. Sync jobs, stages and feedback bidirectionally.'
  }
];

export default function FeatureGrid() {
  return (
    <section id="solutions" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Everything you need to automate sourcing & screening</h2>
          <p className="mt-2 text-slate-300">Purpose-built for both sides of the market — companies find the right talent, candidates get real support.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition p-5">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 border border-white/10 flex items-center justify-center text-emerald-300">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="mt-4 text-lg font-medium">{title}</h3>
              <p className="mt-1 text-sm text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
