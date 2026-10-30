import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Shield, Cpu, Target, Award, ArrowUpRight } from 'lucide-react';

export default function ThePerson() {
  const pillars = [
    { title: "DISCIPLINE", desc: "Commitment to steady, deliberate execution every day, regardless of external circumstance." },
    { title: "CONSISTENCY", desc: "Iterative mastery. Fundamentals repeated until complex mechanics become second nature." },
    { title: "LEADERSHIP & TEAMWORK", desc: "Communicating with clarity and elevating teammates through pressure and uncertainty." },
    { title: "PERFORMING UNDER PRESSURE", desc: "Remaining calm, analytical, and decisive when time, constraints, or stakes intensify." },
    { title: "HARD WORK", desc: "Respecting the effort required to master complex systems, algorithms, and architectures." }
  ];

  return (
    <section id="about" className="relative w-full py-28 md:py-36 bg-[#070707] border-t border-white/[0.08] overflow-hidden">
      {/* Background Subtle Geometry & Radial Gradient */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.06)_0%,transparent_60%)]" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/[0.08] pb-8 mb-16 md:mb-24">
          <div>
            <span className="font-mono text-xs md:text-sm tracking-[0.3em] text-silver-400 uppercase">
              01 // THE PERSON
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-6xl font-bold tracking-[0.03em] text-white leading-tight">
              ENGINEERING THE DIGITAL.<br />
              <span className="text-silver-400">TRAINING THE DISCIPLINE.</span>
            </h2>
          </div>
          <div className="mt-6 md:mt-0 font-mono text-xs text-silver-400 tracking-[0.2em] uppercase">
            // IDENTITY &amp; PHILOSOPHY
          </div>
        </div>

        {/* Editorial Layout: Portrait + Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Portrait Column */}
          <div className="lg:col-span-5 relative group" data-cursor="image">
            <div className="relative overflow-hidden border border-white/10 bg-[#0c0c0e]">
              <img
                src={PERSONAL_INFO.editorialImage}
                alt="Akshay Sisodia Editorial Portrait"
                className="w-full h-auto object-cover grayscale contrast-125 brightness-95 group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[10px] font-mono tracking-widest text-silver-300">
                <span>AKSHAY SISODIA</span>
                <span>SVYASA • CS '29</span>
              </div>
            </div>

            {/* Accent frame decoration */}
            <div className="absolute -bottom-3 -right-3 w-full h-full border border-white/[0.05] -z-10 pointer-events-none hidden sm:block" />
          </div>

          {/* Biography & Focus Column */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-10">
            <div className="space-y-6">
              <span className="font-mono text-xs tracking-[0.25em] text-silver-400 uppercase">
                // ACADEMIC &amp; TECHNICAL FOUNDATION
              </span>
              <p className="font-heading text-xl sm:text-2xl text-silver-100 font-normal leading-relaxed">
                I am a Computer Science undergraduate pursuing my B.Tech at{' '}
                <span className="text-white font-medium border-b border-white/40 pb-0.5">
                  Newton School of Technology (SVYASA)
                </span>
                .
              </p>
              <p className="text-silver-300 text-base md:text-lg font-light leading-relaxed">
                My approach to software is rooted in disciplined curiosity. I don't treat programming as a mere set of syntax rules; I treat it as an engineering discipline centered on craftsmanship, algorithmic precision, and building systems that genuinely work in the real world.
              </p>
            </div>

            {/* Core Technical Focuses */}
            <div className="pt-6 border-t border-white/[0.08]">
              <span className="font-mono text-xs tracking-[0.2em] text-silver-400 uppercase block mb-4">
                // CORE AREAS OF EXPLORATION
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Software Engineering & Architecture",
                  "Frontend Engineering & Interactive Systems",
                  "Backend Development & RESTful APIs",
                  "Problem Solving & Algorithmic Rigor",
                  "Data Structures & Complexity Analysis",
                  "Building Practical User-Focused Products"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 bg-white/[0.02] border border-white/[0.06] hover:border-white/20 transition-colors">
                    <span className="font-mono text-[10px] text-silver-500 pt-0.5">0{idx + 1}</span>
                    <span className="text-sm font-normal text-silver-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Intersection Transition: CODE. DISCIPLINE. PROGRESS. */}
        <div className="mt-28 md:mt-36 pt-20 border-t border-white/[0.08]">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="font-mono text-xs tracking-[0.3em] text-silver-400 uppercase">
              // THE ATHLETIC INTERSECTION
            </span>
            <div className="mt-6 flex flex-wrap justify-center items-center gap-4 sm:gap-8 font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-[0.06em] text-white">
              <span>CODE.</span>
              <span className="text-silver-500 font-light">•</span>
              <span className="text-silver-300">DISCIPLINE.</span>
              <span className="text-silver-500 font-light">•</span>
              <span className="text-silver-400">PROGRESS.</span>
            </div>
            <p className="mt-8 text-lg sm:text-xl font-light text-silver-300 leading-relaxed max-w-2xl mx-auto">
              "Beyond the screen, I have spent more than six years training and competing in Taekwondo across district, state, and international-level arenas."
            </p>
          </div>

          {/* 5 Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 bg-white/[0.02] border border-white/[0.06] hover:border-white/30 transition-all duration-400 flex flex-col justify-between group"
              >
                <div>
                  <div className="font-mono text-[10px] text-silver-500 tracking-widest mb-3">
                    PILLAR // 0{idx + 1}
                  </div>
                  <h3 className="font-heading text-sm md:text-base font-bold tracking-wider text-white group-hover:text-silver-200 transition-colors">
                    {pillar.title}
                  </h3>
                </div>
                <p className="mt-4 text-xs font-light text-silver-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

