import React from 'react';
import { DISCIPLINE_DATA, PERSONAL_INFO } from '../data/portfolioData';
import { Target, Flame, Shield, Award } from 'lucide-react';

export default function Discipline() {
  return (
    <section id="discipline" className="relative w-full py-28 md:py-40 bg-[#060608] border-t border-white/[0.08] overflow-hidden">
      {/* Background Subtle Radial Lighting */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-30 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)]"
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/[0.08] pb-8 mb-16 md:mb-24">
          <div>
            <span className="font-mono text-xs md:text-sm tracking-[0.3em] text-silver-400 uppercase">
              05 // DISCIPLINE
            </span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl md:text-7xl font-bold tracking-[0.03em] text-white">
              THE COMBAT MATRIX.
            </h2>
          </div>
          <div className="mt-6 md:mt-0 font-mono text-xs text-silver-400 tracking-[0.2em] uppercase">
            // TAEKWONDO • 6+ YEARS • COMPETITIVE ARENA
          </div>
        </div>

        {/* Huge Hero Typography & Athletic Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Massive Numbers & Philosophy */}
          <div className="lg:col-span-7 space-y-10">
            {/* Massive Typography: 6+ YEARS TAEKWONDO */}
            <div className="flex flex-col">
              <span className="font-display text-7xl sm:text-9xl md:text-[11rem] font-bold text-white tracking-tighter leading-none select-none">
                {DISCIPLINE_DATA.years}
              </span>
              <div className="flex flex-wrap items-baseline gap-4 md:gap-8 mt-2">
                <span className="font-display text-4xl sm:text-6xl md:text-7xl font-bold text-silver-300 tracking-[0.08em]">
                  YEARS
                </span>
                <span className="font-display text-4xl sm:text-6xl md:text-7xl font-bold text-silver-500 tracking-[0.08em]">
                  {DISCIPLINE_DATA.sport}
                </span>
              </div>
            </div>

            {/* Core Narrative */}
            <p className="font-heading text-xl sm:text-2xl text-silver-200 font-light leading-relaxed">
              "{DISCIPLINE_DATA.statement}"
            </p>

            <p className="text-silver-400 text-base md:text-lg font-light leading-relaxed">
              {DISCIPLINE_DATA.narrative}
            </p>

            {/* Competition Tiers (Strictly verified) */}
            <div className="pt-6 border-t border-white/[0.08]">
              <span className="font-mono text-xs tracking-[0.25em] text-silver-400 uppercase block mb-4">
                // ARENA EXPERIENCES
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {DISCIPLINE_DATA.levels.map((level, i) => (
                  <div
                    key={i}
                    className="p-4 bg-white/[0.02] border border-white/[0.07] flex flex-col justify-between"
                  >
                    <span className="font-mono text-[10px] text-silver-500">STAGE 0{i + 1}</span>
                    <span className="font-mono text-xs text-white font-medium tracking-wider mt-2">
                      {level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Authentic Athletic Portrait */}
          <div className="lg:col-span-5 relative group" data-cursor="image">
            <div className="relative border border-white/10 bg-[#0a0a0c] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.9)]">
              <img
                src={PERSONAL_INFO.athleticImage}
                alt="Akshay Sisodia Taekwondo Conditioning & Athletic Training"
                className="w-full h-auto object-cover grayscale contrast-125 brightness-90 group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 right-6 font-mono text-[11px] text-silver-300 space-y-1">
                <div className="text-white font-medium tracking-widest uppercase">AKSHAY SISODIA</div>
                <div className="text-silver-400 tracking-wider">MARTIAL ARTS ATHLETE • 6+ YEARS REPETITION</div>
              </div>
            </div>

            {/* Subtle Metallic Corner Badge */}
            <div className="absolute -top-3 -left-3 px-3 py-1 bg-[#050505] border border-white/20 font-mono text-[9px] tracking-widest text-silver-300 uppercase">
              PHYSICAL CRAFTSMANSHIP
            </div>
          </div>
        </div>

        {/* Contrast Philosophy Callout */}
        <div className="mt-20 p-8 md:p-12 border border-white/[0.08] bg-white/[0.01] grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <span className="font-mono text-xs text-silver-400 tracking-[0.2em] uppercase">
              // THE SYNTHESIS
            </span>
            <h3 className="mt-2 font-display text-2xl md:text-3xl font-bold text-white tracking-wide">
              HOW COMBAT INFORMS CODE
            </h3>
          </div>
          <p className="text-sm font-light text-silver-300 leading-relaxed">
            In competitive martial arts, hesitation is penalized immediately. In software engineering, poorly designed abstractions collapse under load. Both require the same mental stance: deep respect for fundamentals, unwavering composure under stress, and relentless daily refinement.
          </p>
        </div>
      </div>
    </section>
  );
}

