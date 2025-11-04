import React from 'react';
import { Rocket, User, LogIn } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="p-2 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-500 text-black">
            <Rocket className="w-5 h-5" />
          </div>
          <span className="font-semibold tracking-tight group-hover:text-white text-slate-100">FluxHire</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
          <a href="#solutions" className="hover:text-white transition">Solutions</a>
          <a href="#companies" className="hover:text-white transition">For Companies</a>
          <a href="#candidates" className="hover:text-white transition">For Candidates</a>
          <a href="#how" className="hover:text-white transition">How it works</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white transition">
            <User className="w-4 h-4" />
            <span>Sign up</span>
          </button>
          <button className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-md bg-white text-slate-900 hover:bg-emerald-400 hover:text-black transition">
            <LogIn className="w-4 h-4" />
            <span>Sign in</span>
          </button>
        </div>
      </div>
    </header>
  );
}
