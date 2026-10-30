import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import CustomCursor from './components/CustomCursor';
import GrainOverlay from './components/GrainOverlay';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ThePerson from './components/ThePerson';
import SelectedWork from './components/SelectedWork';
import TechStack from './components/TechStack';
import HowIThink from './components/HowIThink';
import Discipline from './components/Discipline';
import Education from './components/Education';
import ResumeSection from './components/ResumeSection';
import ResumeModal from './components/ResumeModal';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Initialize Lenis smooth momentum scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050505] text-[#f5f5f7] selection:bg-white selection:text-black font-sans">
      {/* Cinematic Analog Film Grain Texture */}
      <GrainOverlay />

      {/* Subtle Interactive Magnetic Cursor (desktop only) */}
      <CustomCursor />

      {/* Editorial Minimal Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Flow */}
      <main className="relative z-10 flex flex-col">
        {/* Fullscreen Hero */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* 01 / THE PERSON */}
        <ThePerson />

        {/* 02 / SELECTED WORK */}
        <SelectedWork />

        {/* 03 / THE STACK */}
        <TechStack />

        {/* 04 / HOW I THINK */}
        <HowIThink />

        {/* 05 / DISCIPLINE */}
        <Discipline />

        {/* 06 / EDUCATION & RIGHT NOW */}
        <Education />

        {/* RESUME: THE FULL STORY */}
        <ResumeSection onOpenResume={() => setIsResumeOpen(true)} />

        {/* CONTACT: LET'S BUILD SOMETHING */}
        <Contact />
      </main>

      {/* Editorial Footer */}
      <Footer />

      {/* Fullscreen Interactive Resume Viewer Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

