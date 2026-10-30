import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { FileText, Download, Eye, ExternalLink } from 'lucide-react';

export default function ResumeSection({ onOpenResume }) {
  return (
    <section id="resume-section" className="relative w-full py-24 md:py-32 bg-[#060608] border-t border-white/[0.08]">
      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
        {/* Kicker */}
        <span className="font-mono text-xs md:text-sm tracking-[0.3em] text-silver-400 uppercase">
          // CURRICULUM VITAE &amp; CREDENTIALS
        </span>

        {/* Heading */}
        <h2 className="mt-4 font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-[0.03em] text-white">
          THE FULL STORY.
        </h2>

        <p className="mt-6 max-w-xl mx-auto text-silver-300 text-sm md:text-base font-light leading-relaxed">
          Complete academic records, technical proficiencies, project breakdowns, and athletic competitive achievements compiled in standard curriculum format.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
          <button
            onClick={onOpenResume}
            data-cursor="link"
            className="px-8 py-4 bg-white text-black font-mono text-xs tracking-[0.2em] font-semibold uppercase hover:bg-silver-200 transition-all duration-300 flex items-center gap-2 shadow-[0_0_25px_rgba(255,255,255,0.15)]"
          >
            <Eye className="w-4 h-4" />
            <span>VIEW RESUME</span>
          </button>

          <a
            href={PERSONAL_INFO.resumeUrl}
            download="Akshay_Sisodia_Resume.pdf"
            data-cursor="link"
            className="px-8 py-4 border border-white/20 text-white font-mono text-xs tracking-[0.2em] uppercase hover:border-white/70 hover:bg-white/[0.04] transition-all duration-300 flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            <span>DOWNLOAD RESUME</span>
          </a>
        </div>

        {/* Minimal verification note */}
        <div className="mt-8 font-mono text-[10px] tracking-widest text-silver-500 uppercase">
          VERIFIED SOURCE • NEWTON SCHOOL OF TECHNOLOGY &amp; THE GURUKUL NILOKHERI
        </div>
      </div>
    </section>
  );
}

