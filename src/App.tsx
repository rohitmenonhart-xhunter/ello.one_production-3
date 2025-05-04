import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Braces, Cpu, Database, Menu, X, FlaskConical, GithubIcon, Plus, TerminalSquare, Layers, BrainCircuit, Microscope, Beaker, Code, Rocket, Brain, Mic, ClockIcon, Network, Workflow, Bot } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Spline from '@splinetool/react-spline';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [splineLoaded, setSplineLoaded] = useState(false);
  
  // Add draggable terminal state
  const [terminalPosition, setTerminalPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const terminalRef = useRef<HTMLDivElement>(null);
  
  // Initialize scroll ticking ref for performance optimization
  const scrollTicking = useRef(false);
  // Add scroll timeout ref to manage scrolling class
  const scrollTimeout = useRef<number | null>(null);

  // Add performance optimization function and state
  const [isSplineVisible, setIsSplineVisible] = useState(false);
  const splineContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      // Throttle scroll events for better performance
      if (!window.requestAnimationFrame) {
        setScrollY(window.scrollY);
        return;
      }

      // Add scrolling class to prevent jittering
      document.documentElement.classList.add('is-scrolling');
      
      // Clear existing timeout
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      
      // Set a timeout to remove the scrolling class
      scrollTimeout.current = setTimeout(() => {
        document.documentElement.classList.remove('is-scrolling');
      }, 100);

      if (!scrollTicking.current) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          scrollTicking.current = false;
        });
        scrollTicking.current = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);
  
  // Terminal drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (terminalRef.current) {
      const rect = terminalRef.current.getBoundingClientRect();
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
      setIsDragging(true);
      // Add moving class for visual feedback
      terminalRef.current.classList.add('terminal-moving');
    }
  };
  
  const handleTouchStart = (e: React.TouchEvent) => {
    if (terminalRef.current && e.touches.length > 0) {
      const touch = e.touches[0];
      const rect = terminalRef.current.getBoundingClientRect();
      setDragOffset({
        x: touch.clientX - rect.left,
        y: touch.clientY - rect.top
      });
      setIsDragging(true);
      // Add moving class for visual feedback
      terminalRef.current.classList.add('terminal-moving');
    }
  };
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        setTerminalPosition({
          x: e.clientX - dragOffset.x,
          y: e.clientY - dragOffset.y
        });
      }
    };
    
    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging && e.touches.length > 0) {
        const touch = e.touches[0];
        setTerminalPosition({
          x: touch.clientX - dragOffset.x,
          y: touch.clientY - dragOffset.y
        });
        e.preventDefault(); // Prevent scrolling while dragging
      }
    };
    
    const handleMouseUp = () => {
      setIsDragging(false);
      // Remove moving class when done dragging
      if (terminalRef.current) {
        terminalRef.current.classList.remove('terminal-moving');
      }
    };
    
    const handleTouchEnd = () => {
      setIsDragging(false);
      // Remove moving class when done dragging
      if (terminalRef.current) {
        terminalRef.current.classList.remove('terminal-moving');
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging, dragOffset]);

  // Update useEffect to include Intersection Observer for on-demand rendering
  useEffect(() => {
    // Only load Spline model when it's in viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSplineVisible(entry.isIntersecting);
      },
      {
        rootMargin: '100px', // Preload a bit before it comes into view
        threshold: 0.1
      }
    );

    if (splineContainerRef.current) {
      observer.observe(splineContainerRef.current);
    }

    return () => {
      if (splineContainerRef.current) {
        observer.unobserve(splineContainerRef.current);
      }
    };
  }, []);

  const handleSplineLoad = () => {
    setSplineLoaded(true);
  };

  return (
    <>
      <Helmet>
        <title>ello.one - R&D Division of Mockello | Advanced AI Research</title>
        <meta name="description" content="ello.one is the cutting-edge research and development wing of Mockello, pioneering innovations in AI technology through deep research and experimentation." />
      </Helmet>
      
      <div className="min-h-screen bg-dark-900 text-white overflow-hidden">
        {/* Navigation */}
        <header>
          <nav aria-label="Main navigation" className={`fixed w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-dark-800/90 backdrop-blur-xl border-b border-accent-primary/10' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                <div className="flex items-center">
                  <img src="/logo.svg" alt="ello.one" className={`h-8 w-8 mr-3 transition-all duration-300 ${scrollY > 50 ? 'filter-none' : 'filter drop-shadow(0 0 10px rgba(0, 255, 102, 0.5))'}`} />
                  <span className="text-xl tracking-[0.5em] text-gradient">ello.one</span>
                </div>
                <div className="hidden md:flex items-center space-x-8">
                  <a href="#about" className="text-accent-primary hover:text-white transition-colors duration-300 text-sm tracking-[0.2em]">About</a>
                  <a href="#products" className="text-accent-primary hover:text-white transition-colors duration-300 text-sm tracking-[0.2em]">Products</a>
                  <a href="#research" className="text-accent-primary hover:text-white transition-colors duration-300 text-sm tracking-[0.2em]">Research</a>
                  <Link 
                    to="/founders" 
                    className="text-accent-primary hover:text-white transition-colors duration-300 text-sm tracking-[0.2em]"
                  >
                    Founders
                  </Link>
                  <a 
                    href="tel:7550000805"
                    className="cyber-button px-6 py-2 rounded-full text-sm tracking-[0.2em] border border-accent-primary/20 neon-border"
                  >
                    Contact
                  </a>
                </div>
                <button 
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="md:hidden p-2 text-accent-primary hover:text-white transition-colors duration-300"
                >
                  {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
            {/* Mobile Menu */}
            <div className={`md:hidden absolute w-full dark-glass-effect transition-all duration-300 border-b border-accent-primary/10 ${mobileMenuOpen ? 'max-h-64 py-4' : 'max-h-0 overflow-hidden'}`}>
              <div className="px-4 space-y-4">
                <a href="#about" className="block text-accent-primary hover:text-white transition-colors duration-300 text-sm tracking-[0.2em] py-2">About</a>
                <a href="#products" className="block text-accent-primary hover:text-white transition-colors duration-300 text-sm tracking-[0.2em] py-2">Products</a>
                <a href="#research" className="block text-accent-primary hover:text-white transition-colors duration-300 text-sm tracking-[0.2em] py-2">Research</a>
                <Link 
                  to="/founders"
                  className="block text-accent-primary hover:text-white transition-colors duration-300 text-sm tracking-[0.2em] py-2"
                >
                  Founders
                </Link>
                <a 
                  href="tel:7550000805"
                  className="block w-full bg-dark-600/90 text-white px-6 py-2 rounded-full transition-all duration-300 text-sm tracking-[0.2em] border border-accent-primary/20 text-center"
                >
                  Contact
                </a>
              </div>
            </div>
          </nav>
        </header>

        <main>
          {/* Hero Section */}
          <section id="hero" aria-label="Hero section" className="relative min-h-screen">
            {/* Advanced background effects */}
            <div className="absolute inset-0 bg-dark-900 overflow-hidden">
              {/* Dark matrix-like grid */}
              <div className="absolute inset-0 cyber-grid opacity-20"></div>
              
              {/* Perspective grid */}
              <div 
                className="absolute inset-0 opacity-10" 
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 242, 255, 0.1) 1px, transparent 1px), 
                                    linear-gradient(90deg, rgba(0, 242, 255, 0.1) 1px, transparent 1px)`,
                  backgroundSize: '10vw 10vw',
                  backgroundPosition: 'center center',
                  perspective: '1000px',
                  transform: 'rotateX(60deg) scale(3)',
                  transformOrigin: 'center bottom'
                }}
              ></div>
              
              {/* Neon scanlines */}
              <div className="absolute inset-0 bg-repeat-y opacity-5"
                style={{
                  backgroundImage: `linear-gradient(transparent 50%, rgba(0, 242, 255, 0.05) 50%)`,
                  backgroundSize: '100% 4px'
                }}
              ></div>
              
              {/* Animated beams of light */}
              {[...Array(3)].map((_, i) => (
                <div key={i} className="neon-beam" style={{ 
                  animationDelay: `${i * 3}s`,
                  left: `${i * 30 + 20}%`,
                  willChange: 'transform'
                }} />
              ))}
              
              {/* Particle system */}
              <div className="absolute inset-0">
                {[...Array(15)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute rounded-full bg-neon-green/30"
                    style={{
                      width: `${Math.random() * 4 + 1}px`,
                      height: `${Math.random() * 4 + 1}px`,
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      animation: `float ${Math.random() * 20 + 10}s linear infinite`,
                      animationDelay: `-${Math.random() * 10}s`,
                      opacity: Math.random() * 0.5 + 0.1,
                      willChange: 'transform'
                    }}
                  />
                ))}
              </div>
              
              {/* Gradient overlays */}
              <div className="absolute inset-0 bg-gradient-radial from-transparent via-dark-900/70 to-dark-900 opacity-80"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-900/80 to-dark-800"></div>
              
              {/* Subtle glow around center */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vh] rounded-full bg-neon-green/5 blur-[100px]"></div>
            </div>
            
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center justify-start z-10">
              <div className="max-w-3xl md:pl-4 lg:pl-12 w-full">
                {/* Logo & Title Section with enhanced effects */}
                <div className="mb-6 sm:mb-10 relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-neon-green/30 via-neon-green/20 to-transparent blur-xl opacity-70 animate-pulse"></div>
                  <div className="relative">
                    {/* Research Badge */}
                    <div className="inline-flex items-center space-x-2 mb-4 sm:mb-6 neon-border px-2 sm:px-3 py-1 rounded-full animate-float-slow">
                      <div className="h-px w-3 sm:w-5 bg-neon-green"></div>
                      <span className="text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase text-neon-green">R&D Division</span>
                      <div className="h-px w-3 sm:w-5 bg-neon-green"></div>
                    </div>
                    
                    {/* Main Title with animation */}
                    <div className="overflow-hidden mb-2 sm:mb-4">
                      <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.15em] text-gradient-blue leading-tight font-light relative typewriter-large">
                    ello.one
                  </h1>
                    </div>
                    
                    {/* Animated subtitle with data stream effect */}
                    <div className="overflow-hidden">
                      <p className="text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase text-accent-primary data-stream-thin opacity-80">
                        Advanced Research Laboratory
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Partner Section with neon effect */}
                <div className="flex items-center space-x-2 sm:space-x-4 mb-8 sm:mb-12">
                  <span className="text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] text-accent-primary">Subsidiary of</span>
                  <div className="relative">
                    <div className="absolute -inset-1 rounded-lg neon-glow opacity-50"></div>
                    <a 
                      href="https://mockello.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative px-2 sm:px-3 py-1 sm:py-2 neon-border rounded-lg bg-dark-800/50 hover:bg-dark-700/50 transition-all duration-500"
                    >
                      <span className="text-gradient-blue text-base sm:text-lg tracking-widest font-light">mockello</span>
                    </a>
                  </div>
                </div>

                {/* Enhanced description with animated underline */}
                <div className="mb-8 sm:mb-12 relative">
                  <p className="text-base sm:text-lg md:text-xl text-white mb-4 sm:mb-6 font-light tracking-wider leading-relaxed animate-float-slow">
                    Where <span className="text-neon-green">advanced technology</span> meets 
                    <span className="relative inline-block mx-1">
                      exceptional engineering
                      <span className="absolute bottom-0 left-0 w-full h-px bg-neon-green" style={{
                        animation: 'shine 3s linear infinite'
                      }}></span>
                    </span>
                  </p>
                  <div className="text-accent-primary text-sm sm:text-base tracking-wider leading-relaxed pl-3 sm:pl-4 border-l-2 border-neon-green/30">
                    <p className="mb-3 sm:mb-4 relative data-stream">
                      Exploring the boundaries of artificial intelligence, machine learning, software development
                      and advanced engineering to drive innovations for Mockello's product ecosystem.
                    </p>
                    
                  </div>
                  
                  {/* Animated research tags */}
                  <div className="flex flex-wrap gap-1 sm:gap-2 mt-4 sm:mt-6">
                    <span className="bg-dark-600/80 border border-neon-green/20 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs tracking-wider text-accent-highlight animate-pulse">AI Research</span>
                    <span className="bg-dark-600/80 border border-neon-green/20 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs tracking-wider text-accent-highlight animate-pulse" style={{animationDelay: '1s'}}>Machine Learning</span>
                    <span className="bg-dark-600/80 border border-neon-green/20 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs tracking-wider text-accent-highlight animate-pulse" style={{animationDelay: '2s'}}>Software Engineering</span>
                    <span className="bg-dark-600/80 border border-neon-green/20 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs tracking-wider text-accent-highlight animate-pulse" style={{animationDelay: '3s'}}>Full-Stack Development</span>
                  </div>
                </div>

                {/* Enhanced call-to-action buttons */}
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-6">
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-green to-neon-green opacity-75 rounded-md blur group-hover:opacity-100 transition duration-1000"></div>
                    <a 
                      href="https://forms.gle/UyG76PtGrjRFnWnYA" 
                      className="group relative bg-dark-800 cyber-button px-4 sm:px-8 py-3 sm:py-4 rounded-md hover:bg-dark-700 transition-all duration-300 text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] border border-neon-green/30 flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3"
                    >
                      <span className="text-white group-hover:text-neon-green transition-colors duration-300">Apply for Research Position</span>
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300 text-neon-green" />
                    </a>
                    
                    {/* Enhanced Floating Chat Bubble - Hidden on mobile */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-full sm:w-80 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-95 group-hover:scale-100 z-50 hidden sm:block">
                      <div className="dark-glass-effect p-4 sm:p-6 rounded-lg relative neon-border">
                        <h4 className="text-neon-green text-sm font-medium mb-4 tracking-wider">Available Positions</h4>
                        <div className="text-sm text-accent-primary tracking-wider space-y-6">
                          {/* Technical Roles */}
                          <div className="space-y-3">
                            <h5 className="text-neon-green text-xs uppercase tracking-wider mb-2">Research</h5>
                            <div className="flex items-center space-x-2 hover:text-white transition-colors duration-300 cursor-pointer group">
                              <div className="w-1.5 h-1.5 rounded-full bg-neon-green/50 group-hover:bg-neon-green group-hover:animate-pulse"></div>
                              <span>AI Research Engineer</span>
                            </div>
                            <div className="flex items-center space-x-2 hover:text-white transition-colors duration-300 cursor-pointer group">
                              <div className="w-1.5 h-1.5 rounded-full bg-neon-green/50 group-hover:bg-neon-green group-hover:animate-pulse"></div>
                              <span>ML Research Scientist</span>
                            </div>
                          </div>

                          {/* Engineering Roles */}
                          <div className="space-y-3">
                            <h5 className="text-neon-green text-xs uppercase tracking-wider mb-2">Engineering</h5>
                            <div className="flex items-center space-x-2 hover:text-white transition-colors duration-300 cursor-pointer group">
                              <div className="w-1.5 h-1.5 rounded-full bg-neon-green/50 group-hover:bg-neon-green group-hover:animate-pulse"></div>
                              <span>AI Software Engineer</span>
                            </div>
                            <div className="flex items-center space-x-2 hover:text-white transition-colors duration-300 cursor-pointer group">
                              <div className="w-1.5 h-1.5 rounded-full bg-neon-green/50 group-hover:bg-neon-green group-hover:animate-pulse"></div>
                              <span>Full-Stack Developer</span>
                            </div>
                            <div className="flex items-center space-x-2 hover:text-white transition-colors duration-300 cursor-pointer group">
                              <div className="w-1.5 h-1.5 rounded-full bg-neon-green/50 group-hover:bg-neon-green group-hover:animate-pulse"></div>
                              <span>Software Architect</span>
                            </div>
                          </div>
                        </div>
                        {/* Chat Bubble Triangle */}
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
                          <div className="w-4 h-4 bg-dark-800 border-r border-b border-neon-green/20 rotate-45"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a 
                    href="#about" 
                    className="relative overflow-hidden px-4 sm:px-8 py-3 sm:py-4 rounded-md dark-glass-effect transition-all duration-300 text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] text-accent-primary hover:text-white text-center border border-accent-primary/10 hover:border-accent-primary/30 group"
                  >
                    <span className="relative z-10">Explore Our Research</span>
                    <div className="absolute inset-0 w-full h-full transform -translate-x-full transition-transform duration-500 bg-gradient-to-r from-transparent via-accent-primary/10 to-transparent group-hover:translate-x-full"></div>
                  </a>
                </div>
              </div>
            </div>

            {/* Animated terminal window decoration element - draggable on all devices */}
            <div 
              ref={terminalRef}
              onMouseDown={handleMouseDown}
              onTouchStart={handleTouchStart}
              style={{
                position: 'fixed',
                left: isDragging || terminalPosition.x !== 0 ? `${terminalPosition.x}px` : '50%',
                top: isDragging || terminalPosition.y !== 0 ? `${terminalPosition.y}px` : 'auto',
                bottom: isDragging || terminalPosition.y !== 0 ? 'auto' : '4rem',
                transform: isDragging || terminalPosition.x !== 0 ? 'none' : 'translateX(-50%)',
                cursor: isDragging ? 'grabbing' : 'grab',
                zIndex: isDragging ? 50 : 10,
                touchAction: 'none'
              }}
              className="sm:absolute w-[90%] sm:w-auto max-w-[300px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[420px] h-40 sm:h-56 md:h-64 dark-glass-effect rounded-lg border border-neon-green/30 overflow-hidden shadow-lg neon-glow-green transition-all duration-300 hover:scale-[1.02] group select-none animate-terminal-appear"
            >
              {/* Terminal header - handle for dragging */}
              <div 
                className="h-6 sm:h-8 bg-dark-800 border-b border-neon-green/20 flex items-center px-2 sm:px-3 justify-between cursor-grab active:cursor-grabbing relative group"
              >
                {/* Tooltip that appears on hover to indicate terminal is draggable */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-dark-800 px-2 py-1 rounded text-xs text-neon-green border border-neon-green/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-50">
                  <span>Drag to move terminal</span>
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-dark-800 border-r border-b border-neon-green/30 rotate-45"></div>
                </div>

                <div className="flex items-center space-x-1 sm:space-x-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-dark-500 hover:bg-red-500 transition-colors duration-300"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-dark-500 hover:bg-yellow-500 transition-colors duration-300"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-dark-500 hover:bg-green-500 transition-colors duration-300"></div>
                </div>
                <span className="text-[10px] sm:text-xs text-accent-primary font-mono flex items-center">
                  <span className="inline-block w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-neon-green mr-1 sm:mr-2 animate-pulse"></span>
                  ello_research_terminal
                  {/* Small drag icon indicator */}
                  <svg className="ml-1 w-3 h-3 text-accent-primary opacity-60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 5H6M8 12H6M8 19H6M18 5H16M18 12H16M18 19H16M12 5H10M12 12H10M12 19H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-dark-600 hover:bg-dark-400 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-[6px] sm:text-[8px] text-accent-primary">-</span>
                  </div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-dark-600 hover:bg-dark-400 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-[6px] sm:text-[8px] text-accent-primary">+</span>
                  </div>
                </div>
              </div>
              
              {/* Terminal body with realistic scrolling text */}
              <div className="p-2 sm:p-4 h-[calc(100%-24px)] sm:h-[calc(100%-32px)] text-[10px] sm:text-xs font-mono overflow-hidden bg-dark-900/80 relative select-none">
                {/* Terminal cursor blink */}
                <div className="flex">
                  <span className="text-neon-green mr-1 sm:mr-1.5">root@ello:~$</span>
                  <span className="text-accent-highlight typewriter inline-block">./init_research_environment.sh</span>
                </div>
                
                <div className="mt-1 sm:mt-2 text-accent-primary space-y-1 sm:space-y-1.5">
                  {/* System loading messages with typing effect */}
                  <div className="flex items-center data-stream">
                    <span className="mr-1 text-neon-green">[system]</span>
                    <span>Loading neural networks...</span>
                    <span className="ml-1 text-neon-green">done</span>
                      </div>
                      
                  <div className="flex items-center data-stream" style={{animationDelay: '1s'}}>
                    <span className="mr-1 text-neon-green">[system]</span>
                    <span>Connecting to AI clusters...</span>
                    <span className="ml-1 text-neon-green">done</span>
                        </div>
                  
                  <div className="flex items-center data-stream" style={{animationDelay: '2s'}}>
                    <span className="mr-1 text-neon-green">[system]</span>
                    <span>Initializing model weights...</span>
                    <span className="ml-1 text-neon-green">ready</span>
                      </div>
                  
                  <div className="flex items-center data-stream" style={{animationDelay: '3s'}}>
                    <span className="mr-1 text-neon-green">[system]</span>
                    <span>Training data pipeline...</span>
                    <span className="ml-1 text-neon-green">active</span>
                      </div>
                      
                  {/* Memory and CPU stats in animated bars */}
                  <div className="pt-2 border-t border-dark-600 mt-2">
                    <div className="flex items-center justify-between">
                      <span className="text-accent-highlight">Memory:</span>
                      <div className="w-2/3 bg-dark-600 h-2 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-neon-green to-neon-green rounded-full" 
                             style={{
                               width: '67%',
                               animation: 'pulse 4s ease-in-out infinite'
                             }}></div>
                      </div>
                      <span>67%</span>
                </div>

                    <div className="flex items-center justify-between mt-1.5">
                      <span className="text-accent-highlight">CPU:</span>
                      <div className="w-2/3 bg-dark-600 h-2 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-neon-green to-neon-green rounded-full" 
                             style={{
                               width: '42%',
                               animation: 'pulse 3s ease-in-out infinite'
                             }}></div>
                      </div>
                      <span>42%</span>
                    </div>
                  </div>
                  
                  {/* Final command prompt */}
                  <div className="flex items-center mt-3 data-stream" style={{animationDelay: '4s'}}>
                    <span className="text-neon-green mr-1.5">root@ello:~$</span>
                    <span className="text-white typewriter-large group-hover:after:border-neon-green transition-colors duration-300">run_research.sh --project=agentello</span>
                </div>

                  {/* Research output on hover - appears only when terminal is hovered */}
                  <div className="pt-3 invisible group-hover:visible h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="flex items-start">
                      <span className="text-neon-green mr-1.5">[research]</span>
                      <div>
                        <span className="text-white">Testing agent coordination protocols...</span>
                        <div className="pl-4 text-accent-primary">
                          <div>- Agent 1: Task allocation completed</div>
                          <div>- Agent 2: Environment mapping in progress</div>
                          <div>- Agent 3: Decision tree optimization running</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex mt-1.5">
                      <span className="text-neon-green mr-1.5">root@ello:~$</span>
                      <span className="text-accent-primary">_</span>
                    </div>
                  </div>
                </div>
                
                {/* Matrix-like background effect */}
                <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden" 
                     style={{
                       backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='10' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='0' y='10' font-family='monospace' font-size='10' fill='%2300ff66'%3E0%3C/text%3E%3C/svg%3E")`,
                       backgroundSize: '20px 20px',
                       animation: 'dataStream 30s linear infinite'
                     }}>
                </div>
              </div>
            </div>
            
            {/* Floating data points */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(5)].map((_, i) => (
                <div 
                  key={i} 
                  className="absolute rounded-full"
                  style={{
                    width: '4px',
                    height: '4px',
                    background: i % 3 === 0 ? '#00f2ff' : i % 3 === 1 ? '#9900ff' : '#00ff66',
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    opacity: 0.6,
                    filter: `blur(1px) drop-shadow(0 0 2px ${i % 3 === 0 ? '#00f2ff' : i % 3 === 1 ? '#9900ff' : '#00ff66'})`,
                    animation: `float ${Math.random() * 15 + 5}s ease-in-out infinite`,
                    animationDelay: `-${Math.random() * 5}s`,
                    willChange: 'transform'
                  }}
                />
              ))}
            </div>
          </section>

          {/* Products Section */}
          <section id="products" aria-label="Products" className="py-24 sm:py-32 relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-dark-800"></div>
            
            {/* Advanced background effect */}
            <div className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `radial-gradient(circle at 30% 50%, rgba(0, 242, 255, 0.05), rgba(0, 0, 0, 0) 30%),
                                radial-gradient(circle at 70% 30%, rgba(153, 0, 255, 0.05), rgba(0, 0, 0, 0) 30%),
                                radial-gradient(circle at 50% 80%, rgba(0, 255, 102, 0.05), rgba(0, 0, 0, 0) 40%)`,
              }}
            ></div>
            
            {/* Flowing data streams */}
            <div className="absolute inset-0 opacity-10 grid grid-cols-12 h-full overflow-hidden">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="relative h-full col-span-1">
                  <div 
                    className="absolute top-0 w-px h-full bg-gradient-to-b from-transparent via-accent-primary/10 to-transparent"
                    style={{
                      left: '50%',
                      transform: 'translateX(-50%)',
                    }}
                  ></div>
                  <div
                    className="absolute w-px bg-neon-green opacity-20 animate-scan"
                    style={{
                      height: '50vh',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      animationDelay: `${i * 0.2}s`,
                      animationDuration: '15s',
                    }}
                  ></div>
                </div>
              ))}
            </div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
              <div className="mb-16 sm:mb-24 text-center relative">
                <div className="inline-flex items-center space-x-2 mb-4">
                  <div className="h-px w-8 bg-neon-green"></div>
                  <span className="text-xs tracking-[0.3em] uppercase text-neon-green">Current Focus</span>
                  <div className="h-px w-8 bg-neon-green"></div>
                </div>
                <h2 className="text-3xl sm:text-4xl tracking-[0.2em] text-gradient-blue relative typewriter-large overflow-hidden">What We're Building</h2>
                <p className="mt-4 max-w-2xl mx-auto text-accent-primary text-sm leading-relaxed tracking-wider">
                  Our team is currently focused on developing cutting-edge AI systems that push the boundaries of what's possible.
                </p>
              </div>
              
              {/* 3D Model Showcase Section */}
              <div className="relative h-[350px] sm:h-[400px] md:h-[500px] mb-12 sm:mb-24" ref={splineContainerRef}>
                {/* Main focal point with Spline 3D model */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Model container */}
                  <div className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[600px] h-full max-h-[300px] sm:max-h-[350px] md:max-h-[500px] relative">
                    <div className="absolute inset-0 rounded-full bg-gradient-radial from-neon-green/10 via-transparent to-transparent animate-pulse opacity-60"></div>
                    
                    {/* Loading state for Spline model */}
                    {!splineLoaded && (
                      <div className="absolute inset-0 flex items-center justify-center z-10">
                        <div className="text-center">
                          <div className="w-12 h-12 sm:w-16 sm:h-16 border-2 border-t-neon-green border-r-neon-green border-b-neon-green border-l-transparent rounded-full animate-spin mb-3 sm:mb-4"></div>
                          <p className="text-accent-primary text-xs sm:text-sm">Loading 3D Model...</p>
                        </div>
                      </div>
                    )}
                    
                    {/* Spline 3D model - only render when visible to improve performance */}
                    <div className="relative w-full h-full">
                      {isSplineVisible && (
                        <Spline 
                          scene="https://prod.spline.design/20ua9AS-8jhyQtJP/scene.splinecode" 
                          onLoad={handleSplineLoad} 
                        />
                      )}
                      {/* Overlay to hide the Spline watermark */}
                      <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-16 bg-dark-800/90 backdrop-blur-md z-10"></div>
                    </div>
                    
                    {/* Title badge at top of model */}
                    <div className="absolute -top-4 sm:-top-6 left-1/2 -translate-x-1/2 bg-dark-800 px-3 sm:px-6 py-1 sm:py-2 rounded-full z-20 neon-border">
                      <span className="text-xs sm:text-sm tracking-wider text-neon-green">AI Intelligence Core</span>
                    </div>
                    
                    {/* Energy core effect behind the model */}
                    <div className="absolute inset-0 energy-core -z-10"></div>
                  </div>
                </div>
                
                {/* Subtle floating text labels around the model - only show on larger screens */}
                <div className="absolute inset-0 pointer-events-none hidden sm:block">
                  {isSplineVisible && ["Neural Networks", "Deep Learning", "Multi-Agent Systems", "AI Research", "Language Models"].map((term, i) => (
                    <div 
                      key={i} 
                      className="absolute text-xs tracking-wider text-neon-green/70 animate-float-slow"
                      style={{
                        top: `${20 + i * 15}%`,
                        left: `${(i % 2 === 0 ? 15 : 75) + Math.random() * 10}%`,
                        animationDelay: `${i * 0.5}s`,
                      }}
                    >
                      {term}
                    </div>
                  ))}
                </div>
                
                {/* Mobile-friendly technology tags - only shown on small screens */}
                <div className="sm:hidden mt-6 flex flex-wrap justify-center gap-2 absolute bottom-0 left-0 right-0">
                  {["Neural Networks", "Deep Learning", "AI Research"].map((term, i) => (
                    <div 
                      key={i}
                      className="px-2 py-1 bg-dark-700/60 text-xs rounded-full text-neon-green border border-neon-green/30"
                    >
                      {term}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Current Work Cards Section - Now separated from the 3D model */}
              <h3 className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-10 tracking-[0.1em] text-white text-center">Current Research Focus</h3>
              <div className="max-w-3xl mx-auto">
                {/* Single Expanded Multi-Agent Systems Card - Optimize for scroll stability */}
                <div className="research-card glass-effect p-5 sm:p-8 md:p-10 rounded-lg relative overflow-hidden will-change-auto transform-gpu">
                  {/* Simplified tech pattern background */}
                  <div className="tech-pattern opacity-30" style={{"--pattern-color": "rgba(0, 242, 255, 0.03)"} as React.CSSProperties}></div>
                  
                  {/* Enhanced top badge - Static positioning */}
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 text-[10px] sm:text-xs uppercase tracking-wider text-neon-green opacity-70">
                    COMPUTER VISION
                  </div>
                  
                  {/* Reduced data flow animation - Only show when not scrolling */}
                  <div className="data-flow opacity-30 hidden sm:block">
                    {[...Array(3)].map((_, i) => (
                      <div 
                        key={i}
                        className="data-particle" 
                        style={{
                          left: `${30 * i}%`,
                          opacity: 0.3,
                          animationDuration: '5s',
                          animationDelay: `${i}s`,
                          height: '10px',
                          "--particle-color": "rgba(0, 242, 255, 0.3)",
                        } as React.CSSProperties}
                      ></div>
                    ))}
                  </div>

                  <div className="flex items-center mb-5 sm:mb-8 relative z-10">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-dark-600 rounded-lg flex items-center justify-center relative">
                      <div className="absolute inset-0 bg-dark-600 rounded-lg opacity-40"></div>
                      <Brain className="w-6 h-6 sm:w-8 sm:h-8 text-neon-green relative z-10" />
                    </div>
                    <div className="ml-3 sm:ml-5">
                      <h3 className="text-xl sm:text-2xl font-light tracking-[0.1em] text-white">Multi-Agent Systems</h3>
                      <span className="text-xs sm:text-sm text-accent-primary tracking-wider">Primary Research</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 mb-5 sm:mb-6">
                    <div>
                      <p className="text-accent-primary text-sm sm:text-base leading-relaxed tracking-wider mb-4 sm:mb-6 relative z-10">
                        Creating frameworks for coordinating multiple AI agents that collaborate to solve complex problems through distributed intelligence.
                      </p>
                      
                      <div className="space-y-3 sm:space-y-4">
                        <h4 className="text-neon-green text-xs sm:text-sm uppercase tracking-wider">KEY COMPONENTS</h4>
                        <ul className="space-y-1.5 sm:space-y-2 text-accent-highlight text-xs sm:text-sm">
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-neon-green mt-1.5 mr-2"></div>
                            <span>Multi-agent coordination protocols</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-neon-green mt-1.5 mr-2"></div>
                            <span>Emergent behavior patterns</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-neon-green mt-1.5 mr-2"></div>
                            <span>Task decomposition algorithms</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-neon-green mt-1.5 mr-2"></div>
                            <span>Distributed consensus mechanisms</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="space-y-4 sm:space-y-5 mt-5 md:mt-0">
                      <div className="dark-glass-effect p-3 sm:p-4 rounded-lg transform-gpu">
                        <h4 className="text-neon-green text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3">RESEARCH PROGRESS</h4>
                        <div className="space-y-2 sm:space-y-3">
                          <div>
                            <div className="flex justify-between text-[10px] sm:text-xs mb-1">
                              <span className="text-accent-highlight">Agent Communication</span>
                              <span className="text-neon-green">85%</span>
                            </div>
                            <div className="h-1 sm:h-1.5 bg-dark-600 rounded-full overflow-hidden">
                              <div className="h-full bg-gradient-to-r from-neon-green to-neon-green rounded-full" style={{width: '85%'}}></div>
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between text-[10px] sm:text-xs mb-1">
                              <span className="text-accent-highlight">Task Allocation</span>
                              <span className="text-neon-green">72%</span>
                            </div>
                            <div className="h-1 sm:h-1.5 bg-dark-600 rounded-full overflow-hidden">
                              <div className="h-full bg-gradient-to-r from-neon-green to-neon-green rounded-full" style={{width: '72%'}}></div>
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between text-[10px] sm:text-xs mb-1">
                              <span className="text-accent-highlight">Conflict Resolution</span>
                              <span className="text-neon-green">63%</span>
                            </div>
                            <div className="h-1 sm:h-1.5 bg-dark-600 rounded-full overflow-hidden">
                              <div className="h-full bg-gradient-to-r from-neon-green to-neon-green rounded-full" style={{width: '63%'}}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="dark-glass-effect p-3 sm:p-4 rounded-lg transform-gpu">
                        <h4 className="text-neon-green text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3">APPLICATION AREAS</h4>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-dark-600/60 text-[10px] sm:text-xs rounded-full text-accent-highlight">Swarm Intelligence</span>
                          <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-dark-600/60 text-[10px] sm:text-xs rounded-full text-accent-highlight">Autonomous Systems</span>
                          <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-dark-600/60 text-[10px] sm:text-xs rounded-full text-accent-highlight">LLM Orchestration</span>
                          <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-dark-600/60 text-[10px] sm:text-xs rounded-full text-accent-highlight">Distributed Computing</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-[10px] sm:text-xs pt-3 sm:pt-4 relative z-10 mt-3 sm:mt-4 border-t border-accent-primary/10">
                    <span className="text-accent-highlight mb-2 sm:mb-0">Development Stage:</span>
                    <span className="bg-dark-700 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-neon-green border border-neon-green/30 flex items-center w-fit">
                      <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-neon-green mr-1.5 sm:mr-2"></div>
                      Active Research
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Research Direction */}
            <div className="mt-16 sm:mt-24 text-center">
              <a 
                href="#research" 
                className="cyber-button px-4 sm:px-6 py-2.5 sm:py-3 rounded-md hover:bg-dark-700 transition-all duration-300 text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] border border-neon-green/30 inline-flex items-center justify-center space-x-2 sm:space-x-3"
              >
                <span>Explore Our Research</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </section>

          {/* Research Section - Complete Redesign */}
          <section id="research" aria-label="Research Areas" className="py-24 sm:py-32 relative overflow-hidden">
            {/* Dynamic background elements */}
            <div className="absolute inset-0 bg-dark-800"></div>
            <div className="absolute inset-0 bg-gradient-radial from-dark-700/20 via-dark-800 to-dark-900"></div>
            
            {/* Grid lines with pulse effect */}
            <div className="absolute inset-0 cyber-grid opacity-10"></div>
            
            {/* Animated neon accent lines */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-green to-transparent opacity-70"></div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-green to-transparent opacity-70"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
              {/* Section header with enhanced design */}
              <div className="mb-20 text-center relative">
                <div className="inline-flex items-center space-x-4 mb-6">
                  <div className="h-px w-12 bg-gradient-to-r from-transparent via-neon-green to-transparent"></div>
                  <div className="px-4 py-2 bg-dark-700/50 backdrop-blur-sm rounded-full border border-neon-green/30">
                    <span className="text-xs tracking-[0.3em] uppercase text-neon-green font-light">Research & Development</span>
                  </div>
                  <div className="h-px w-12 bg-gradient-to-r from-transparent via-neon-green to-transparent"></div>
                </div>
                
                <h2 className="text-4xl sm:text-5xl md:text-6xl tracking-[0.2em] text-white font-light relative overflow-hidden mb-8">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-green via-neon-green/80 to-neon-green/70">
                    Active Research
                  </span>
                </h2>
                
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-neon-green to-transparent mx-auto mb-8"></div>
                
                <p className="max-w-2xl mx-auto text-accent-primary text-sm md:text-base leading-relaxed tracking-wider">
                  Our cutting-edge research initiatives focused on advancing the boundaries of artificial intelligence and machine learning.
                </p>
              </div>
              
              {/* Research cards with premium design */}
              <div className="grid md:grid-cols-3 gap-10">
                {/* Research Topic 1 */}
                <div className="research-card group relative">
                  {/* Card background with layered effects */}
                  <div className="absolute inset-0 bg-dark-700/60 backdrop-blur-md rounded-xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-dark-700/80 to-dark-900/90 rounded-xl"></div>
                  <div className="absolute inset-0 border border-neon-green/10 rounded-xl overflow-hidden">
                    {/* Animated borders that light up on hover */}
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon-green to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1500"></div>
                    <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-neon-green to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1500 delay-300"></div>
                    <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-neon-green to-transparent translate-x-[100%] group-hover:translate-x-[-100%] transition-transform duration-1500 delay-600"></div>
                    <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-neon-green to-transparent translate-y-[100%] group-hover:translate-y-[-100%] transition-transform duration-1500 delay-900"></div>
                  </div>
                  
                  {/* Card content */}
                  <div className="relative p-8 h-full flex flex-col">
                    {/* Icon container */}
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-dark-600 to-dark-800 flex items-center justify-center mb-6 relative group-hover:scale-110 transition-all duration-500">
                      <div className="absolute inset-0 rounded-lg bg-neon-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <BrainCircuit className="w-8 h-8 text-neon-green" />
                    </div>
                    
                    {/* Technology badge */}
                    <div className="absolute top-8 right-8">
                      <div className="px-2 py-1 bg-dark-800/70 rounded-full border border-neon-green/20 text-xs text-neon-green/80">
                        Neural Networks
                      </div>
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-2xl font-light tracking-wide mb-4 text-white group-hover:text-neon-green transition-colors duration-300">
                      Multi-Agent Systems
                    </h3>
                    
                    <p className="text-accent-primary text-sm leading-relaxed tracking-wider mb-6 group-hover:text-accent-highlight transition-colors duration-300">
                      Developing frameworks for coordinating multiple AI agents that collaborate to solve complex problems through distributed intelligence and emergent behavior patterns.
                    </p>
                    
                    {/* Status indicator */}
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-neon-green animate-pulse"></div>
                        <span className="text-xs text-accent-highlight">Active Research</span>
                      </div>
                      
                      <div className="w-8 h-8 rounded-full bg-dark-800/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-4 group-hover:translate-x-0">
                        <ArrowRight className="w-4 h-4 text-neon-green" />
                      </div>
                    </div>
                    
                    {/* Tech pattern background that only appears on hover */}
                    <div className="absolute inset-0 rounded-xl overflow-hidden opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
                      <div className="absolute inset-0 tech-pattern" style={{"--pattern-color": "rgba(0, 255, 102, 0.2)"} as React.CSSProperties}></div>
                    </div>
                    
                    {/* Particles animation */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden rounded-xl pointer-events-none">
                      {[...Array(20)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-1 h-1 rounded-full bg-neon-green/50"
                          style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            opacity: Math.random() * 0.5 + 0.2,
                            transform: 'scale(0)',
                            animation: `pulse ${Math.random() * 2 + 1}s ease-in-out infinite ${Math.random() * 2}s`
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Research Topic 2 */}
                <div className="research-card group relative">
                  {/* Card background with layered effects */}
                  <div className="absolute inset-0 bg-dark-700/60 backdrop-blur-md rounded-xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-dark-700/80 to-dark-900/90 rounded-xl"></div>
                  <div className="absolute inset-0 border border-neon-green/10 rounded-xl overflow-hidden">
                    {/* Animated borders that light up on hover */}
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon-green to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1500"></div>
                    <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-neon-green to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1500 delay-300"></div>
                    <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-neon-green to-transparent translate-x-[100%] group-hover:translate-x-[-100%] transition-transform duration-1500 delay-600"></div>
                    <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-neon-green to-transparent translate-y-[100%] group-hover:translate-y-[-100%] transition-transform duration-1500 delay-900"></div>
                  </div>
                  
                  {/* Card content */}
                  <div className="relative p-8 h-full flex flex-col">
                    {/* Icon container */}
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-dark-600 to-dark-800 flex items-center justify-center mb-6 relative group-hover:scale-110 transition-all duration-500">
                      <div className="absolute inset-0 rounded-lg bg-neon-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <Mic className="w-8 h-8 text-neon-green" />
                    </div>
                    
                    {/* Technology badge */}
                    <div className="absolute top-8 right-8">
                      <div className="px-2 py-1 bg-dark-800/70 rounded-full border border-neon-green/20 text-xs text-neon-green/80">
                        Deep Learning
                      </div>
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-2xl font-light tracking-wide mb-4 text-white group-hover:text-neon-green transition-colors duration-300">
                      Voice Synthesis
                    </h3>
                    
                    <p className="text-accent-primary text-sm leading-relaxed tracking-wider mb-6 group-hover:text-accent-highlight transition-colors duration-300">
                      Pioneering advanced voice synthesis techniques that produce natural-sounding speech with customizable emotional tones and accents for human-like interaction.
                    </p>
                    
                    {/* Status indicator */}
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-neon-green animate-pulse"></div>
                        <span className="text-xs text-accent-highlight">Application</span>
                      </div>
                      
                      <div className="w-8 h-8 rounded-full bg-dark-800/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-4 group-hover:translate-x-0">
                        <ArrowRight className="w-4 h-4 text-neon-green" />
                      </div>
                    </div>
                    
                    {/* Tech pattern background that only appears on hover */}
                    <div className="absolute inset-0 rounded-xl overflow-hidden opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
                      <div className="absolute inset-0 tech-pattern" style={{"--pattern-color": "rgba(0, 242, 255, 0.2)"} as React.CSSProperties}></div>
                    </div>
                    
                    {/* Particles animation */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden rounded-xl pointer-events-none">
                      {[...Array(20)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-1 h-1 rounded-full bg-neon-green/50"
                          style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            opacity: Math.random() * 0.5 + 0.2,
                            transform: 'scale(0)',
                            animation: `pulse ${Math.random() * 2 + 1}s ease-in-out infinite ${Math.random() * 2}s`
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Research Topic 3 */}
                <div className="research-card group relative">
                  {/* Card background with layered effects */}
                  <div className="absolute inset-0 bg-dark-700/60 backdrop-blur-md rounded-xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-dark-700/80 to-dark-900/90 rounded-xl"></div>
                  <div className="absolute inset-0 border border-neon-green/10 rounded-xl overflow-hidden">
                    {/* Animated borders that light up on hover */}
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon-green to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1500"></div>
                    <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-neon-green to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1500 delay-300"></div>
                    <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-neon-green to-transparent translate-x-[100%] group-hover:translate-x-[-100%] transition-transform duration-1500 delay-600"></div>
                    <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-neon-green to-transparent translate-y-[100%] group-hover:translate-y-[-100%] transition-transform duration-1500 delay-900"></div>
                  </div>
                  
                  {/* Card content */}
                  <div className="relative p-8 h-full flex flex-col">
                    {/* Icon container */}
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-dark-600 to-dark-800 flex items-center justify-center mb-6 relative group-hover:scale-110 transition-all duration-500">
                      <div className="absolute inset-0 rounded-lg bg-neon-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <Code className="w-8 h-8 text-neon-green" />
                    </div>
                    
                    {/* Technology badge */}
                    <div className="absolute top-8 right-8">
                      <div className="px-2 py-1 bg-dark-800/70 rounded-full border border-neon-green/20 text-xs text-neon-green/80">
                        Machine Learning
                      </div>
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-2xl font-light tracking-wide mb-4 text-white group-hover:text-neon-green transition-colors duration-300">
                      Code Intelligence
                    </h3>
                    
                    <p className="text-accent-primary text-sm leading-relaxed tracking-wider mb-6 group-hover:text-accent-highlight transition-colors duration-300">
                      Building systems that can parse, analyze, and understand code at a deeper level to enable more sophisticated technical assessments.
                    </p>
                    
                    {/* Status indicator */}
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-neon-green animate-pulse"></div>
                        <span className="text-xs text-accent-highlight">Integration</span>
                      </div>
                      
                      <div className="w-8 h-8 rounded-full bg-dark-800/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-4 group-hover:translate-x-0">
                        <ArrowRight className="w-4 h-4 text-neon-green" />
                      </div>
                    </div>
                    
                    {/* Tech pattern background that only appears on hover */}
                    <div className="absolute inset-0 rounded-xl overflow-hidden opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
                      <div className="absolute inset-0 tech-pattern" style={{"--pattern-color": "rgba(153, 0, 255, 0.2)"} as React.CSSProperties}></div>
                    </div>
                    
                    {/* Particles animation */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden rounded-xl pointer-events-none">
                      {[...Array(20)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-1 h-1 rounded-full bg-neon-green/50"
                          style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            opacity: Math.random() * 0.5 + 0.2,
                            transform: 'scale(0)',
                            animation: `pulse ${Math.random() * 2 + 1}s ease-in-out infinite ${Math.random() * 2}s`
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Research Methodology - Redesigned */}
              <div className="mt-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-dark-700/50 backdrop-blur-sm rounded-2xl"></div>
                <div className="absolute inset-0 border border-neon-green/10 rounded-2xl"></div>
                
                <div className="relative p-10">
                  <h3 className="text-3xl font-light tracking-wide mb-12 text-white text-center">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-green to-neon-green">
                      Research Methodology
                    </span>
                  </h3>
                  
                  <div className="grid md:grid-cols-4 gap-8">
                    {[
                      {
                        number: "01",
                        title: "Exploration",
                        description: "Identifying promising technologies and potential research directions",
                        delay: "0ms"
                      },
                      {
                        number: "02",
                        title: "Prototyping",
                        description: "Building proof-of-concepts and experimental models for validation",
                        delay: "200ms"
                      },
                      {
                        number: "03", 
                        title: "Validation",
                        description: "Rigorous testing against complex real-world scenarios",
                        delay: "400ms"
                      },
                      {
                        number: "04",
                        title: "Integration",
                        description: "Implementation into Mockello's product ecosystem",
                        delay: "600ms"
                      }
                    ].map((step, index) => (
                      <div key={index} className="group relative" style={{animationDelay: step.delay}}>
                        <div className="w-20 h-20 mx-auto bg-dark-600 rounded-xl flex items-center justify-center relative mb-6 group-hover:scale-110 transition-all duration-500">
                          <span className="text-3xl font-light text-neon-green">{step.number}</span>
                          
                          {/* Pulse ring */}
                          <div className="absolute inset-0 rounded-xl border border-neon-green/20 scale-[1.1] opacity-0 group-hover:opacity-100 group-hover:scale-[1.3] transition-all duration-700"></div>
                        </div>
                        
                        <h4 className="text-white text-lg font-light mb-3 text-center group-hover:text-neon-green transition-colors duration-300">{step.title}</h4>
                        <p className="text-accent-primary text-sm leading-relaxed text-center group-hover:text-accent-highlight transition-colors duration-300">{step.description}</p>
                        
                        {/* Connect lines */}
                        {index < 3 && (
                          <div className="hidden md:block absolute top-10 left-full w-full h-px bg-gradient-to-r from-neon-green/30 to-transparent -translate-x-1/2 z-0"></div>
                        )}
                      </div>
                    ))}
                  </div>
                  
                  {/* Technology keywords */}
                  <div className="mt-16 flex flex-wrap justify-center gap-4">
                    {[
                      { text: "Natural Language Processing", color: "border-neon-green text-neon-green" },
                      { text: "Computer Vision", color: "border-neon-green text-neon-green" },
                      { text: "Reinforcement Learning", color: "border-neon-green text-neon-green" },
                      { text: "Neural Networks", color: "border-neon-green text-neon-green" },
                      { text: "Knowledge Graphs", color: "border-neon-green text-neon-green" }
                    ].map((keyword, i) => (
                      <div 
                        key={i}
                        className={`px-4 py-2 rounded-full bg-dark-800/70 border ${keyword.color} text-xs tracking-wider hover:bg-dark-700/80 transition-colors duration-300 cursor-pointer`}
                      >
                        {keyword.text}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section aria-label="Call to Action" className="py-16 sm:py-24 relative">
            <div className="absolute inset-0 cyber-grid opacity-20"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-dark-800 via-dark-900 to-dark-800"></div>
            
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
              <div className="dark-glass-effect p-8 sm:p-12 rounded-lg border border-accent-primary/20 relative overflow-hidden">
                {/* Background effects */}
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-neon-green/5 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-neon-green/5 rounded-full blur-3xl"></div>
                
                <div className="relative z-10">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-wider mb-4 text-white">Join Our Research Team</h2>
                  <p className="text-accent-highlight mb-8 max-w-2xl">
                    We're always looking for talented researchers and engineers to help us push the boundaries of what's possible.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                    <a 
                      href="https://forms.gle/UyG76PtGrjRFnWnYA" 
                      className="cyber-button px-8 py-4 rounded-md hover:bg-dark-500/30 transition-all duration-300 text-sm tracking-[0.2em] border border-neon-green/30 flex items-center justify-center space-x-3 neon-glow"
                    >
                      <span>Apply for Internship</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    
                    <a 
                      href="mailto:contact@ello.one" 
                      className="px-8 py-4 rounded-md dark-glass-effect transition-all duration-300 text-sm tracking-[0.2em] text-accent-primary hover:text-white text-center border border-accent-primary/10 hover:border-accent-primary/30"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* About Us Section */}
          <section id="about" aria-label="About Us" className="py-24 sm:py-32 relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-dark-900"></div>
            <div className="absolute inset-0 cyber-grid opacity-10"></div>
            
            {/* Dynamic glow effects */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-neon-green/3 blur-[120px] -z-0"></div>
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-neon-green/3 blur-[100px] -z-0"></div>
            
            {/* Animated accent lines */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-green/30 to-transparent"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
              {/* Section Header */}
              <div className="mb-16 sm:mb-24">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-[0.2em] text-white mb-6 text-center">
                  <span className="relative inline-block">
                    <span className="relative text-gradient-neon">Our Vision</span>
                    <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-green to-transparent transform"></span>
                  </span>
                </h2>
              </div>
              
              {/* Main Content */}
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
                {/* Vision Statement */}
                <div className="lg:col-span-3 order-2 lg:order-1">
                  <div className="dark-glass-effect p-8 sm:p-10 rounded-xl border border-neon-green/10 h-full relative overflow-hidden group">
                    {/* Animated border effect */}
                    <div className="absolute inset-0 overflow-hidden">
                      <div className="absolute -inset-1 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon-green to-transparent animate-[border-flow_4s_ease-in-out_infinite]"></div>
                        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-neon-green to-transparent animate-[border-flow_4s_ease-in-out_infinite]"></div>
                        <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-neon-green to-transparent animate-[border-flow-vertical_4s_ease-in-out_infinite]"></div>
                        <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-neon-green to-transparent animate-[border-flow-vertical_4s_ease-in-out_infinite]"></div>
                      </div>
                    </div>
                  
                    <p className="text-accent-primary text-sm sm:text-base lg:text-lg leading-relaxed mb-6 tracking-wide relative z-10">
                      At ello.one, we're dedicated to pushing the boundaries of technology through 
                      our comprehensive approach to innovation. Our mission spans artificial 
                      intelligence, machine learning, robotics, and cutting-edge software 
                      development, creating solutions that bridge the gap between human potential 
                      and technological advancement.
                    </p>
                    
                    <h3 className="text-2xl font-light tracking-wider text-white mb-4 mt-10 relative inline-block">
                      Product Development
                      <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-neon-green/50 to-transparent"></span>
                    </h3>
                    
                    <div className="relative">
                      <div className="dark-glass-effect p-6 rounded-lg border border-accent-primary/10 mb-6">
                        <p className="text-accent-primary leading-relaxed">
                          All our products are conceptualized, developed, and incubated within 
                          ello.one before being launched as independent platforms. This 
                          approach ensures:
                        </p>
                        
                        <ul className="mt-4 space-y-3">
                          <li className="flex items-start text-accent-highlight">
                            <div className="w-2 h-2 rounded-full bg-neon-green mt-1.5 mr-3 flex-shrink-0"></div>
                            <span>Focused development and specialized teams</span>
                          </li>
                          <li className="flex items-start text-accent-highlight">
                            <div className="w-2 h-2 rounded-full bg-neon-green mt-1.5 mr-3 flex-shrink-0"></div>
                            <span>Independent growth and scalability</span>
                          </li>
                          <li className="flex items-start text-accent-highlight">
                            <div className="w-2 h-2 rounded-full bg-neon-green mt-1.5 mr-3 flex-shrink-0"></div>
                            <span>Tailored market strategies for each product</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Core Focus Areas */}
                <div className="lg:col-span-2 order-1 lg:order-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                  {/* AI & ML */}
                  <div className="dark-glass-effect p-6 rounded-xl border border-neon-green/10 relative overflow-hidden group hover:border-neon-green/30 transition-colors duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-neon-green/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-lg bg-dark-700 flex items-center justify-center mr-3 border border-neon-green/20">
                        <BrainCircuit className="w-5 h-5 text-neon-green" />
                      </div>
                      <h3 className="text-xl font-light tracking-wider text-white">AI & ML</h3>
                    </div>
                    
                    <p className="text-accent-primary text-sm">Advanced neural networks and intelligent systems</p>
                  </div>
                  
                  {/* Robotics */}
                  <div className="dark-glass-effect p-6 rounded-xl border border-neon-green/10 relative overflow-hidden group hover:border-neon-green/30 transition-colors duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-neon-green/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-lg bg-dark-700 flex items-center justify-center mr-3 border border-neon-green/20">
                        <Bot className="w-5 h-5 text-neon-green" />
                      </div>
                      <h3 className="text-xl font-light tracking-wider text-white">Robotics</h3>
                    </div>
                    
                    <p className="text-accent-primary text-sm">Next-gen automation and robotic solutions</p>
                  </div>
                  
                  {/* Software Dev */}
                  <div className="dark-glass-effect p-6 rounded-xl border border-neon-green/10 relative overflow-hidden group hover:border-neon-green/30 transition-colors duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-neon-green/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-lg bg-dark-700 flex items-center justify-center mr-3 border border-neon-green/20">
                        <Code className="w-5 h-5 text-neon-green" />
                      </div>
                      <h3 className="text-xl font-light tracking-wider text-white">Software Dev</h3>
                    </div>
                    
                    <p className="text-accent-primary text-sm">Scalable and innovative applications</p>
                  </div>
                  
                  {/* Research */}
                  <div className="dark-glass-effect p-6 rounded-xl border border-neon-green/10 relative overflow-hidden group hover:border-neon-green/30 transition-colors duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-neon-green/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-lg bg-dark-700 flex items-center justify-center mr-3 border border-neon-green/20">
                        <Microscope className="w-5 h-5 text-neon-green" />
                      </div>
                      <h3 className="text-xl font-light tracking-wider text-white">Research</h3>
                    </div>
                    
                    <p className="text-accent-primary text-sm">Pioneering technological breakthroughs</p>
                  </div>
                </div>
              </div>
              
              {/* Bottom Decoration */}
              <div className="mt-16 opacity-20">
                <div className="h-px max-w-3xl mx-auto bg-gradient-to-r from-transparent via-neon-green to-transparent"></div>
              </div>
            </div>
          </section>

        </main>

        {/* Footer */}
        <footer className="py-12 bg-dark-800 relative overflow-hidden">
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="flex flex-col md:flex-row justify-between items-center mb-10 pb-8 border-b border-accent-primary/10">
              <div className="flex items-center mb-6 md:mb-0">
                <img src="/logo.svg" alt="ello.one" className="h-8 w-8 mr-3 filter drop-shadow(0 0 8px rgba(0, 255, 102, 0.5))" />
                <span className="text-xl tracking-[0.5em] text-gradient">ello.one</span>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center sm:space-x-8">
                <a href="#about" className="text-accent-primary hover:text-white transition-colors duration-300 text-sm tracking-[0.2em] mb-4 sm:mb-0">About</a>
                <a href="#products" className="text-accent-primary hover:text-white transition-colors duration-300 text-sm tracking-[0.2em] mb-4 sm:mb-0">Products</a>
                <a href="#research" className="text-accent-primary hover:text-white transition-colors duration-300 text-sm tracking-[0.2em] mb-4 sm:mb-0">Research</a>
                <Link to="/founders" className="text-accent-primary hover:text-white transition-colors duration-300 text-sm tracking-[0.2em]">Founders</Link>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between">
              <div className="mb-6 md:mb-0">
                <p className="text-accent-primary text-sm">© {new Date().getFullYear()} ello.one. All rights reserved.</p>
                <p className="text-accent-secondary text-xs mt-2">R&D Division of Mockello</p>
              </div>
              
              
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
