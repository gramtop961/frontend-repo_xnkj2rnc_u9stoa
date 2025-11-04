import React from 'react';
import { Building2, UserCircle, ArrowRight } from 'lucide-react';

export default function HowItWorks() {
  return (
    <section id="how" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10">
          <Track
            id="companies"
            icon={Building2}
            title="For Companies"
            steps={[
              {
                label: 'Sync your ATS',
                detail: 'Connect roles, stages and hiring team in minutes.'
              },
              {
                label: 'Define success',
                detail: 'Skills, impact, compensation and must-haves got it.'
              },
              {
                label: 'Review shortlist',
                detail: 'AI screening delivers ranked matches with explanations.'
              },
              {
                label: 'Automated outreach',
                detail: 'Personalized, compliant campaigns drive reply rates.'
              }
            ]}
            cta={{ label: 'Request demo', href: '#contact' }}
          />

          <Track
            id="candidates"
            icon={UserCircle}
            title="For Candidates"
            steps={[
              { label: 'Meet your agent', detail: 'Share goals, experience and preferences.' },
              { label: 'Boost your profile', detail: 'AI refines resume and portfolio to each role.' },
              { label: 'Ace the interview', detail: 'Practice with role-specific prep sessions.' },
              { label: 'Negotiate offers', detail: 'Compare compensation and culture fit with clarity.' }
            ]}
            cta={{ label: 'Try the agent', href: '#candidates' }}
          />
        </div>
      </div>
    </section>
  );
}

function Track({ id, icon: Icon, title, steps, cta }) {
  return (
    <div id={id} className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 border border-white/10 flex items-center justify-center text-emerald-300">
          <Icon className="w-5 h-5" />
        </div>
        <h3 className="text-xl font-medium">{title}</h3>
      </div>
      <ol className="mt-6 space-y-4">
        {steps.map((s) => (
          <li key={s.label} className="flex items-start gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
            <div>
              <div className="font-medium">{s.label}</div>
              <div className="text-sm text-slate-300">{s.detail}</div>
            </div>
          </li>
        ))}
      </ol>
      <a
        href={cta.href}
        className="mt-6 inline-flex items-center gap-2 rounded-md border border-white/15 px-4 py-2 text-sm hover:bg-white/10 transition"
      >
        {cta.label}
        <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  );
}
