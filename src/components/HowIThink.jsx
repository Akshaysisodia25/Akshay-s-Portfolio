import React, { useState } from 'react';
import { HOW_I_THINK_STEPS } from '../data/portfolioData';
import { ArrowDown, Cpu, GitCommit, Layers, Terminal } from 'lucide-react';

export default function HowIThink() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="how-i-think" className="relative w-full py-28 md:py-40 bg-[#050505] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/[0.08] pb-8 mb-20 md:mb-28">
          <div>
            <span className="font-mono text-xs md:text-sm tracking-[0.3em] text-silver-400 uppercase">
              04 // HOW I THINK
            </span>
            <h2 className="mt-4 font-display text-4xl sm:text-6xl md:text-8xl font-bold tracking-[0.03em] text-white leading-tight">
              BUILD.<br />
              <span className="text-silver-300">BREAK.</span><br />
              <span className="text-silver-400">UNDERSTAND.</span><br />
              <span className="text-silver-500">IMPROVE.</span>
            </h2>
          </div>
          <div className="mt-8 md:mt-0 max-w-sm space-y-3 font-mono text-xs text-silver-400 tracking-wider">
            <p>
              // METHODOLOGICAL MENTAL MODEL
            </p>
            <p className="font-sans text-silver-300 font-light leading-relaxed">
              Software is not an accident of trial and error; it is a methodical progression from ambiguous real-world friction to mathematical and architectural clarity.
            </p>
          </div>
        </div>

        {/* Technical Focus Areas Statement */}
        <div className="mb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: "ALGORITHMIC RIGOR", desc: "Data Structures & Algorithms, Big-O asymptotic analysis, optimization of space and time trade-offs." },
            { title: "BACKEND ARCHITECTURE", desc: "Idempotent REST APIs, authentication security, middleware flow, and resilient micro-services." },
            { title: "DATABASE SYSTEMS", desc: "Relational modeling in PostgreSQL, Prisma schema normalization, indexing, and transactional integrity." },
            { title: "FRONTEND PRECISION", desc: "Modular state lifecycles, predictable reactive data flows, and high-performance rendered surfaces." }
          ].map((item, i) => (
            <div key={i} className="p-6 bg-[#08080a] border border-white/[0.06] hover:border-white/20 transition-all">
              <span className="font-mono text-[10px] text-silver-500 tracking-widest block mb-2">0{i + 1} // DOMAIN</span>
              <h4 className="font-heading font-semibold text-sm tracking-wider text-white mb-2">{item.title}</h4>
              <p className="text-xs font-light text-silver-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Visual Sequential Flow: PROBLEM -> UNDERSTAND -> DESIGN -> BUILD -> TEST -> IMPROVE */}
        <div className="border border-white/[0.08] bg-[#09090c] p-8 md:p-14">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-6 mb-12">
            <span className="font-mono text-xs tracking-[0.25em] text-silver-400 uppercase">
              // THE EXECUTION PIPELINE
            </span>
            <span className="font-mono text-xs text-silver-500 tracking-widest">
              6 STAGES OF PRODUCTION ENGINEERING
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
            {HOW_I_THINK_STEPS.map((stepItem, idx) => {
              const isSelected = activeStep === idx;

              return (
                <div
                  key={stepItem.step}
                  onClick={() => setActiveStep(idx)}
                  className={`p-6 border transition-all duration-400 cursor-pointer flex flex-col justify-between min-h-[220px] ${
                    isSelected
                      ? 'bg-white/[0.06] border-white/40 shadow-[0_0_25px_rgba(255,255,255,0.06)]'
                      : 'bg-white/[0.01] border-white/[0.06] hover:border-white/20 hover:bg-white/[0.03]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs text-silver-500">
                        {stepItem.step}
                      </span>
                      {idx < HOW_I_THINK_STEPS.length - 1 && (
                        <ArrowDown className="w-3.5 h-3.5 text-silver-600 lg:-rotate-90" />
                      )}
                    </div>
                    <h4 className="font-display font-bold text-sm md:text-base tracking-[0.1em] text-white">
                      {stepItem.phase}
                    </h4>
                    <p className="mt-2 text-xs font-mono text-silver-300">
                      {stepItem.title}
                    </p>
                  </div>

                  <p className="mt-4 text-[11px] font-light text-silver-400 leading-relaxed">
                    {stepItem.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

