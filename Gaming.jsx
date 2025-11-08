import React from "react";
import { motion } from "framer-motion";

export default function Gaming() {
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

  const socialLinks = [
    {
      title: "Discord",
      subtitle: "Join the Server",
      icon: "💬",
      link: "https://discord.gg/yourdiscord",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      title: "Instagram",
      subtitle: "@hawkkeyed",
      icon: "📸",
      link: "https://instagram.com/hawkkeyed",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      title: "YouTube",
      subtitle: "Watch Highlights",
      icon: "▶️",
      link: "https://youtube.com/@yourusername",
      gradient: "from-red-500 to-orange-500"
    }
  ];

  const achievements = [
    "Former Esports Athlete at Team Glacier",
    "Head & Operations Lead at G4R Esports",
    "Represented teams in BGMI circuits including BGCS, Snapdragon Pro Series, and iQOO Invitational",
    "Led data-driven strategy building for competitive lineups",
    "Currently developing GameGrid.gg — analytics & performance insights for esports"
  ];

  const currentFocus = [
    "Expanding GameGrid.gg's AI-based esports analytics",
    "Building a community of competitive and creative gamers",
    "Collaborating with AI & gaming enthusiasts through my Discord"
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-300">Gaming</span>
              <span className={`animate-blink ${isDark ? 'text-white' : 'text-gray-900'}`}>~</span>
            </span>
          </div>
          <nav className="flex items-center gap-0 text-base font-semibold">
            <a className={`nav-link-tab cursor-pointer transition-all duration-300 px-4 py-2 relative`} href="/">Home</a>
            <a className={`nav-link-tab cursor-pointer transition-all duration-300 px-4 py-2 relative`} href="/projects">Projects</a>
            <a className={`nav-link-tab cursor-pointer transition-all duration-300 px-4 py-2 relative`} href="/gaming">Gaming</a>
            <a className={`nav-link-tab cursor-pointer transition-all duration-300 px-4 py-2 relative`} href="/hire-me">Hire Me</a>
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

      {/* MAIN CONTENT */}
      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-black mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
              🎮 Gaming Journey
            </span>
          </h1>
          <p className="text-2xl md:text-3xl font-bold text-white/90 mb-2">
            "From the Lobby to the Cloud"
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`space-y-6 text-lg leading-relaxed mb-16 ${isDark ? 'text-white/85' : 'text-gray-700'}`}
        >
          <p>
            When most people were learning to press play, I was learning to strategize every frame.
            That's where <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-bold">Hawk</span> was born — not just another gamer tag, but a mindset.
          </p>
          
          <p>
            I started my journey as a competitive <span className="font-bold text-white">BGMI player</span>, leading teams, managing scrims, and building strategies that turned underdogs into tournament-ready squads.
            From <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-bold">Team Glacier</span> to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-bold">G4R Esports</span>, every lineup taught me something deeper — not just how to win a match, but how to lead, adapt, and analyze under fire.
          </p>
          
          <p>
            Soon, my curiosity evolved beyond the game itself.
            I wanted to understand why we won, why we lost, and how data could predict performance.
            That's when my love for gaming turned into something bigger — <span className="font-bold text-white">building tools for gamers</span>.
          </p>
          
          <p>
            Today, I channel the same competitive fire into <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-bold">GameGrid.gg</span>, an esports analytics platform I'm building from scratch — combining gaming, AI, and data visualization to give players and teams the insights I once wished I had.
          </p>
          
          <p>
            I still hop into lobbies, call shots, and break down strats — but now I also code dashboards, automate match logs, and experiment with AI-driven esports intelligence.
            Because for me, <span className="font-bold text-white">gaming isn't just a passion — it's my foundation, my inspiration, and my reason to build</span>.
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span>⚡</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-300">
              Where You'll Find Me
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className={`relative group rounded-2xl p-[1px] bg-gradient-to-r ${social.gradient}`}
              >
                <div className={`relative rounded-2xl ${isDark ? 'bg-black' : 'bg-white'} p-6 h-full border ${isDark ? 'border-white/10' : 'border-gray-200'} transition-all duration-300`}>
                  <div className="flex flex-col items-start gap-3">
                    <div className="text-4xl">{social.icon}</div>
                    <div>
                      <div className="font-bold text-xl mb-1">{social.title}</div>
                      <div className={`text-sm ${isDark ? 'text-white/60' : 'text-gray-600'}`}>{social.subtitle}</div>
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 text-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span>🧠</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-300">
              Gaming Roles & Achievements
            </span>
          </h2>
          
          <div className={`rounded-2xl ${isDark ? 'bg-white/5 border-white/10' : 'bg-gray-100 border-gray-200'} border p-8`}>
            <ul className="space-y-4">
              {achievements.map((achievement, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-purple-400 text-xl mt-1">▸</span>
                  <span className="text-lg">{achievement}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mb-16"
        >
          <div className={`rounded-2xl ${isDark ? 'bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-purple-500/20' : 'bg-gradient-to-r from-purple-100 to-pink-100 border-purple-300'} border-2 p-8 text-center`}>
            <p className="text-xl md:text-2xl font-bold italic">
              💬 "In gaming and in life, <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">precision beats speed</span> — and <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">analysis wins over aggression</span>."
            </p>
          </div>
        </motion.div>

        {/* Current Focus Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span>🕹️</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-300">
              Current Focus
            </span>
          </h2>
          
          <div className={`rounded-2xl ${isDark ? 'bg-white/5 border-white/10' : 'bg-gray-100 border-gray-200'} border p-8`}>
            <ul className="space-y-4">
              {currentFocus.map((focus, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 1.4 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-cyan-400 text-xl mt-1">▸</span>
                  <span className="text-lg">{focus}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </main>

      {/* FOOTER */}
      <footer className={`w-full border-t ${isDark ? 'border-white/10 bg-black/30' : 'border-gray-200 bg-gray-50'} backdrop-blur-md mt-20`}>
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className={`text-center md:text-left ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
              © 2025 Abhishek Jaisal — Founder & AI Enhanced Full-Stack Developer
            </div>
            <div className="flex items-center gap-6">
              <a href="https://www.linkedin.com/in/iabhijais/" target="_blank" rel="noopener noreferrer" className={`transition-colors ${isDark ? 'text-white/60 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
                LinkedIn
              </a>
              <a href="https://github.com/iabhijais" target="_blank" rel="noopener noreferrer" className={`transition-colors ${isDark ? 'text-white/60 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
                GitHub
              </a>
              <a href="mailto:iabhijais@gmail.com" className={`transition-colors ${isDark ? 'text-white/60 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
