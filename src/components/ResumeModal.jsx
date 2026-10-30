import React, { useEffect } from 'react';
import { X, Download, ExternalLink, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-md animate-fadeIn"
    >
      <div className="relative w-full max-w-5xl h-[88vh] bg-[#0c0c0f] border border-white/20 rounded-none shadow-[0_25px_60px_rgba(0,0,0,0.9)] flex flex-col overflow-hidden">
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#121217]">
          <div className="flex items-center gap-3">
            <FileText className="w-4 h-4 text-silver-300" />
            <span className="font-mono text-xs tracking-widest text-white uppercase">
              AKSHAY_SISODIA_RESUME.PDF
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.resumeUrl}
              download="Akshay_Sisodia_Resume.pdf"
              className="font-mono text-xs text-silver-300 hover:text-white flex items-center gap-1.5 px-3 py-1.5 border border-white/10 hover:border-white/30 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">DOWNLOAD</span>
            </a>

            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs text-silver-300 hover:text-white flex items-center gap-1.5 px-3 py-1.5 border border-white/10 hover:border-white/30 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">NEW TAB</span>
            </a>

            <button
              onClick={onClose}
              aria-label="Close Resume"
              className="p-1.5 text-silver-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* PDF Embedded Frame */}
        <div className="w-full flex-1 bg-[#18181b] overflow-hidden">
          <iframe
            src={`${PERSONAL_INFO.resumeUrl}#view=FitH`}
            title="Akshay Sisodia Resume"
            className="w-full h-full border-none"
          />
        </div>
      </div>
    </div>
  );
}

