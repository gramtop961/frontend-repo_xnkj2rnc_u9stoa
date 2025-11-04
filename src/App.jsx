import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import FeatureGrid from './components/FeatureGrid.jsx';
import HowItWorks from './components/HowItWorks.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-black text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <FeatureGrid />
        <HowItWorks />
      </main>
      <footer className="border-t border-white/10 mt-24 py-10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-slate-400">© {new Date().getFullYear()} FluxHire — Automated Headhunting Platform</p>
          <nav className="flex items-center gap-6 text-sm text-slate-300">
            <a href="#solutions" className="hover:text-white transition">Solutions</a>
            <a href="#companies" className="hover:text-white transition">For Companies</a>
            <a href="#candidates" className="hover:text-white transition">For Candidates</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
