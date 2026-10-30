import React, { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const cursorDotRef = useRef(null);
  const cursorRingRef = useRef(null);
  const [cursorText, setCursorText] = useState('');
  const [cursorVariant, setCursorVariant] = useState('default'); // 'default', 'link', 'project', 'image'
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Detect touch device
    if (window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window) {
      setIsTouchDevice(true);
      return;
    }

    document.documentElement.classList.add('custom-cursor-active');

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let animationId;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) setIsVisible(true);

      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      // Check hovered element
      const target = e.target;
      if (!target) return;

      const projectEl = target.closest('[data-cursor="project"]');
      const linkEl = target.closest('a, button, [data-cursor="link"]');
      const imageEl = target.closest('[data-cursor="image"]');

      if (projectEl) {
        setCursorVariant('project');
        setCursorText('VIEW');
      } else if (imageEl) {
        setCursorVariant('image');
        setCursorText('EXPLORE');
      } else if (linkEl) {
        setCursorVariant('link');
        setCursorText('OPEN ↗');
      } else {
        setCursorVariant('default');
        setCursorText('');
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Smooth lerp for outer ring
    const render = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      if (cursorRingRef.current) {
        cursorRingRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }

      animationId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    animationId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animationId);
      document.documentElement.classList.remove('custom-cursor-active');
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  const isExpanded = cursorVariant !== 'default';

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {/* Outer subtle lagging ring / interactive badge */}
      <div
        ref={cursorRingRef}
        className={`fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-300 ease-out flex items-center justify-center ${
          isExpanded
            ? 'w-24 h-24 bg-white/10 backdrop-blur-md border border-white/40 shadow-[0_0_25px_rgba(255,255,255,0.15)]'
            : 'w-9 h-9 border border-white/30 bg-transparent'
        }`}
        style={{ willChange: 'transform' }}
      >
        {cursorText && (
          <span className="font-mono text-[10px] tracking-widest text-white font-medium uppercase select-none transition-opacity duration-200">
            {cursorText}
          </span>
        )}
      </div>

      {/* Center pinpoint */}
      <div
        ref={cursorDotRef}
        className={`fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full transition-opacity duration-200 ${
          isExpanded ? 'w-1 h-1 bg-white opacity-40' : 'w-1.5 h-1.5 bg-white opacity-90'
        }`}
        style={{ willChange: 'transform' }}
      />
    </div>
  );
}

