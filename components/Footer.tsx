
import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 sm:py-12 px-4 border-t border-gray-900 bg-cyber-black overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-6">
        <div className="font-mono text-[10px] sm:text-xs text-gray-600 text-center md:text-left">
          <p>© {currentYear} ORNATE BLAISE PEREIRA. ALL RIGHTS RESERVED.</p>
          <p className="mt-1">ENGINEERED WITH REACT & CYBER_SECURITY IN MIND.</p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8">
           <div className="flex items-center gap-2">
             <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-cyber-neon animate-pulse"></div>
             <span className="font-mono text-[9px] sm:text-[10px] text-gray-500 uppercase tracking-widest">Server: Online</span>
           </div>
           <div className="flex items-center gap-2">
             <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-cyber-neon/40 animate-pulse"></div>
             <span className="font-mono text-[9px] sm:text-[10px] text-gray-500 uppercase tracking-widest">Uptime: 99.9%</span>
           </div>
        </div>
      </div>
    </footer>
  );
};
