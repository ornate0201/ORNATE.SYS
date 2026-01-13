
import React from 'react';
import { ExternalLink, Github, Folder } from 'lucide-react';

const projects = [
  {
    title: 'Melody of Prayer',
    url: 'https://melodyofprayer.com',
    desc: 'A religious and community-based website with structured content and secure hosting.',
    tech: ['PHP', 'MySQL', 'WEBUZO'],
    image: 'https://i.ibb.co.com/pjN4DRSp/melodyofprayer.png'
  },
  {
    title: 'KCOS',
    url: 'https://kcos.melodyofprayer.com',
    desc: 'A organization web with authentication, routing, and role-based features.',
    tech: ['HTML', 'Authentication', 'PHP'],
    image: 'https://i.ibb.co.com/mCf277FZ/kcos.png'
  },
  {
    title: 'Sagor Enterprise',
    url: 'https://sagor-enterprise.melodyofprayer.com',
    desc: 'A business-focused enterprise website with clean UI and professional layout.',
    tech: ['UI/UX', 'Modern Web', 'Business'],
    image: 'https://i.ibb.co.com/8DgwqCy8/sagor-enter.png'
  }
];


export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 sm:py-24 px-4 max-w-7xl mx-auto scroll-mt-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4">
        <div className="text-center md:text-left">
          <h2 className="text-2xl sm:text-4xl font-mono font-bold text-cyber-neon mb-2">DEPLOYED_OPERATIONS</h2>
          <p className="text-gray-500 font-mono italic text-xs sm:text-sm">Production environments successfully initialized.</p>
        </div>
        <div className="h-px bg-gray-800 flex-grow mx-8 hidden lg:block"></div>
        <div className="font-mono text-gray-500 text-xs sm:text-sm self-center md:self-end">TOTAL: 03</div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {projects.map((project, idx) => (
          <div key={idx} className="group relative bg-cyber-gray border border-gray-800 rounded-lg overflow-hidden flex flex-col transition-all duration-300 hover:border-cyber-neon sm:hover:-translate-y-2 shadow-xl">
            {/* Image Section */}
            <div className="relative h-40 sm:h-48 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 sm:group-hover:scale-110 grayscale sm:group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-cyber-black/40 sm:group-hover:bg-transparent transition-all"></div>
              <div className="absolute top-3 right-3 bg-cyber-black/80 p-1.5 rounded-full border border-cyber-neon/20">
                <Folder className="text-cyber-neon w-3.5 h-3.5" />
              </div>
            </div>

            {/* Content Section */}
            <div className="p-5 sm:p-6 flex-grow flex flex-col">
              <h3 className="text-lg sm:text-xl font-bold font-mono text-white mb-2 group-hover:text-cyber-neon transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm mb-5 flex-grow leading-relaxed">
                {project.desc}
              </p>
              
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tech.map(t => (
                  <span key={t} className="text-[9px] sm:text-[10px] font-mono border border-gray-700 px-2 py-0.5 rounded text-gray-500">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-gray-800">
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-cyber-neon text-xs sm:text-sm font-mono hover:underline"
                >
                  <ExternalLink size={14} /> LIVE_ACCESS
                </a>
                <span className="text-gray-700">|</span>
                <button className="text-gray-500 text-xs sm:text-sm font-mono cursor-not-allowed opacity-50 flex items-center gap-2">
                  <Github size={14} /> SECURED
                </button>
              </div>
            </div>

            {/* Neon Border Glow */}
            <div className="absolute inset-0 border-2 border-cyber-neon/0 group-hover:border-cyber-neon/30 pointer-events-none transition-all duration-500 hidden sm:block"></div>
          </div>
        ))}
      </div>
    </section>
  );
};
