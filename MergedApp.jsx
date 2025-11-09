import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// ============================================================================
// FOOTER COMPONENT
// ============================================================================
function Footer({ isDark }) {
  const year = new Date().getFullYear();
  return (
    <footer className={`w-full border-t ${isDark ? 'border-white/10 bg-black/30' : 'border-gray-200 bg-gray-50'} backdrop-blur-md mt-20`}>
      <div className='max-w-6xl mx-auto px-6 py-8'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
          <div className={`${isDark ? 'text-white/60' : 'text-gray-600'} text-center md:text-left`}>
            © {year} Abhishek Jaisal — Founder & AI Enhanced Full-Stack Developer
          </div>
          <div className='flex items-center gap-6'>
            <a href='https://www.linkedin.com/in/iabhijais/' target='_blank' rel='noopener noreferrer' className={`transition-colors ${isDark ? 'text-white/60 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>LinkedIn</a>
            <a href='https://github.com/iabhijais' target='_blank' rel='noopener noreferrer' className={`transition-colors ${isDark ? 'text-white/60 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>GitHub</a>
            <a href='mailto:iabhijais@gmail.com' className={`transition-colors ${isDark ? 'text-white/60 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ============================================================================
// NEON BUTTON COMPONENT
// ============================================================================
const NeonButton = ({ title, subtitle, glow = "from-fuchsia-500 to-violet-500", tilt = 0.8, icon = "🧪", showLine = false, onClick }) => {
  return (
    <div onClick={onClick} className="cursor-pointer">
      <motion.div
        whileHover={{ scale: 1.04, rotate: tilt }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
        className={`relative rounded-2xl p-[1px] bg-gradient-to-r ${glow} glow-outer hover-cursor-target ${showLine ? 'neon-btn-line' : ''}`}
      >
        <div className="relative rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 px-5 py-4 flex items-center justify-between overflow-hidden">
          <span className="pointer-events-none absolute -inset-[40%] rotate-[20deg] sheen" />
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center">{icon}</div>
            <div>
              <div className="text-sm text-white/80">{title}</div>
            </div>
          </div>
          <div className="text-amber-300 font-semibold">{subtitle} →</div>
        </div>
      </motion.div>
    </div>
  );
};

// ============================================================================
// CURSOR GLOW HOOK
// ============================================================================
function useCursorGlow() {
  useEffect(() => {
    const glow = document.getElementById("cursorGlow");
    const dot = document.getElementById("cursorDot");
    if (!glow || !dot) return;

    document.documentElement.classList.add("hide-native-cursor");
    glow.style.opacity = "0.6";
    dot.style.opacity = "1";

    let mouseX = 0, mouseY = 0, glowX = 0, glowY = 0, dotX = 0, dotY = 0;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    let isHot = false;
    let lastHot = null;

    const smoothMove = () => {
      glowX += (mouseX - glowX) * 0.15;
      glowY += (mouseY - glowY) * 0.15;
      dotX += (mouseX - dotX) * 0.25;
      dotY += (mouseY - dotY) * 0.25;
      const scale = isHot ? 'scale(1.5)' : 'scale(1)';
      glow.style.transform = `translate(${glowX}px, ${glowY}px) translate(-50%, -50%)`;
      dot.style.transform = `translate(${dotX}px, ${dotY}px) translate(-50%, -50%) ${scale}`;
      requestAnimationFrame(smoothMove);
    };
    smoothMove();

    const HOT_SELECTOR = 'a, h2, h3, h4, h5, h6, p, mark, li, .hover-cursor-target, button';
    const onOver = (e) => {
      let el = null;
      if (e.target && e.target.classList && e.target.classList.contains('text-anim')) {
        el = e.target;
      } else if (e.target && e.target.closest) {
        el = e.target.closest(HOT_SELECTOR);
      }
      if (el) {
        isHot = true;
        dot.classList.add('hot');
        glow.classList.add('hot');
        if (lastHot && lastHot !== el) lastHot.classList.remove('hot-text');
        el.classList.add('hot-text');
        lastHot = el;
      } else {
        isHot = false;
        dot.classList.remove('hot');
        glow.classList.remove('hot');
        if (lastHot) lastHot.classList.remove('hot-text');
        lastHot = null;
      }
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.documentElement.classList.remove("hide-native-cursor");
    };
  }, []);
}

// ============================================================================
// HOME PAGE COMPONENT
// ============================================================================
function HomePage({ setPage, isDark }) {
  const scrollToAbout = (e) => {
    e.preventDefault();
    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
      const yOffset = -20;
      const y = aboutSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      {isDark && (
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-40 -left-40 w-[42rem] h-[42rem] rounded-full bg-[radial-gradient(circle,rgba(168,85,247,.18),transparent_60%)] blur-3xl animate-glowPulse" />
          <div className="absolute -bottom-48 -right-48 w-[50rem] h-[50rem] rounded-full bg-[radial-gradient(circle,rgba(34,197,94,.16),transparent_60%)] blur-3xl animate-glowPulse delay-300" />
          <div className="absolute top-1/3 -right-24 w-[36rem] h-[36rem] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,.18),transparent_60%)] blur-3xl animate-glowPulse delay-700" />
        </div>
      )}

      <main className="max-w-6xl mx-auto px-6 pt-4 pb-24 relative">
        <div className="lg:pr-[420px]">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[40px] sm:text-[56px] md:text-[72px] leading-[1.05] font-black tracking-tight pointer-events-none"
            >
              <span className="block text-anim cursor-pointer pointer-events-auto">I don't write code</span>
              <span className="block text-anim cursor-pointer pointer-events-auto">— I <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400">generate</span> experiences...</span>
              <span className="block text-anim cursor-pointer pointer-events-auto">Powered by <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">AI</span>!</span>
              <span className="block text-anim cursor-pointer pointer-events-auto mb-6">Fueled by <span className={`italic ${isDark ? 'text-gray-300' : 'text-neutral-500'}`}>caffeine</span>.</span>
            </motion.h1>

            <h2 className="mt-8 text-2xl sm:text-3xl font-bold tracking-tight text-anim leading-relaxed">
              My Superpower?
            </h2>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-anim leading-relaxed">
              I can turn <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-300">prompts into production</span>
            </h2>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-anim leading-relaxed">
              before you've even finished explaining.
            </h2>
            
            <h2 id="about-section" className="mt-8 mb-6 pb-2 text-[2.5rem] sm:text-[3.5rem] font-extrabold tracking-tight text-anim">
              I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 to-cyan-300 drop-shadow-[0_0_25px_rgba(168,85,247,0.5)] hover:drop-shadow-[0_0_35px_rgba(168,85,247,0.8)] transition-all duration-300">Abhishek</span>..<span className="animate-blink">.</span>
            </h2>

            <div className={`mt-8 text-[1.125rem] leading-[1.8] space-y-5 max-w-4xl ${isDark ? 'text-white/85' : 'text-gray-700'}`}>
              <p className="text-anim cursor-pointer">
                I'm an <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-300">AI Enhanced Full-stack developer</span> and <span className="font-bold text-white">founder</span>, currently building <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-300">GameGrid</span> — India's first esports performance analytics platform. I design <span className="font-bold text-white">scalable systems</span>, build <span className="font-bold text-white">real-time data pipelines</span>, and ship products fast with <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-300">AI-assisted workflows</span>.
              </p>
              
              <p className="text-anim cursor-pointer">
                My work blends <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-300">AI</span>, <span className="font-bold text-white">UI/UX design</span>, and <span className="font-bold text-white">data engineering</span>. I'm constantly exploring how AI can <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-300">accelerate development cycles</span>, optimize user experiences, and turn ideas into <span className="font-bold text-white">production-grade products</span>.
              </p>
              
              <p className="text-anim cursor-pointer">
                I love <span className="font-bold text-white">building at speed</span>, experimenting with <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-300">AI-driven workflows</span>, and solving <span className="font-bold text-white">high-pressure problems</span> in both tech and esports. Whether it's architecting <span className="font-bold text-white">scalable backends</span> or refining <span className="font-bold text-white">pixel-perfect interfaces</span>, I enjoy the challenge of creating <span className="font-bold text-white">systems that perform under pressure</span>.
              </p>
              
              <p className="text-anim cursor-pointer">
                Beyond development, I've led <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-300">esports teams</span> in <span className="font-bold text-white">national tournaments</span>, managed <span className="font-bold text-white">competitive rosters</span>, and built <span className="font-bold text-white">communities</span> around gaming and strategy. This combination of <span className="font-bold text-white">technical expertise</span> and <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-300">competitive leadership</span> has shaped how I approach <span className="font-bold text-white">problem-solving</span> and <span className="font-bold text-white">team collaboration</span>.
              </p>
              
              <p className="text-anim cursor-pointer">
                Here, I share my <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-300">projects, systems, and insights</span> from building <span className="font-bold text-white">startups</span>, <span className="font-bold text-white">esports analytics</span>, and <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-300">AI-powered tools</span>. <span className="block mt-3 text-[1.15rem]">If you're building something <span className="font-bold text-white">ambitious</span>, <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-300 hover:from-fuchsia-300 hover:via-purple-300 hover:to-cyan-200 transition-all duration-300 font-bold underline decoration-fuchsia-400/40 hover:decoration-fuchsia-400/60"><a href="mailto:iabhijais@gmail.com">let's connect</a></span> →</span>
              </p>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex flex-col gap-8 absolute top-[160px] right-6 w-[380px]">
          <NeonButton 
            title="Ideas → Reality" 
            subtitle="View Projects →" 
            glow="from-purple-500/70 to-pink-500/70" 
            tilt={0.8} 
            icon="💡" 
            onClick={() => setPage('projects')} 
          />
          <NeonButton 
            title="Beyond the Code" 
            subtitle="Know Me →" 
            glow="from-teal-500/70 to-cyan-500/70" 
            tilt={-0.8} 
            icon="👤" 
            showLine={true} 
            onClick={scrollToAbout} 
          />
          <NeonButton 
            title="Esports & Tech" 
            subtitle="Gaming Journey →" 
            glow="from-pink-500/70 to-orange-500/70" 
            tilt={0.8} 
            icon="🎮" 
            onClick={() => setPage('gaming')} 
          />
          <NeonButton 
            title="Let's Collaborate" 
            subtitle="Hire Me →" 
            glow="from-cyan-500/70 to-blue-500/70" 
            tilt={-0.8} 
            icon="🚀" 
            onClick={() => setPage('hire-me')} 
          />
        </div>
      </main>
      
      <Footer isDark={isDark} />
    </>
  );
}

// ============================================================================
// PROJECTS PAGE COMPONENT
// ============================================================================
function ProjectsPage({ isDark }) {
  const projects = [
    {
      title: "GameGrid.gg — Esports Analytics & Community Platform",
      description: "Building an end-to-end Esports Analytics Platform for players, teams, and analysts under the project GameGrid.gg. Architected full-stack system using Next.js, Node.js, Firebase, and Tailwind CSS, featuring real-time stats, match insights, and player dashboards. Integrated GenAI modules for automated commentary and player performance analysis. Currently in closed beta with competitive BGMI teams.",
      tech: ["Next.js", "Node.js", "Firebase", "Tailwind CSS", "GenAI", "Real-time Analytics"],
      status: "In Progress",
      link: "https://game-grid-one.vercel.app/",
      github: "https://github.com/iabhijais",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "ShellShock Counter — Interactive Strategy Game Tracker",
      description: "A fun, interactive web app inspired by Buckshot Roulette, designed for strategic gameplay and shell tracking. Players can track Active and Blank shells, plan their moves visually, and enjoy a smooth, animated experience built with Next.js and TypeScript. The app features vibrant visuals, responsive design, and a dynamic counter system — making it a perfect mix of logic, fun, and frontend creativity!",
      tech: ["Next.js", "React.js", "TypeScript", "Animations", "Glassmorphism"],
      status: "Completed & Live",
      link: "https://shell-counter.vercel.app/",
      github: "https://github.com/iabhijais",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      title: "Driver Sleepiness Detection (AI-Based Safety System)",
      description: "Developed a real-time driver drowsiness detection system using Convolutional Neural Networks (CNN) and facial feature recognition. Integrated OpenCV for live camera feed and TensorFlow for model training. The project detects eye-blink patterns to alert the driver and prevent road accidents. Published research in ICIRB 2023 Conference.",
      tech: ["Python", "OpenCV", "TensorFlow", "CNN", "Facial Recognition"],
      status: "Completed",
      link: "#",
      credential: "https://confmanage.com/Author/ConferencePaper/PaperDetails/3832",
      paper: "https://drive.google.com/file/d/1sn9BYWQRvwpvnr8UGm2zMkitVSfcsU6Q/view?usp=sharing",
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "Helperly — Android Emergency Assistance Application",
      description: "Created an emergency Android app that sends secure SMS alerts to preset contacts when triggered by password. Built using Java, Firebase Authentication, and SQLite, the app runs silently in the background to enhance user safety. Accepted for oral presentation at 9th International Conference ICICSE 2021 and later published in IJSET Journal (Vol. 9, Issue 4, 2021).",
      tech: ["Java", "Android Studio", "Firebase", "SQLite"],
      status: "Completed",
      link: "#",
      credential: "https://www.ijset.in/volume-9-issue-4/",
      paper: "https://drive.google.com/file/d/1R7N3RaKoGRy5jPjfAB13tN1XsCijiKox/view?usp=sharing",
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "All-in-One Calculator",
      description: "All-in-One Calculator is a responsive and modular web application designed to perform multiple calculation types in a single interface. Built with React.js + TypeScript, styled with Tailwind CSS, and deployed via Vercel, it provides a seamless user experience with real-time calculation, multiple themes, and precision.",
      tech: ["React.js", "TypeScript", "Tailwind CSS", "Vercel"],
      status: "Completed & Live",
      link: "https://calc-all.vercel.app/",
      github: "https://github.com/iabhijais",
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <>
      <main className="max-w-6xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">💡 My Projects</span>
          </h1>
          <p className={`text-xl ${isDark ? 'text-white/70' : 'text-gray-600'}`}>
            Building tools that solve real problems — from esports analytics to AI-powered systems
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative group rounded-2xl p-[1px] bg-gradient-to-r ${project.gradient}`}
            >
              <div className={`relative rounded-2xl ${isDark ? 'bg-black' : 'bg-white'} p-8 h-full border ${isDark ? 'border-white/10' : 'border-gray-200'}`}>
                <div className="flex flex-col gap-4">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{project.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap ${
                      project.status === 'In Progress' ? 'bg-yellow-500/20 text-yellow-300' : 'bg-green-500/20 text-green-300'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  
                  <p className={`${isDark ? 'text-white/70' : 'text-gray-600'} leading-relaxed`}>
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className={`px-3 py-1 rounded-lg text-sm ${isDark ? 'bg-white/5 text-white/60' : 'bg-gray-100 text-gray-600'}`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 mt-2">
                    {project.link && project.link !== '#' && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className={`px-4 py-2 rounded-lg font-semibold transition-all ${isDark ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-900'}`}>
                        View Live →
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className={`px-4 py-2 rounded-lg font-semibold transition-all ${isDark ? 'bg-white/5 hover:bg-white/10 text-white/80' : 'bg-gray-50 hover:bg-gray-100 text-gray-700'}`}>
                        GitHub
                      </a>
                    )}
                    {project.paper && (
                      <a href={project.paper} target="_blank" rel="noopener noreferrer" className={`px-4 py-2 rounded-lg font-semibold transition-all ${isDark ? 'bg-white/5 hover:bg-white/10 text-white/80' : 'bg-gray-50 hover:bg-gray-100 text-gray-700'}`}>
                        Research Paper
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
      
      <Footer isDark={isDark} />
    </>
  );
}

// ============================================================================
// GAMING PAGE COMPONENT
// ============================================================================
function GamingPage({ isDark }) {
  const socialLinks = [
    { title: 'Discord', subtitle: 'Join the Server', icon: '/discord-icon.svg', isImage: true, link: 'https://discord.gg/TVDZjZFXMS', gradient: 'from-indigo-500 to-purple-500' },
    { title: 'Instagram', subtitle: '@hawkkeyed', icon: '/instagram-icon.png', isImage: true, link: 'https://instagram.com/hawkkeyed', gradient: 'from-pink-500 to-rose-500' },
    { title: 'YouTube', subtitle: 'Watch Highlights', icon: '/youtube-icon.png', isImage: true, link: 'https://youtu.be/a7nJA2BND6Y?si=sW_Y9cobdYt_NgMw', gradient: 'from-red-500 to-orange-500' }
  ];

  const achievements = [
    'Former Esports Athlete at Team Glacier',
    'Former Head & Operations Lead at G4R Esports',
    'Represented teams in BGMI circuits including BGCS, Snapdragon Pro Series, and iQOO Invitational',
    'Led data-driven strategy building for competitive lineups',
    <>Currently developing <a href="https://game-grid-one.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-bold hover:from-purple-300 hover:to-pink-300 transition-all duration-300 underline decoration-purple-400/40 hover:decoration-purple-400/60">GameGrid.gg</a> — analytics & performance insights for esports</>
  ];

  const currentFocus = [
    <>Expanding <a href="https://game-grid-one.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-bold hover:from-purple-300 hover:to-pink-300 transition-all duration-300 underline decoration-purple-400/40 hover:decoration-purple-400/60">GameGrid.gg</a>'s AI-based esports analytics</>,
    'Building a community of competitive and creative gamers',
    'Collaborating with AI & gaming enthusiasts through my Discord'
  ];

  return (
    <>
      <main className='max-w-5xl mx-auto px-6 py-12'>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className='mb-16'>
          <h1 className='text-5xl md:text-6xl font-black mb-4'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400'>🎮 Gaming Journey</span>
          </h1>
          <p className='text-2xl md:text-3xl font-bold mb-2'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400'>"From the Lobby to the Cloud"</span>
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className={`space-y-6 text-lg leading-relaxed mb-16 ${isDark ? 'text-white/85' : 'text-gray-700'}`}>
          <p>When most people were learning to press play, I was learning to strategize every frame. That's where <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-bold'>Hawk</span> was born — not just another gamer tag, but a mindset.</p>
          <p>I started my journey as a competitive <span className='font-bold'>BGMI player</span>, leading teams, managing scrims, and building strategies that turned underdogs into tournament-ready squads. From <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-bold'>Team Glacier</span> to <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-bold'>G4R Esports</span>, every lineup taught me something deeper — not just how to win a match, but how to lead, adapt, and analyze under fire.</p>
          <p>Soon, my curiosity evolved beyond the game itself. I wanted to understand why we won, why we lost, and how data could predict performance. That's when my love for gaming turned into something bigger — <span className='font-bold'>building tools for gamers</span>.</p>
          <p>Today, I channel the same competitive fire into <a href="https://game-grid-one.vercel.app/" target="_blank" rel="noopener noreferrer" className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-bold hover:from-purple-300 hover:to-pink-300 transition-all duration-300 underline decoration-purple-400/40 hover:decoration-purple-400/60'>GameGrid.gg</a>, an esports analytics platform I'm building from scratch — combining gaming, AI, and data visualization to give players and teams the insights I once wished I had.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className='mb-16'>
          <h2 className='text-3xl font-bold mb-8 flex items-center gap-3'>
            <span>⚡</span>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-300'>Where You'll Find Me</span>
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {socialLinks.map((social, i) => (
              <motion.a 
                key={i} 
                href={social.link} 
                target='_blank' 
                rel='noopener noreferrer' 
                whileHover={{ scale: 1.05, y: -8, boxShadow: social.gradient === 'from-indigo-500 to-purple-500' ? '0 25px 50px rgba(99, 102, 241, 0.5)' : social.gradient === 'from-pink-500 to-rose-500' ? '0 25px 50px rgba(236, 72, 153, 0.5)' : '0 25px 50px rgba(239, 68, 68, 0.5)' }} 
                whileTap={{ scale: 0.98 }} 
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className={`relative group rounded-2xl p-[1px] bg-gradient-to-r ${social.gradient}`}
              >
                <div className={`relative rounded-2xl ${isDark ? 'bg-black' : 'bg-white'} p-6 h-full border ${isDark ? 'border-white/10' : 'border-gray-200'} transition-all duration-300 flex flex-col items-center text-center min-h-[180px] justify-center`}>
                  <div className='flex flex-col items-center gap-4'>
                    <div className='w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                      {social.isImage ? (
                        <img src={social.icon} alt={social.title} className='w-full h-full object-contain' />
                      ) : (
                        <div className='text-5xl'>{social.icon}</div>
                      )}
                    </div>
                    <div>
                      <h3 className={`text-lg font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>{social.title}</h3>
                      <p className={`text-sm ${isDark ? 'text-white/60' : 'text-gray-600'}`}>{social.subtitle}</p>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} className='mb-16'>
          <h2 className='text-3xl font-bold mb-6 flex items-center gap-3'>
            <span>🕹️</span>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-300'>Gaming Roles & Achievements</span>
          </h2>
          <ul className={`space-y-3 ${isDark ? 'text-white/75' : 'text-gray-700'}`}>
            {achievements.map((item, i) => (
              <li key={i} className='flex items-start gap-3'>
                <span className='text-purple-400 mt-1'>▹</span>
                <span className='leading-relaxed'>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }} className='mb-16'>
          <h2 className='text-3xl font-bold mb-6 flex items-center gap-3'>
            <span>🧠</span>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-300'>Current Focus</span>
          </h2>
          <ul className={`space-y-3 ${isDark ? 'text-white/75' : 'text-gray-700'}`}>
            {currentFocus.map((item, i) => (
              <li key={i} className='flex items-start gap-3'>
                <span className='text-cyan-400 mt-1'>▸</span>
                <span className='leading-relaxed'>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </main>
      
      <Footer isDark={isDark} />
    </>
  );
}

// ============================================================================
// HIRE ME PAGE COMPONENT
// ============================================================================
function HireMePage({ isDark }) {
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
    <>
      <main className="max-w-6xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            🤝 Let's Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Together</span>
          </h1>
          <p className={`text-xl ${isDark ? 'text-white/70' : 'text-gray-600'} max-w-3xl mx-auto`}>
            I help startups and teams build production-ready products fast. From ideation to deployment, I bring technical expertise and AI-powered workflows to turn your vision into reality.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-300">What I Can Do For You</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                whileHover={{ scale: 1.02, y: -4 }}
                className={`relative group rounded-2xl p-[1px] bg-gradient-to-r ${service.gradient}`}
              >
                <div className={`relative rounded-2xl ${isDark ? 'bg-black' : 'bg-white'} p-6 h-full border ${isDark ? 'border-white/10' : 'border-gray-200'}`}>
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{service.title}</h3>
                  <p className={`${isDark ? 'text-white/70' : 'text-gray-600'}`}>{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-300">Get In Touch</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.a
              href="mailto:iabhijais@gmail.com"
              whileHover={{ scale: 1.05, y: -4 }}
              className={`relative group rounded-2xl p-[1px] bg-gradient-to-r from-purple-500 to-pink-500`}
            >
              <div className={`relative rounded-2xl ${isDark ? 'bg-black' : 'bg-white'} p-6 h-full border ${isDark ? 'border-white/10' : 'border-gray-200'}`}>
                <div className="text-3xl mb-3">📧</div>
                <h3 className={`text-lg font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>Email</h3>
                <p className={`text-sm ${isDark ? 'text-white/60' : 'text-gray-600'}`}>iabhijais@gmail.com</p>
              </div>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/iabhijais/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -4 }}
              className={`relative group rounded-2xl p-[1px] bg-gradient-to-r from-cyan-500 to-blue-500`}
            >
              <div className={`relative rounded-2xl ${isDark ? 'bg-black' : 'bg-white'} p-6 h-full border ${isDark ? 'border-white/10' : 'border-gray-200'}`}>
                <div className="flex items-center justify-center w-8 h-8 mb-3">
                  <img src="/linkedin-icon.png" alt="LinkedIn" className="w-8 h-8 object-contain" />
                </div>
                <h3 className={`text-lg font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>LinkedIn</h3>
                <p className={`text-sm ${isDark ? 'text-white/60' : 'text-gray-600'}`}>Connect with me</p>
              </div>
            </motion.a>

            <motion.a
              href="https://github.com/iabhijais"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -4 }}
              className={`relative group rounded-2xl p-[1px] bg-gradient-to-r from-green-500 to-teal-500`}
            >
              <div className={`relative rounded-2xl ${isDark ? 'bg-black' : 'bg-white'} p-6 h-full border ${isDark ? 'border-white/10' : 'border-gray-200'}`}>
                <div className="flex items-center justify-center w-6 h-6 mb-3">
                  <img src="/github-icon.png" alt="GitHub" className="w-6 h-6 object-contain" />
                </div>
                <h3 className={`text-lg font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>GitHub</h3>
                <p className={`text-sm ${isDark ? 'text-white/60' : 'text-gray-600'}`}>@iabhijais</p>
              </div>
            </motion.a>
          </div>
        </motion.div>
      </main>
      
      <Footer isDark={isDark} />
    </>
  );
}

// ============================================================================
// RESUME PAGE COMPONENT
// ============================================================================
function ResumePage({ isDark }) {
  return (
    <>
      <main className="max-w-6xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">📄 Resume</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`relative rounded-2xl p-[1px] bg-gradient-to-r from-purple-500 to-pink-500`}
        >
          <div className={`relative rounded-2xl ${isDark ? 'bg-black' : 'bg-white'} p-4 border ${isDark ? 'border-white/10' : 'border-gray-200'}`}>
            <iframe
              src="/Resume.pdf"
              className="w-full h-[80vh] rounded-lg"
              title="Resume"
            />
          </div>
        </motion.div>

        <div className="text-center mt-8">
          <a
            href="/Resume.pdf"
            download
            className={`inline-block px-6 py-3 rounded-lg font-semibold transition-all ${isDark ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-gray-900 hover:bg-gray-800 text-white'}`}
          >
            Download Resume →
          </a>
        </div>
      </main>
      
      <Footer isDark={isDark} />
    </>
  );
}

// ============================================================================
// MAIN APP COMPONENT
// ============================================================================
export default function MergedApp() {
  useCursorGlow();
  const [isDark, setIsDark] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [page, setPage] = useState('home');

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

  useEffect(() => {
    document.body.className = isDark ? 'dark-mode' : 'light-mode';
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToAbout = (e) => {
    e?.preventDefault();
    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
      const yOffset = -20;
      const y = aboutSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-black text-white' : 'bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900'} relative overflow-x-hidden transition-all duration-300`}>
      {/* Electric Neon Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-50 bg-transparent">
        <div 
          className="h-full electric-progress"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Cursor Elements */}
      <div id="cursorGlow" className="cursor-glow" />
      <div id="cursorDot" className="cursor-dot" />

      {/* NAV */}
      <header className={`w-full sticky top-0 z-20 ${isDark ? 'bg-black/50' : 'bg-white/80'} backdrop-blur-md transition-colors duration-300 ${!isDark && 'shadow-sm'}`}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className={`font-bold text-xl flex items-center gap-2 px-4 py-2 -ml-4`}>
            <button onClick={() => setPage('home')} className="transition-all duration-300 rounded-lg nav-link-logo relative p-1 -m-1">
              <img src="/Logo.ico" alt="Logo" className="w-6 h-6 object-contain" />
            </button>
            <span className="flex items-center -mt-0.5">
              <span className={isDark ? 'text-white' : 'text-gray-900'}>/</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-300">
                {page === 'home' ? 'iabhijais' : page === 'hire-me' ? 'Hire Me' : page.charAt(0).toUpperCase() + page.slice(1)}
              </span>
              <span className={`animate-blink ${isDark ? 'text-white' : 'text-gray-900'}`}>~</span>
            </span>
          </div>
          <nav className="flex items-center gap-0 text-base font-semibold">
            <button className={`nav-link-tab cursor-pointer transition-all duration-300 px-4 py-2 relative`} onClick={() => setPage('home')}>Home</button>
            <button className={`nav-link-tab cursor-pointer transition-all duration-300 px-4 py-2 relative`} onClick={() => setPage('projects')}>Projects</button>
            <button className={`nav-link-tab cursor-pointer transition-all duration-300 px-4 py-2 relative`} onClick={() => setPage('gaming')}>Gaming</button>
            {page === 'home' ? (
              <button className={`nav-link-tab cursor-pointer transition-all duration-300 px-4 py-2 relative`} onClick={scrollToAbout}>About</button>
            ) : (
              <button className={`nav-link-tab cursor-pointer transition-all duration-300 px-4 py-2 relative`} onClick={() => setPage('resume')}>Resume</button>
            )}
            <button className={`nav-link-tab cursor-pointer transition-all duration-300 px-4 py-2 relative`} onClick={() => setPage('hire-me')}>Hire Me</button>
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

      {/* RENDER CURRENT PAGE */}
      {page === 'home' && <HomePage setPage={setPage} isDark={isDark} />}
      {page === 'projects' && <ProjectsPage isDark={isDark} />}
      {page === 'gaming' && <GamingPage isDark={isDark} />}
      {page === 'hire-me' && <HireMePage isDark={isDark} />}
      {page === 'resume' && <ResumePage isDark={isDark} />}
    </div>
  );
}
