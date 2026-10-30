import React from 'react';
import HeroVisual from './HeroVisual';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ChevronDown, ArrowDown } from 'lucide-react';

export default function Hero({ onOpenResume }) {
  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col justify-between items-center px-6 md:px-12 pt-28 pb-10 overflow-hidden bg-[#050505]"
    >
      {/* 3D Kinetic Mechanical Engineering Visual */}
      <HeroVisual />

      {/* Subtle Atmospheric Vignette & Radial Light */}
      <div 
        className="absolute inset-0 pointer-events-none z-[1] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_0%,rgba(5,5,5,0.85)_75%,#050505_100%)]"
        aria-hidden="true"
      />

      {/* Top Telemetry / Status Line */}
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between z-10 text-[10px] md:text-xs font-mono text-silver-400 tracking-[0.2em] uppercase border-b border-white/[0.06] pb-3">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>LOCATION: INDIA</span>
        </div>
        <div className="hidden sm:flex items-center gap-6">
          <span>PORTFOLIO // 2026 EDITION</span>
          <span className="text-white/20">|</span>
          <span>DISCIPLINE × ENGINEERING</span>
        </div>
        <div>
          <span>SVYASA • CS '29</span>
        </div>
      </div>

      {/* Center Cinematic Typography */}
      <div className="w-full max-w-7xl mx-auto my-auto z-10 flex flex-col items-center text-center py-12 md:py-16">
        {/* Subtitle / Role kicker */}
        <div className="inline-flex items-center gap-3 px-4 py-1.5 mb-6 md:mb-8 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-sm">
          <span className="font-mono text-[9px] md:text-[11px] tracking-[0.25em] text-silver-300 uppercase">
            {PERSONAL_INFO.tagline}
          </span>
        </div>

        {/* Extremely Large Hero Name (Spyker-inspired scale) */}
        <h1 className="flex flex-col select-none tracking-tight">
          <span className="font-display text-5xl sm:text-7xl md:text-9xl lg:text-[11.5rem] font-bold text-white tracking-[0.06em] leading-[0.88] drop-shadow-[0_10px_35px_rgba(255,255,255,0.12)]">
            {PERSONAL_INFO.firstName}
          </span>
          <span className="font-display text-5xl sm:text-7xl md:text-9xl lg:text-[11.5rem] font-bold text-silver-400 hover:text-white transition-colors duration-700 tracking-[0.06em] leading-[0.88] drop-shadow-[0_10px_35px_rgba(255,255,255,0.08)]">
            {PERSONAL_INFO.lastName}
          </span>
        </h1>

        {/* Statement */}
        <p className="mt-8 md:mt-12 max-w-2xl text-base sm:text-lg md:text-xl font-light text-silver-300 tracking-wide leading-relaxed">
          "{PERSONAL_INFO.heroStatement}"
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
          <a
            href="#work"
            data-cursor="link"
            className="px-7 py-3.5 bg-white text-black font-mono text-xs tracking-[0.2em] font-semibold uppercase hover:bg-silver-200 transition-all duration-300 transform hover:-translate-y-0.5 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            EXPLORE SELECTED WORK
          </a>
          <button
            onClick={onOpenResume}
            data-cursor="link"
            className="px-7 py-3.5 border border-white/20 text-white font-mono text-xs tracking-[0.2em] uppercase hover:border-white/70 hover:bg-white/[0.04] transition-all duration-300"
          >
            VIEW RESUME
          </button>
        </div>
      </div>

      {/* Bottom Minimal Indicator */}
      <div className="w-full max-w-7xl mx-auto flex items-end justify-between z-10 pt-4 border-t border-white/[0.06]">
        <div className="text-[10px] md:text-xs font-mono text-silver-500 tracking-[0.15em] uppercase hidden md:block">
          "I DON'T JUST WRITE CODE. I BUILD THINGS."
        </div>

        <button
          onClick={scrollToAbout}
          data-cursor="link"
          className="group mx-auto md:mx-0 flex items-center gap-2 text-silver-400 hover:text-white font-mono text-[10px] md:text-xs tracking-[0.25em] transition-colors uppercase"
        >
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-y-1 animate-bounce" />
        </button>

        <div className="text-[10px] md:text-xs font-mono text-silver-500 tracking-[0.15em] uppercase hidden md:block">
          NEWTON SCHOOL OF TECHNOLOGY
        </div>
      </div>
    </section>
  );
}

