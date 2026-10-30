import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Navbar({ onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'about', label: '01 ABOUT', href: '#about' },
    { id: 'work', label: '02 WORK', href: '#work' },
    { id: 'stack', label: '03 STACK', href: '#stack' },
    { id: 'discipline', label: '04 DISCIPLINE', href: '#discipline' },
    { id: 'contact', label: '05 CONTACT', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);

      // Section tracking
      const sections = ['hero', 'about', 'work', 'stack', 'how-i-think', 'discipline', 'education', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 260 && rect.bottom >= 260) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-4 bg-[#050505]/85 backdrop-blur-md border-b border-white/[0.08]'
            : 'py-7 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Monogram / Identity */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="group flex items-center gap-3 text-white tracking-widest"
            data-cursor="link"
          >
            <div className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center transition-all duration-300 group-hover:border-white/70 group-hover:scale-105">
              <span className="font-mono text-[10px] tracking-widest text-silver-300">AS</span>
            </div>
            <span className="font-display font-medium text-xs md:text-sm tracking-[0.25em] text-silver-100 group-hover:text-white transition-colors uppercase">
              {PERSONAL_INFO.name}
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  data-cursor="link"
                  className={`font-mono text-[11px] tracking-[0.2em] transition-all duration-300 relative py-1 ${
                    isActive ? 'text-white font-medium' : 'text-silver-400 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-white shadow-[0_0_8px_rgba(255,255,255,0.7)] animate-pulse" />
                  )}
                </a>
              );
            })}

            {/* Quick Resume Link */}
            <button
              onClick={onOpenResume}
              data-cursor="link"
              className="ml-4 font-mono text-[10px] tracking-[0.2em] px-3.5 py-1.5 rounded-none border border-white/20 hover:border-white/60 text-silver-200 hover:text-white transition-all duration-300 uppercase flex items-center gap-1.5"
            >
              <span>RESUME</span>
              <ArrowUpRight className="w-3 h-3 text-silver-400" />
            </button>
          </nav>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-4 lg:hidden">
            <button
              onClick={onOpenResume}
              className="font-mono text-[10px] tracking-wider px-3 py-1 border border-white/20 text-silver-300"
            >
              RESUME
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="p-2 text-silver-300 hover:text-white transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Cinematic Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-[#050505]/95 backdrop-blur-xl lg:hidden flex flex-col justify-between p-8 pt-28 transition-all duration-500 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col space-y-6">
          <span className="font-mono text-[10px] tracking-[0.3em] text-silver-500 uppercase">
            // INDEX NAVIGATION
          </span>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="font-display text-2xl tracking-[0.15em] text-silver-200 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="pt-8 border-t border-white/10 space-y-4">
          <p className="font-mono text-xs text-silver-400">{PERSONAL_INFO.role}</p>
          <div className="flex gap-6 text-xs font-mono text-silver-400">
            <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="hover:text-white">
              GITHUB ↗
            </a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:text-white">
              LINKEDIN ↗
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

