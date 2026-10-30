import React from 'react';

export default function GrainOverlay() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-[100] grain-overlay opacity-[0.035] mix-blend-screen"
      aria-hidden="true"
    />
  );
}

