
import React from 'react';
import { Layout, Server, Lock } from 'lucide-react';

const skillsData = [
  {
    category: 'Frontend',
    icon: <Layout className="text-cyber-neon" />,
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js']
  },
  {
    category: 'Backend & Hosting',
    icon: <Server className="text-cyber-neon" />,
    skills: ['PHP', 'MySQL', 'Linux', 'cPanel / Webuzo', 'Apache & .htaccess']
  },
  {
    category: 'Cyber & Networking',
    icon: <Lock className="text-cyber-neon" />,
    skills: ['Cyber Security Fundamentals', 'Ethical Hacking Basics', 'Networking', 'Server Hardening']
  }
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16 sm:py-24 px-4 bg-cyber-gray/20 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl font-mono font-bold text-cyber-neon mb-4 inline-block relative">
            TECHNICAL_STACK
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-cyber-neon/30"></span>
          </h2>
          <p className="text-gray-500 font-mono mt-4 text-xs sm:text-sm">Exploring the boundaries of code and security.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {skillsData.map((group, idx) => (
            <div 
              key={idx} 
              className="relative group border border-gray-800 bg-black p-5 sm:p-6 rounded-lg transition-all duration-300 hover:border-cyber-neon hover:shadow-[0_0_20px_rgba(0,255,204,0.1)]"
            >
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                {group.icon}
                <h3 className="font-mono font-bold text-base sm:text-lg">{group.category}</h3>
              </div>
              <ul className="space-y-2 sm:space-y-3">
                {group.skills.map((skill) => (
                  <li key={skill} className="flex items-center text-gray-400 font-mono text-xs sm:text-sm">
                    <span className="text-cyber-neon mr-2">[_]</span>
                    {skill}
                  </li>
                ))}
              </ul>
              
              {/* Decorative side line */}
              <div className="absolute top-0 right-0 h-full w-1 bg-gradient-to-b from-transparent via-cyber-neon/20 to-transparent group-hover:via-cyber-neon/50 transition-all"></div>
            </div>
          ))}
        </div>
        
        {/* Learning/Certifications Sub-section */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 border border-dashed border-gray-700 bg-cyber-gray/10 rounded-xl">
           <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-lg sm:text-xl font-mono font-bold text-white mb-2">Ongoing Certifications & Learning</h3>
                <p className="text-gray-400 font-mono text-xs sm:text-sm max-w-xl">
                  Actively pursuing advanced React patterns, OSCP-level hacking labs, and modern server-side security architectures.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-cyber-neon/10 text-cyber-neon border border-cyber-neon/20 rounded font-mono text-[10px] sm:text-xs">REACT_CORE</span>
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-cyber-neon/10 text-cyber-neon border border-cyber-neon/20 rounded font-mono text-[10px] sm:text-xs">CYBER_DEF</span>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};
