import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { ExternalLink, Github, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function SelectedWork() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  return (
    <section id="work" className="relative w-full py-28 md:py-40 bg-[#050505] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/[0.08] pb-8 mb-20 md:mb-28">
          <div>
            <span className="font-mono text-xs md:text-sm tracking-[0.3em] text-silver-400 uppercase">
              02 // SELECTED WORK
            </span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl md:text-7xl font-bold tracking-[0.03em] text-white">
              THINGS I'VE BUILT.
            </h2>
          </div>
          <div className="mt-6 md:mt-0 font-mono text-xs text-silver-400 tracking-[0.2em] uppercase">
            // EDITORIAL CASE STUDIES • 2025–2026
          </div>
        </div>

        {/* Full-Width Project Experiences */}
        <div className="space-y-32 md:space-y-44">
          {PROJECTS.map((project, index) => {
            const isEven = index % 2 === 1;

            return (
              <article
                key={project.number}
                data-cursor="project"
                className="relative group border-b border-white/[0.08] pb-24 md:pb-36 last:border-b-0"
              >
                {/* Top Meta Bar */}
                <div className="flex items-baseline justify-between mb-8 pb-4 border-b border-white/[0.05]">
                  <div className="flex items-baseline gap-4 md:gap-8">
                    <span className="font-display text-5xl sm:text-7xl md:text-8xl font-bold text-silver-500/50 group-hover:text-white transition-colors duration-500 select-none">
                      {project.number}
                    </span>
                    <span className="font-mono text-xs md:text-sm tracking-[0.25em] text-silver-400 uppercase">
                      {project.category}
                    </span>
                  </div>
                  <span className="font-mono text-xs md:text-sm text-silver-500 tracking-widest">
                    {project.year}
                  </span>
                </div>

                {/* Main Case Study Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                  {/* Visual Preview Area */}
                  <div
                    className={`lg:col-span-7 ${
                      isEven ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <div className="relative overflow-hidden border border-white/10 bg-[#0a0a0d] group/img rounded-sm shadow-[0_15px_40px_rgba(0,0,0,0.8)]">
                      <img
                        src={project.image}
                        alt={`${project.title} Architectural Preview`}
                        className="w-full h-auto object-cover transform group-hover/img:scale-[1.03] transition-transform duration-700 ease-out"
                        loading="lazy"
                      />

                      {/* Overlay Shimmer on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.03] to-transparent pointer-events-none opacity-0 group-hover/img:opacity-100 transition-opacity duration-500" />
                    </div>

                    {/* Secondary Detail Image or Logo for Project 2 */}
                    {project.secondaryImage && (
                      <div className="mt-4 grid grid-cols-2 gap-4">
                        <div className="border border-white/[0.06] bg-[#0c0c10] p-2 overflow-hidden">
                          <img
                            src={project.secondaryImage}
                            alt="Blueprint Telemetry"
                            className="w-full h-auto object-cover opacity-80 hover:opacity-100 transition-opacity"
                          />
                        </div>
                        {project.logoImage && (
                          <div className="border border-white/[0.06] bg-[#0c0c10] p-4 flex items-center justify-center">
                            <img
                              src={project.logoImage}
                              alt="TDBD Engineering Logo"
                              className="max-h-20 w-auto object-contain brightness-110"
                            />
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Content & Case Study Details */}
                  <div
                    className={`lg:col-span-5 flex flex-col justify-between space-y-8 ${
                      isEven ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div>
                      <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                        {project.title}
                      </h3>
                      <p className="mt-3 font-mono text-xs md:text-sm text-silver-300 tracking-[0.1em] uppercase">
                        "{project.editorialQuote}"
                      </p>
                      <p className="mt-6 text-sm md:text-base font-light text-silver-300 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Technical Meta Table */}
                    <div className="space-y-4 pt-6 border-t border-white/[0.08]">
                      <div>
                        <span className="font-mono text-[10px] tracking-[0.25em] text-silver-500 uppercase block mb-1">
                          ROLE
                        </span>
                        <span className="font-mono text-xs md:text-sm text-silver-200 uppercase font-medium">
                          {project.role}
                        </span>
                      </div>

                      <div>
                        <span className="font-mono text-[10px] tracking-[0.25em] text-silver-500 uppercase block mb-2">
                          STACK
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 text-[11px] font-mono tracking-wider bg-white/[0.03] border border-white/[0.08] text-silver-300 hover:border-white/30 hover:text-white transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Case Highlights */}
                      <div>
                        <span className="font-mono text-[10px] tracking-[0.25em] text-silver-500 uppercase block mb-2">
                          KEY ARCHITECTURAL HIGHLIGHTS
                        </span>
                        <ul className="space-y-2">
                          {project.highlights.map((item, hIdx) => (
                            <li key={hIdx} className="flex items-start gap-2.5 text-xs text-silver-400 font-light leading-relaxed">
                              <span className="text-silver-500 mt-0.5">◈</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Action Links */}
                    <div className="flex flex-wrap items-center gap-4 pt-4">
                      {project.demo ? (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          data-cursor="link"
                          className="px-6 py-3 bg-white text-black font-mono text-xs tracking-[0.2em] font-semibold uppercase hover:bg-silver-200 transition-all duration-300 flex items-center gap-2"
                        >
                          <span>LIVE DEMO</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      ) : (
                        <div className="px-6 py-3 bg-white/[0.05] border border-white/10 text-silver-500 font-mono text-xs tracking-[0.2em] uppercase select-none cursor-not-allowed">
                          PRODUCTION CLIENT SYSTEM
                        </div>
                      )}

                      {project.github ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          data-cursor="link"
                          className="px-6 py-3 border border-white/20 text-white font-mono text-xs tracking-[0.2em] uppercase hover:border-white/70 hover:bg-white/[0.04] transition-all duration-300 flex items-center gap-2"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>SOURCE REPOSITORY</span>
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

