import React, { useState } from 'react';
import { TECH_STACK } from '../data/portfolioData';
import { Layers, Database, Code2, Server, Terminal, Wrench } from 'lucide-react';

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState(null);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'FRONTEND':
        return <Layers className="w-5 h-5" />;
      case 'BACKEND':
        return <Server className="w-5 h-5" />;
      case 'DATABASE':
        return <Database className="w-5 h-5" />;
      case 'PROGRAMMING':
        return <Code2 className="w-5 h-5" />;
      case 'COMPUTER SCIENCE':
        return <Terminal className="w-5 h-5" />;
      case 'DEVELOPER TOOLS':
        return <Wrench className="w-5 h-5" />;
      default:
        return <Layers className="w-5 h-5" />;
    }
  };

  return (
    <section id="stack" className="relative w-full py-28 md:py-36 bg-[#070707] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/[0.08] pb-8 mb-16 md:mb-24">
          <div>
            <span className="font-mono text-xs md:text-sm tracking-[0.3em] text-silver-400 uppercase">
              03 // THE STACK
            </span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl md:text-7xl font-bold tracking-[0.03em] text-white">
              TOOLS I BUILD WITH.
            </h2>
          </div>
          <div className="mt-6 md:mt-0 font-mono text-xs text-silver-400 tracking-[0.2em] uppercase">
            // TECHNICAL SYSTEM MATRIX
          </div>
        </div>

        {/* Editorial Technology Categorization Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {TECH_STACK.map((group, idx) => (
            <div
              key={group.category}
              onMouseEnter={() => setActiveCategory(group.category)}
              onMouseLeave={() => setActiveCategory(null)}
              className="relative p-8 bg-[#0a0a0c] border border-white/[0.07] hover:border-white/30 transition-all duration-400 flex flex-col justify-between group overflow-hidden"
            >
              {/* Subtle top indicator */}
              <div className="flex items-center justify-between pb-6 border-b border-white/[0.06]">
                <div className="flex items-center gap-3 text-silver-300 group-hover:text-white transition-colors">
                  {getCategoryIcon(group.category)}
                  <h3 className="font-display font-bold text-base md:text-lg tracking-[0.15em] uppercase">
                    {group.category}
                  </h3>
                </div>
                <span className="font-mono text-xs text-silver-500">
                  0{idx + 1}
                </span>
              </div>

              {/* Description */}
              <p className="my-6 text-xs text-silver-400 font-light leading-relaxed">
                {group.description}
              </p>

              {/* Skills Interactive List */}
              <div className="flex flex-wrap gap-2 pt-2">
                {group.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    data-cursor="link"
                    className="px-3 py-1.5 text-xs font-mono tracking-wider bg-white/[0.03] text-silver-200 border border-white/[0.08] hover:border-white/40 hover:bg-white/[0.08] hover:text-white hover:-translate-y-0.5 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Decorative Subtle Corner Glow */}
              <div className="absolute -bottom-10 -right-10 w-28 h-28 bg-white/[0.02] rounded-full blur-xl pointer-events-none group-hover:bg-white/[0.06] transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Craftsmanship Note */}
        <div className="mt-16 p-6 border border-white/[0.06] bg-white/[0.01] flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-silver-400 gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-white/40" />
            <span>PRAGMATIC SELECTION: TOOLS CHOSEN FOR RELIABILITY, PRECISION, AND SCALE.</span>
          </div>
          <span className="text-silver-500 tracking-wider">NO ARBITRARY PERCENTAGES • REAL ENGINEERING CRAFT</span>
        </div>
      </div>
    </section>
  );
}

