import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#030303] border-t border-white/[0.08] py-16 px-6 md:px-12 text-silver-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left: Brand Identity */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
          <span className="font-display font-bold text-sm tracking-[0.25em] text-white uppercase">
            {PERSONAL_INFO.name}
          </span>
          <span className="font-mono text-[11px] tracking-[0.18em] text-silver-500 uppercase">
            COMPUTER SCIENCE • BUILDING • LEARNING
          </span>
          <span className="font-mono text-[10px] text-silver-600">
            © 2026 {PERSONAL_INFO.name}. ALL RIGHTS RESERVED.
          </span>
        </div>

        {/* Center: Verified Links */}
        <div className="flex flex-wrap items-center justify-center gap-8 font-mono text-xs tracking-widest uppercase">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            data-cursor="link"
            className="text-silver-400 hover:text-white transition-colors"
          >
            GITHUB
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            data-cursor="link"
            className="text-silver-400 hover:text-white transition-colors"
          >
            LINKEDIN
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            data-cursor="link"
            className="text-silver-400 hover:text-white transition-colors"
          >
            EMAIL
          </a>
        </div>

        {/* Right: Back to Top */}
        <button
          onClick={scrollToTop}
          data-cursor="link"
          aria-label="Back to top"
          className="group flex items-center gap-2 font-mono text-[11px] tracking-widest text-silver-400 hover:text-white transition-colors uppercase border border-white/10 px-4 py-2 hover:border-white/30"
        >
          <span>TOP</span>
          <ArrowUp className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-y-1" />
        </button>
      </div>
    </footer>
  );
}

