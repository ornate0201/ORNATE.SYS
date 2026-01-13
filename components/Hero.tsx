
import React, { useState, useEffect } from 'react';

const roles = ["Frontend Development (React) Learner", "Cyber Security Learner", "Ethical Hacking Learner"];

export const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText.length === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-6 scroll-mt-20 overflow-hidden">
      {/* Background Matrix/Grid Effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="w-full h-full bg-[size:30px_30px] md:bg-[size:40px_40px] bg-[linear-gradient(to_right,#00ffcc_1px,transparent_1px),linear-gradient(to_bottom,#00ffcc_1px,transparent_1px)]"></div>
      </div>

      <div className="relative text-center z-10 w-full max-w-4xl mx-auto">
        <p className="font-mono text-cyber-neon mb-4 tracking-[0.2em] text-[10px] sm:text-xs md:text-sm animate-pulse uppercase">
          &gt; SYSTEM_INITIALIZED_SUCCESSFULLY
        </p>
        
        <div className="relative inline-block w-full">
          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold font-mono tracking-tighter mb-4 glitch-text leading-[1.1]" data-text="ORNATE BLAISE PEREIRA">
            ORNATE BLAISE PEREIRA
          </h1>
          <div className="absolute -inset-2 bg-cyber-neon/10 blur-xl opacity-0 group-hover:opacity-100 transition duration-1000 hidden sm:block"></div>
        </div>

        <div className="mt-6 min-h-[4rem] sm:min-h-[2rem] flex flex-wrap items-center justify-center text-base sm:text-xl md:text-2xl font-mono text-gray-400">
          <span className="mr-2 opacity-60">I'm</span>
          <span className="text-cyber-neon font-bold">{displayText}</span>
          <span className="w-2 h-6 sm:h-8 bg-cyber-neon ml-1 animate-blink inline-block align-middle"></span>
        </div>

        <div className="mt-10 sm:mt-14 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
          <a 
            href="#projects" 
            onClick={(e) => scrollToSection(e, 'projects')}
            className="w-full sm:w-auto px-10 py-4 border border-cyber-neon text-cyber-neon font-mono text-xs sm:text-sm tracking-widest hover:bg-cyber-neon hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(0,255,204,0.2)] cursor-pointer text-center active:scale-95"
          >
            EXPLORE_WORK
          </a>
          <a 
            href="#contact" 
            onClick={(e) => scrollToSection(e, 'contact')}
            className="w-full sm:w-auto px-10 py-4 bg-cyber-gray/50 text-white border border-gray-700 font-mono text-xs sm:text-sm tracking-widest hover:border-white transition-all duration-300 cursor-pointer text-center active:scale-95 backdrop-blur-sm"
          >
            SECURE_CONTACT
          </a>
        </div>
      </div>

      <style>{`
        .glitch-text {
          position: relative;
          color: white;
        }
        .glitch-text::before, .glitch-text::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: transparent;
        }
        .glitch-text::before {
          left: 2px;
          text-shadow: -2px 0 #ff00c1;
          clip: rect(44px, 9999px, 56px, 0);
          animation: glitch-anim 5s infinite linear alternate-reverse;
        }
        .glitch-text::after {
          left: -2px;
          text-shadow: -2px 0 #00fff9, 2px 2px #ff00c1;
          animation: glitch-anim2 1s infinite linear alternate-reverse;
        }
        @keyframes glitch-anim {
          0% { clip: rect(31px, 9999px, 94px, 0); }
          20% { clip: rect(62px, 9999px, 42px, 0); }
          40% { clip: rect(16px, 9999px, 78px, 0); }
          60% { clip: rect(94px, 9999px, 31px, 0); }
          80% { clip: rect(12px, 9999px, 98px, 0); }
          100% { clip: rect(62px, 9999px, 42px, 0); }
        }
        @keyframes glitch-anim2 {
          0% { clip: rect(65px, 9999px, 100px, 0); }
          20% { clip: rect(10px, 9999px, 30px, 0); }
          40% { clip: rect(40px, 9999px, 90px, 0); }
          60% { clip: rect(20px, 9999px, 60px, 0); }
          80% { clip: rect(80px, 9999px, 20px, 0); }
          100% { clip: rect(10px, 9999px, 80px, 0); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
      `}</style>
    </section>
  );
};
