import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Github, Linkedin, ArrowUpRight, Copy, Check } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="relative w-full py-28 md:py-44 bg-[#050505] border-t border-white/[0.08] overflow-hidden">
      {/* Background Radial Glow */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(circle_at_bottom_center,rgba(255,255,255,0.06)_0%,transparent_70%)]" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Huge Cinematic Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
          <span className="font-mono text-xs md:text-sm tracking-[0.3em] text-silver-400 uppercase">
            // INITIATE TRANSMISSION
          </span>

          <h2 className="mt-6 flex flex-col select-none">
            <span className="font-display text-5xl sm:text-7xl md:text-9xl font-bold text-white tracking-[0.04em] leading-[0.9]">
              LET'S BUILD
            </span>
            <span className="font-display text-5xl sm:text-7xl md:text-9xl font-bold text-silver-400 tracking-[0.04em] leading-[0.9]">
              SOMETHING.
            </span>
          </h2>

          <p className="mt-10 text-base sm:text-lg md:text-xl font-light text-silver-300 max-w-2xl mx-auto leading-relaxed">
            Whether it's building a complex full-stack product, collaborating on ambitious engineering projects, or discussing systems architecture.
          </p>
        </div>

        {/* Contact Matrix Card */}
        <div className="max-w-3xl mx-auto p-8 md:p-14 bg-[#09090c] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
          {/* Identity Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 border-b border-white/[0.08] gap-4">
            <div>
              <span className="font-mono text-[10px] text-silver-500 tracking-widest uppercase block">
                DIRECT INBOX
              </span>
              <h3 className="font-display text-2xl font-bold text-white tracking-wider mt-1">
                {PERSONAL_INFO.name}
              </h3>
            </div>
            
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 font-mono text-[10px] tracking-widest uppercase self-start sm:self-auto">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>ACTIVE STUDENT BUILDER</span>
            </div>
          </div>

          {/* Email Row */}
          <div className="py-8 border-b border-white/[0.08] flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="font-mono text-[10px] text-silver-500 tracking-widest uppercase block mb-1">
                PRIMARY EMAIL
              </span>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                data-cursor="link"
                className="font-mono text-base sm:text-xl text-white hover:text-silver-300 transition-colors underline decoration-white/20 underline-offset-4"
              >
                {PERSONAL_INFO.email}
              </a>
            </div>

            <button
              onClick={copyEmail}
              data-cursor="link"
              className="px-4 py-2 border border-white/15 text-silver-300 hover:text-white hover:border-white/40 font-mono text-xs tracking-wider uppercase transition-all flex items-center gap-2 self-start md:self-auto"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">COPIED</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>COPY</span>
                </>
              )}
            </button>
          </div>

          {/* Verified Social Channels */}
          <div className="pt-8">
            <span className="font-mono text-[10px] text-silver-500 tracking-widest uppercase block mb-4">
              VERIFIED CHANNELS
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                data-cursor="link"
                className="p-4 bg-white/[0.02] border border-white/[0.06] hover:border-white/30 hover:bg-white/[0.05] transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <Github className="w-4 h-4 text-silver-400 group-hover:text-white" />
                  <span className="font-mono text-xs text-silver-200 group-hover:text-white tracking-wider">
                    GITHUB / Akshaysisodia25
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-silver-500 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                data-cursor="link"
                className="p-4 bg-white/[0.02] border border-white/[0.06] hover:border-white/30 hover:bg-white/[0.05] transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <Linkedin className="w-4 h-4 text-silver-400 group-hover:text-white" />
                  <span className="font-mono text-xs text-silver-200 group-hover:text-white tracking-wider">
                    LINKEDIN / Akshay Sisodia
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-silver-500 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* Availability Scope */}
          <div className="mt-10 p-4 bg-white/[0.02] border border-white/[0.06] text-center">
            <span className="font-mono text-[11px] text-silver-400 tracking-[0.2em] uppercase">
              {PERSONAL_INFO.availability}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

