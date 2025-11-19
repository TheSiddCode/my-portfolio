import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, ExternalLink, Award, Briefcase, Code, GraduationCap, Trophy, ChevronDown, Menu, X } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "Legal Compass",
      description: "MERN Stack legal platform serving 100+ monthly users with Razorpay integration",
      tech: ["React", "Node.js", "MongoDB", "TypeScript", "Razorpay"],
      stats: ["100+ Users", "15K+ Transactions", "99% Uptime"],
      github: "https://github.com/TheSiddCode",
      gradient: "from-purple-600 to-blue-600"
    },
    {
      title: "Full-Stack Chat App",
      description: "Real-time messaging platform with Socket.IO supporting 100+ concurrent users",
      tech: ["MERN", "Socket.IO", "JWT", "MongoDB Atlas"],
      stats: ["100+ Concurrent", "10K+ Monthly Users", "<1s Response"],
      github: "https://github.com/TheSiddCode",
      gradient: "from-green-600 to-teal-600"
    },
    {
      title: "Crowdfunding DApp",
      description: "Decentralized platform with 50+ campaigns raising over 50 ETH",
      tech: ["Solidity", "React", "Ethers.js", "Hardhat", "MetaMask"],
      stats: ["50+ Campaigns", "50+ ETH Raised", "100% Test Coverage"],
      github: "https://github.com/TheSiddCode",
      gradient: "from-orange-600 to-red-600"
    }
  ];

  const skills = {
    "Languages": ["C/C++", "JavaScript", "HTML/CSS", "Solidity"],
    "Frontend": ["React.js", "TypeScript", "Tailwind CSS"],
    "Backend": ["Node.js", "Express.js", "REST APIs"],
    "Database": ["MongoDB", "MongoDB Atlas"],
    "Blockchain": ["Solidity", "Hardhat", "Ethers.js", "MetaMask"],
    "Tools": ["Git/GitHub", "VS Code", "Remix IDE"]
  };

  const achievements = [
    { icon: Trophy, title: "1st Runner-Up", desc: "HackTron Hackathon 2025 (35+ teams)", color: "text-yellow-400" },
    { icon: Trophy, title: "1st Runner-Up", desc: "Lakecity Hack 2025 (40+ teams)", color: "text-yellow-400" },
    { icon: Award, title: "Certified Developer", desc: "Complete Full Stack Bootcamp", color: "text-blue-400" }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white min-h-screen">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              &lt;TheSiddCode /&gt;
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'skills', 'achievements', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize hover:text-purple-400 transition-colors ${activeSection === item ? 'text-purple-400' : ''}`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3">
              {['home', 'about', 'projects', 'skills', 'achievements', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left capitalize hover:text-purple-400 transition-colors py-2"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-8 relative inline-block">
            <div className="w-40 h-40 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 p-1 animate-pulse">
              <img
                src="/profile.jpg"
                alt="Siddhant Pratap Singh"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 bg-clip-text text-transparent">
            Siddhant Pratap Singh
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Full-Stack Developer & Blockchain Enthusiast
          </p>

          <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto">
            Building scalable MERN applications and decentralized solutions. Passionate about creating impactful products with clean code and modern technologies.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a href="https://github.com/TheSiddCode" target="_blank" rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105 flex items-center gap-2">
              <Github size={20} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/siddhant-pratap-singh-rajawat-0741b424a/" target="_blank" rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-700 px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105 flex items-center gap-2">
              <Linkedin size={20} /> LinkedIn
            </a>
            <button onClick={() => scrollToSection('contact')}
              className="border-2 border-purple-500 hover:bg-purple-500/20 px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105">
              Contact Me
            </button>
          </div>

          <ChevronDown className="animate-bounce mx-auto text-purple-400" size={32} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-purple-500 transition-all">
              <GraduationCap className="text-purple-400 mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-4">Education</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-purple-400 font-semibold">B.Tech in Computer Science</p>
                  <p className="text-gray-400">Jaypee University of Engineering & Technology</p>
                  <p className="text-gray-500">2022 - 2026</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-blue-500 transition-all">
              <Briefcase className="text-blue-400 mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-4">Experience</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-blue-400 font-semibold">Product Engineer Trainee</p>
                  <p className="text-gray-400">Observance Solutions Pvt. Ltd.</p>
                  <p className="text-gray-500">Jun 2025 - Jul 2025</p>
                  <ul className="mt-2 text-sm text-gray-400 list-disc list-inside">
                    <li>Enhanced 4+ UI components with React</li>
                    <li>Collaborated with 8+ developers</li>
                    <li>Participated in 6+ Agile sprints</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-purple-900/30 to-blue-900/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <Code className="text-green-400 mb-4 mx-auto" size={40} />
            <p className="text-lg text-gray-300 leading-relaxed text-center">
              Problem-solving oriented Computer Science Engineer with strong fundamentals in DSA, OOP, DBMS, and OS.
              Skilled in building scalable full-stack applications using the MERN stack with hands-on experience in
              end-to-end development. Passionate about leveraging AI-powered tools and blockchain technology to create
              impactful solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-purple-500 transition-all transform hover:scale-105">
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="bg-gray-700 px-3 py-1 rounded-full text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {project.stats.map((stat, i) => (
                      <div key={i} className="bg-gray-900 p-2 rounded text-center">
                        <p className="text-xs text-gray-400">{stat}</p>
                      </div>
                    ))}
                  </div>

                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                    <Github size={18} />
                    <span>View Project</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items], idx) => (
              <div key={idx} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-purple-500 transition-all">
                <h3 className="text-xl font-bold mb-4 text-purple-400">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, i) => (
                    <span key={i} className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 px-3 py-2 rounded-lg text-sm hover:scale-105 transition-transform">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Achievements
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, idx) => {
              const Icon = achievement.icon;
              return (
                <div key={idx} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-yellow-500 transition-all text-center transform hover:scale-105">
                  <Icon className={`${achievement.color} mx-auto mb-4`} size={48} />
                  <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                  <p className="text-gray-400">{achievement.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 bg-gradient-to-r from-green-900/30 to-blue-900/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold mb-4 text-center">Extracurricular</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center">
                <p className="text-green-400 font-semibold mb-2">College Cricket Team</p>
                <p className="text-gray-400 text-sm">10+ matches • 85% win rate • 20% performance improvement</p>
              </div>
              <div className="text-center">
                <p className="text-blue-400 font-semibold mb-2">Joint Secretary - EDC JUET</p>
                <p className="text-gray-400 text-sm">Organized IPL Auction • 120+ participants • Led 15+ team</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a href="mailto:siddhantrajawat07@gmail.com"
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-purple-500 transition-all transform hover:scale-105">
              <Mail className="text-purple-400 mx-auto mb-4" size={40} />
              <p className="text-sm text-gray-400">Email</p>
              <p className="text-white mt-2">siddhantrajawat07@gmail.com</p>
            </a>

            <a href="tel:+919755967933"
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-blue-500 transition-all transform hover:scale-105">
              <Phone className="text-blue-400 mx-auto mb-4" size={40} />
              <p className="text-sm text-gray-400">Phone</p>
              <p className="text-white mt-2">+91 97559 67933</p>
            </a>

            <a href="https://github.com/TheSiddCode" target="_blank" rel="noopener noreferrer"
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-green-500 transition-all transform hover:scale-105">
              <Github className="text-green-400 mx-auto mb-4" size={40} />
              <p className="text-sm text-gray-400">GitHub</p>
              <p className="text-white mt-2">TheSiddCode</p>
            </a>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Open to Opportunities</h3>
            <p className="text-lg mb-6">Looking for Full-Stack Developer roles, internships, or exciting collaborations!</p>
            <a href="mailto:siddhantrajawat07@gmail.com"
              className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all inline-block transform hover:scale-105">
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 mb-4">© 2025 Siddhant Pratap Singh. Built with React & Tailwind CSS.</p>
          <div className="flex justify-center gap-6">
            <a href="https://github.com/TheSiddCode" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/siddhant-singh" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:siddhantrajawat07@gmail.com" className="text-gray-400 hover:text-purple-400 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;