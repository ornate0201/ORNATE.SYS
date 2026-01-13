
import React from 'react';
import { User, Shield, Code } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 px-4 max-w-6xl mx-auto scroll-mt-20">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="relative order-2 md:order-1">
          {/* Decorative Terminal Window */}
          <div className="bg-cyber-gray border border-gray-700 rounded-lg overflow-hidden shadow-2xl">
            <div className="bg-[#2a2a2a] px-4 py-2 flex items-center gap-2 border-b border-gray-700">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
              </div>
              <span className="text-[10px] sm:text-xs text-gray-400 font-mono ml-2">bio.txt</span>
            </div>
            <div className="p-4 sm:p-6 space-y-4 font-mono text-xs sm:text-sm">
              <p className="text-cyber-neon">&gt; whoami</p>
              <p className="text-gray-300 leading-relaxed">
                Ornate Blaise Pereira is currently pursuing a Diploma in Computer Science and Technology.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I'm completed frontend development using React and has hands-on learning in Cyber Security and Ethical Hacking.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Focus: Building real-world web applications, secure systems, and modern user interfaces with performance and security in mind.
              </p>
              <div className="pt-4 border-t border-gray-800 flex justify-between text-[10px] text-gray-500">
                <span>[READY]</span>
                <span>UTF-8</span>
              </div>
            </div>
          </div>
          {/* Decorative Glow */}
          <div className="absolute -bottom-4 -right-4 w-full h-full bg-cyber-neon/5 -z-10 blur-2xl hidden sm:block"></div>
        </div>

        <div className="space-y-6 sm:space-y-8 order-1 md:order-2">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold font-mono mb-4 text-cyber-neon">&gt; THE MISSION</h2>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
              Merging artistic frontend craftsmanship with the rigorous safety of ethical hacking to create the next generation of secure web environments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="p-4 border border-gray-800 bg-cyber-gray/30 rounded-lg hover:border-cyber-neon/50 transition-colors">
              <Code className="text-cyber-neon mb-3" size={24} />
              <h3 className="font-mono font-bold mb-1 text-sm sm:text-base">Frontend Dev</h3>
              <p className="text-[10px] sm:text-xs text-gray-500">Crafting immersive React interfaces.</p>
            </div>
            <div className="p-4 border border-gray-800 bg-cyber-gray/30 rounded-lg hover:border-cyber-neon/50 transition-colors">
              <Shield className="text-cyber-neon mb-3" size={24} />
              <h3 className="font-mono font-bold mb-1 text-sm sm:text-base">Cyber Security</h3>
              <p className="text-[10px] sm:text-xs text-gray-500">Studying vulnerabilities & defense.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
