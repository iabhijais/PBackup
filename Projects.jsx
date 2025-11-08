import React from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const [isDark, setIsDark] = React.useState(true);

  const toggleTheme = () => {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = isDark ? 800 : 600;
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
    
    setIsDark(!isDark);
  };

  React.useEffect(() => {
    document.body.className = isDark ? 'dark-mode' : 'light-mode';
  }, [isDark]);

  const projects = [
    {
      title: "GameGrid",
      description: "India's first esports performance analytics platform. Real-time data pipelines, player tracking, and AI-powered insights.",
      tech: ["React", "Node.js", "PostgreSQL", "Redis", "AI/ML"],
      status: "In Development",
      link: "#",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "AI Workflow System",
      description: "Custom AI-assisted development workflow that accelerates coding by 10x. Integrates with VS Code and GitHub.",
      tech: ["Python", "OpenAI API", "VS Code Extension", "TypeScript"],
      status: "Active",
      link: "#",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      title: "Real-time Analytics Dashboard",
      description: "High-performance dashboard for processing 10K+ events/second. Built for competitive gaming tournaments.",
      tech: ["React", "WebSocket", "D3.js", "Express", "MongoDB"],
      status: "Deployed",
      link: "#",
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "Esports Team Management",
      description: "Complete roster management, scheduling, and performance tracking system for competitive teams.",
      tech: ["Next.js", "Prisma", "PostgreSQL", "Vercel"],
      status: "Live",
      link: "#",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className={`min-h-screen ${isDark ? 'bg-black text-white' : 'bg-white text-gray-900'} transition-colors duration-300`}>
      {/* NAV */}
      <header className={`w-full sticky top-0 z-20 ${isDark ? 'bg-black/50' : 'bg-white/80'} backdrop-blur-md transition-colors duration-300 ${!isDark && 'shadow-sm'}`}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className={`font-bold text-xl flex items-center gap-2 px-4 py-2 -ml-4`}>
            <a href="/" className="transition-all duration-300 rounded-lg nav-link-logo relative p-1 -m-1">
              <img src="/Logo.ico" alt="Logo" className="w-6 h-6 object-contain" />
            </a>
            <span className="flex items-center -mt-0.5">
              <span className={isDark ? 'text-white' : 'text-gray-900'}>/</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-300">Projects</span>
              <span className={`animate-blink ${isDark ? 'text-white' : 'text-gray-900'}`}>~</span>
            </span>
          </div>
          <nav className="flex items-center gap-0 text-base font-semibold">
            <a className={`nav-link-tab cursor-pointer transition-all duration-300 px-4 py-2 relative`} href="/">Home</a>
            <a className={`nav-link-tab cursor-pointer transition-all duration-300 px-4 py-2 relative`} href="/projects">Projects</a>
            <a className={`nav-link-tab cursor-pointer transition-all duration-300 px-4 py-2 relative`} href="/hire-me">Hire Me</a>
            <a className={`nav-link-tab cursor-pointer transition-all duration-300 px-4 py-2 relative`} href="/resume">Resume</a>
            <button 
              onClick={toggleTheme}
              className={`theme-toggle-btn w-10 h-10 rounded-full ${isDark ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20' : 'bg-gray-200 border-gray-300 hover:bg-gray-300 hover:border-gray-400'} border text-xl transition-all duration-500 hover:scale-110 hover:rotate-180 overflow-hidden relative ml-6`}
            >
              <span className={`theme-icon ${isDark ? 'theme-sun' : 'theme-moon'}`}>
                {isDark ? '☀️' : '🌙'}
              </span>
            </button>
          </nav>
        </div>
      </header>

      {/* CONTENT */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-300">Projects</span>
            </h1>
            <p className={`text-xl md:text-2xl max-w-3xl ${isDark ? 'text-white/70' : 'text-gray-600'}`}>
              An assortment of projects I've been actively involved in or have crafted<span className="animate-blink">.</span>
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`group relative rounded-3xl p-8 ${isDark ? 'bg-white/[0.03] border-white/10 hover:bg-white/[0.06]' : 'bg-gray-50 border-gray-200 hover:bg-gray-100'} border backdrop-blur-xl transition-all duration-500`}
              >
                {/* Icon & Status Badge */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-14 h-14 rounded-xl ${isDark ? 'bg-gradient-to-br from-white/10 to-white/5' : 'bg-gradient-to-br from-gray-200 to-gray-100'} flex items-center justify-center text-3xl border ${isDark ? 'border-white/10' : 'border-gray-300'}`}>
                    📁
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${isDark ? 'bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 border border-green-500/30' : 'bg-green-100 text-green-700 border border-green-300'}`}>
                      {project.status}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 rounded-lg ${isDark ? 'bg-white/5 hover:bg-white/10 border-white/10' : 'bg-gray-200 hover:bg-gray-300 border-gray-300'} border flex items-center justify-center transition-all duration-300 group-hover:scale-110`}
                      title="View Project"
                    >
                      <span className="text-xl">↗</span>
                    </a>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 rounded-lg ${isDark ? 'bg-white/5 hover:bg-white/10 border-white/10' : 'bg-gray-200 hover:bg-gray-300 border-gray-300'} border flex items-center justify-center transition-all duration-300 group-hover:scale-110`}
                      title="GitHub Repository"
                    >
                      <span className="text-xl">🐙</span>
                    </a>
                  </div>
                </div>

                {/* Project Title */}
                <h3 className={`text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r ${project.gradient} group-hover:scale-[1.02] transition-transform duration-300`}>
                  {project.title}
                </h3>
                
                {/* Description */}
                <p className={`text-lg leading-relaxed mb-6 ${isDark ? 'text-white/75' : 'text-gray-700'}`}>
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2.5">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className={`px-4 py-2 text-sm font-medium rounded-lg ${isDark ? 'bg-white/5 text-white/90 border border-white/10 hover:bg-white/10' : 'bg-white text-gray-800 border border-gray-300 hover:bg-gray-50'} transition-all duration-300 hover:scale-105`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>

      <footer className={`max-w-6xl mx-auto px-6 pb-10 pt-20 ${isDark ? 'text-white/50' : 'text-gray-500'} transition-colors duration-300`}>
        <div className="text-center space-y-2">
          <div>© 2025 Abhishek Jaisal — Founder & AI Enhanced Full-Stack Developer</div>
          <div className="text-sm">
            Let's connect → <a href="https://www.linkedin.com/in/iabhijais/" target="_blank" rel="noopener noreferrer" className="hover:text-fuchsia-400 transition-colors">LinkedIn</a> · <a href="https://github.com/iabhijais" target="_blank" rel="noopener noreferrer" className="hover:text-fuchsia-400 transition-colors">GitHub</a> · <a href="mailto:iabhijais@gmail.com" className="hover:text-fuchsia-400 transition-colors">Email</a>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        .animate-blink { animation: blink 1s ease-in-out infinite; }
        
        .nav-link-tab {
          position: relative;
        }
        .nav-link-tab::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 2px;
          background: linear-gradient(to right, #a855f7, #06b6d4);
          transition: width 0.3s ease;
        }
        .nav-link-tab:hover::after {
          width: 80%;
        }
      `}</style>
    </div>
  );
}
