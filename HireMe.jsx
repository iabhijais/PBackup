import React from "react";
import { motion } from "framer-motion";

export default function HireMe() {
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

  const services = [
    {
      icon: "⚡",
      title: "Full-Stack Development",
      description: "End-to-end web applications with modern tech stack. React, Node.js, Next.js, and more.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: "🤖",
      title: "AI Integration",
      description: "Integrate AI-powered features into your products. LLMs, automation, and intelligent workflows.",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      icon: "📊",
      title: "Real-time Analytics",
      description: "High-performance data pipelines and dashboards that handle millions of events.",
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      description: "Pixel-perfect interfaces with smooth animations and exceptional user experience.",
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-300">Hire Me</span>
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
      <main className="max-w-6xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Let's Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-300">Together</span>
          </h1>
          <p className={`text-xl mb-12 ${isDark ? 'text-white/70' : 'text-gray-600'}`}>
            Turn your ambitious ideas into production-grade products. Fast, efficient, and AI-enhanced.
          </p>

          {/* Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative rounded-2xl p-6 ${isDark ? 'bg-white/5 border-white/10' : 'bg-gray-50 border-gray-200'} border backdrop-blur-xl hover:scale-[1.02] transition-all duration-300`}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className={`text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r ${service.gradient}`}>
                  {service.title}
                </h3>
                <p className={`${isDark ? 'text-white/70' : 'text-gray-600'}`}>
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className={`rounded-2xl p-8 ${isDark ? 'bg-white/5 border-white/10' : 'bg-gray-50 border-gray-200'} border backdrop-blur-xl`}
          >
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6">
                <a
                  href="mailto:iabhijais@gmail.com"
                  className={`flex-1 flex items-center gap-4 p-4 rounded-xl ${isDark ? 'bg-white/5 hover:bg-white/10' : 'bg-white hover:bg-gray-50'} border ${isDark ? 'border-white/10' : 'border-gray-200'} transition-all duration-300`}
                >
                  <span className="text-3xl">✉️</span>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className={`text-sm ${isDark ? 'text-white/60' : 'text-gray-600'}`}>iabhijais@gmail.com</div>
                  </div>
                </a>
                
                <a
                  href="https://www.linkedin.com/in/iabhijais/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 flex items-center gap-4 p-4 rounded-xl ${isDark ? 'bg-white/5 hover:bg-white/10' : 'bg-white hover:bg-gray-50'} border ${isDark ? 'border-white/10' : 'border-gray-200'} transition-all duration-300`}
                >
                  <span className="text-3xl">💼</span>
                  <div>
                    <div className="font-semibold">LinkedIn</div>
                    <div className={`text-sm ${isDark ? 'text-white/60' : 'text-gray-600'}`}>Connect with me</div>
                  </div>
                </a>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <a
                  href="https://github.com/iabhijais"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 flex items-center gap-4 p-4 rounded-xl ${isDark ? 'bg-white/5 hover:bg-white/10' : 'bg-white hover:bg-gray-50'} border ${isDark ? 'border-white/10' : 'border-gray-200'} transition-all duration-300`}
                >
                  <span className="text-3xl">🐙</span>
                  <div>
                    <div className="font-semibold">GitHub</div>
                    <div className={`text-sm ${isDark ? 'text-white/60' : 'text-gray-600'}`}>View my code</div>
                  </div>
                </a>
                
                <a
                  href="/resume"
                  className={`flex-1 flex items-center gap-4 p-4 rounded-xl ${isDark ? 'bg-white/5 hover:bg-white/10' : 'bg-white hover:bg-gray-50'} border ${isDark ? 'border-white/10' : 'border-gray-200'} transition-all duration-300`}
                >
                  <span className="text-3xl">📄</span>
                  <div>
                    <div className="font-semibold">Resume</div>
                    <div className={`text-sm ${isDark ? 'text-white/60' : 'text-gray-600'}`}>View my experience</div>
                  </div>
                </a>
              </div>
            </div>

            <div className={`mt-8 p-6 rounded-xl ${isDark ? 'bg-gradient-to-r from-fuchsia-500/10 to-cyan-500/10 border-fuchsia-500/20' : 'bg-gradient-to-r from-fuchsia-100 to-cyan-100 border-fuchsia-300'} border`}>
              <h3 className="text-xl font-bold mb-2">💡 Quick Response Guaranteed</h3>
              <p className={`${isDark ? 'text-white/70' : 'text-gray-700'}`}>
                I typically respond within 24 hours. For urgent projects, mention "URGENT" in the subject line.
              </p>
            </div>
          </motion.div>
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
