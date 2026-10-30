import React from 'react';
import { EDUCATION_DATA, RIGHT_NOW } from '../data/portfolioData';
import { GraduationCap, Activity, Radio, Sparkles } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="relative w-full py-28 md:py-36 bg-[#050505] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/[0.08] pb-8 mb-16 md:mb-20">
          <div>
            <span className="font-mono text-xs md:text-sm tracking-[0.3em] text-silver-400 uppercase">
              06 // ACADEMICS &amp; PULSE
            </span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl md:text-7xl font-bold tracking-[0.03em] text-white">
              EDUCATION &amp; RIGHT NOW.
            </h2>
          </div>
          <div className="mt-6 md:mt-0 font-mono text-xs text-silver-400 tracking-[0.2em] uppercase">
            // FOUNDATION &amp; CURRENT VECTOR
          </div>
        </div>

        {/* Dual Grid: Education vs Live Vector Status */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Education Timeline */}
          <div className="lg:col-span-6 space-y-8">
            <div className="flex items-center gap-3 pb-4 border-b border-white/[0.06]">
              <GraduationCap className="w-5 h-5 text-silver-400" />
              <h3 className="font-mono text-xs tracking-[0.25em] text-silver-300 uppercase">
                ACADEMIC TRAJECTORY
              </h3>
            </div>

            <div className="space-y-6">
              {EDUCATION_DATA.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-[#08080a] border border-white/[0.06] hover:border-white/20 transition-all duration-300 relative group"
                >
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="font-mono text-[10px] text-silver-500 tracking-widest">
                      0{idx + 1} // {edu.period}
                    </span>
                    <span className="font-mono text-[11px] text-silver-300 px-2 py-0.5 bg-white/[0.04] border border-white/[0.08]">
                      {edu.grade}
                    </span>
                  </div>

                  <h4 className="font-heading text-lg font-bold text-white group-hover:text-silver-200 transition-colors">
                    {edu.institution}
                  </h4>
                  <p className="font-mono text-xs text-silver-400 mt-1 uppercase tracking-wider">
                    {edu.degree}
                  </p>
                  <p className="mt-4 text-xs font-light text-silver-400 leading-relaxed">
                    {edu.highlight}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Now Live Status */}
          <div className="lg:col-span-6 space-y-8">
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
              <div className="flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <h3 className="font-mono text-xs tracking-[0.25em] text-silver-300 uppercase">
                  RIGHT NOW // LIVE TELEMETRY
                </h3>
              </div>
              <span className="font-mono text-[10px] text-silver-500 tracking-widest uppercase">
                ACTIVE FOCUS
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {RIGHT_NOW.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-[#09090c] border border-white/[0.07] hover:border-white/30 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <span className="font-mono text-[10px] text-silver-500 tracking-widest block mb-2">
                      STATUS // 0{idx + 1}
                    </span>
                    <h4 className="font-display font-bold text-base tracking-[0.15em] text-white">
                      {item.label}
                    </h4>
                  </div>
                  <p className="mt-4 text-xs font-light text-silver-300 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>

            {/* Quick summary box */}
            <div className="p-6 border border-white/[0.06] bg-white/[0.01]">
              <span className="font-mono text-[10px] tracking-widest text-silver-400 uppercase block mb-2">
                // STUDENT BUILDER POSITIONING
              </span>
              <p className="text-xs font-light text-silver-300 leading-relaxed">
                Currently in Year 1 of B.Tech Computer Science at Newton School of Technology. Channeling rigorous daily focus into engineering real applications, backend architecture, and mastering foundational algorithms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

