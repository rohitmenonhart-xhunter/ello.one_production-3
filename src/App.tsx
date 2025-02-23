import { useState } from 'react';
import { ArrowRight, Braces, Cpu, Database, Menu, X, FlaskConical, GithubIcon, Plus } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>ello.one - Leading AI Technology Solutions & Research</title>
        <meta name="description" content="Pioneer the future with ello.one's innovative AI solutions. Explore mockello, voicello, and agentello - our cutting-edge products revolutionizing technology." />
      </Helmet>
      
      <div className="min-h-screen bg-black text-white overflow-hidden">
        {/* Navigation */}
        <header>
          <nav aria-label="Main navigation" className="fixed w-full bg-black/30 backdrop-blur-xl z-50 border-b border-[#939090]/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                <div className="flex items-center">
                  <img src="/logo.svg" alt="ello.one" className="h-8 w-8 mr-3" />
                  <span className="text-xl tracking-[0.5em] text-gradient">ello.one</span>
                </div>
                <div className="hidden md:flex items-center space-x-8">
                  <a href="#about" className="text-[#939090] hover:text-white transition-colors duration-300 text-sm tracking-[0.2em]">About</a>
                  <a href="#products" className="text-[#939090] hover:text-white transition-colors duration-300 text-sm tracking-[0.2em]">Products</a>
                  <a href="#research" className="text-[#939090] hover:text-white transition-colors duration-300 text-sm tracking-[0.2em]">Research</a>
                  <Link 
                    to="/founders" 
                    className="text-[#939090] hover:text-white transition-colors duration-300 text-sm tracking-[0.2em]"
                  >
                    Founders
                  </Link>
                  <a 
                    href="tel:7550000805"
                    className="bg-[#939090]/10 text-white px-6 py-2 rounded-full hover:bg-[#939090]/20 transition-all duration-300 text-sm tracking-[0.2em] border border-[#939090]/20 hover:border-[#939090]/30 hover-glow"
                  >
                    Contact
                  </a>
                </div>
                <button 
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="md:hidden p-2 text-[#939090] hover:text-white transition-colors duration-300"
                >
                  {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
            {/* Mobile Menu */}
            <div className={`md:hidden absolute w-full bg-black/95 backdrop-blur-xl transition-all duration-300 border-b border-[#939090]/10 ${mobileMenuOpen ? 'max-h-64 py-4' : 'max-h-0 overflow-hidden'}`}>
              <div className="px-4 space-y-4">
                <a href="#about" className="block text-[#939090] hover:text-white transition-colors duration-300 text-sm tracking-[0.2em] py-2">About</a>
                <a href="#products" className="block text-[#939090] hover:text-white transition-colors duration-300 text-sm tracking-[0.2em] py-2">Products</a>
                <a href="#research" className="block text-[#939090] hover:text-white transition-colors duration-300 text-sm tracking-[0.2em] py-2">Research</a>
                <Link 
                  to="/founders"
                  className="block text-[#939090] hover:text-white transition-colors duration-300 text-sm tracking-[0.2em] py-2"
                >
                  Founders
                </Link>
                <a 
                  href="tel:7550000805"
                  className="block w-full bg-[#939090]/10 text-white px-6 py-2 rounded-full hover:bg-[#939090]/20 transition-all duration-300 text-sm tracking-[0.2em] border border-[#939090]/20 hover:border-[#939090]/30 text-center"
                >
                  Contact
                </a>
              </div>
            </div>
          </nav>
        </header>

        <main>
          {/* Hero Section */}
          <section id="hero" aria-label="Hero section" className="relative min-h-screen grid-pattern">
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="beam" style={{ 
                  animationDelay: `${i * 1.2}s`,
                  left: `${i * 8.33}%`
                }} />
              ))}
              <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black/90"></div>
            </div>
            
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
              <div className="max-w-3xl">
                <div className="mb-8 relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#939090]/20 to-transparent blur"></div>
                  <h1 className="relative text-4xl sm:text-5xl md:text-7xl tracking-[0.2em] text-gradient leading-tight">
                    ello.one
                  </h1>
                </div>
                
                {/* Partner Section */}
                <div className="flex items-center space-x-4 mb-8">
                  <span className="text-[#939090] text-sm tracking-[0.2em]">Our Partner</span>
                  <img 
                    src="https://cdn.jsdelivr.net/gh/rohitmenonhart-xhunter/ello.one_production-3@465f98905e43081100df2b7eebc2866f624e42d3/public/stacia.png" 
                    alt="Stacia" 
                    className="h-8 sm:h-10 opacity-90 hover:opacity-100 transition-all duration-300 rounded-lg hover:scale-105 transform"
                  />
                </div>

                <p className="text-lg sm:text-xl text-[#939090] mb-12 font-light tracking-wider leading-relaxed">
                  Pioneering the future through advanced research and innovative solutions.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                  <div className="relative group">
                    <a 
                      href="https://forms.gle/UyG76PtGrjRFnWnYA" 
                      className="group bg-[#939090]/10 text-white px-8 py-3 rounded-full hover:bg-[#939090]/20 transition-all duration-300 text-sm tracking-[0.2em] border border-[#939090]/20 hover:border-[#939090]/30 hover-glow flex items-center justify-center sm:justify-start space-x-3"
                    >
                      <span>Apply for internship</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                    
                    {/* Floating Chat Bubble */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-80 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-95 group-hover:scale-100 z-50">
                      <div className="bg-black/95 backdrop-blur-xl p-6 rounded-2xl relative border border-[#939090]/20">
                        <h4 className="text-white text-sm font-medium mb-4 tracking-wider">Available Roles</h4>
                        <div className="text-sm text-[#939090] tracking-wider space-y-6">
                          {/* Technical Roles */}
                          <div className="space-y-3">
                            <h5 className="text-[#939090] text-xs uppercase tracking-wider mb-2">Technical</h5>
                            <div className="flex items-center space-x-2 hover:text-white transition-colors duration-300 cursor-pointer">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#939090]/50"></div>
                              <span>Software Development Intern</span>
                            </div>
                            <div className="flex items-center space-x-2 hover:text-white transition-colors duration-300 cursor-pointer">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#939090]/50"></div>
                              <span>Research Intern (AI, ML)</span>
                            </div>
                          </div>

                          {/* Business Roles */}
                          <div className="space-y-3">
                            <h5 className="text-[#939090] text-xs uppercase tracking-wider mb-2">Business</h5>
                            <div className="flex items-center space-x-2 hover:text-white transition-colors duration-300 cursor-pointer">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#939090]/50"></div>
                              <span>Digital Marketing & Sales</span>
                            </div>
                          </div>
                        </div>
                        {/* Chat Bubble Triangle */}
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
                          <div className="w-4 h-4 bg-black/95 border-r border-b border-[#939090]/20 rotate-45"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a 
                    href="#about" 
                    className="px-8 py-3 rounded-full hover:bg-[#939090]/10 transition-all duration-300 text-sm tracking-[0.2em] text-[#939090] hover:text-white text-center"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Products Section */}
          <section id="products" aria-label="Our Products" className="py-24 sm:py-32 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl sm:text-3xl tracking-[0.2em] mb-16 sm:mb-24 text-center text-gradient">Product Timeline</h2>
              
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#939090]/5 via-[#939090]/20 to-[#939090]/5"></div>

                {/* Mockello - Launched */}
                <div className="relative grid md:grid-cols-2 gap-8 mb-24">
                  <div className="md:text-right md:pr-12">
                    <div className="group glass-effect p-6 sm:p-8 rounded-2xl hover:bg-[#939090]/5 transition-all duration-500 floating hover-glow relative">
                      {/* Version Badge - Shows on hover */}
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <span className="bg-[#939090]/20 px-3 py-1 rounded-full text-xs tracking-wider text-white">v0.3</span>
                      </div>
                      
                      <div className="flex items-center md:justify-end mb-4 space-x-4">
                        <div className="w-12 h-12 bg-[#939090]/10 rounded-xl flex items-center justify-center">
                          <Braces className="w-6 h-6" />
                        </div>
                        <span className="bg-[#939090]/10 px-3 py-1 rounded-full text-xs tracking-wider text-white">Current</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-extralight tracking-[0.1em] mb-4">mockello</h3>
                      <p className="text-[#939090] text-sm leading-relaxed tracking-wider mb-4">
                        Pre-interview candidate evaluation platform revolutionizing the hiring process.
                      </p>
                      
                      {/* Recent Updates - Shows on hover */}
                      <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-300 mb-6">
                        <div className="border-t border-[#939090]/10 my-4"></div>
                        <h4 className="text-sm font-medium text-white mb-3">Recent Updates:</h4>
                        <ul className="space-y-2 text-sm text-[#939090]">
                          <li className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#939090]/30 mt-1.5"></div>
                            <span>Vision activities added</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#939090]/30 mt-1.5"></div>
                            <span>More versatile model integration</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#939090]/30 mt-1.5"></div>
                            <span>Advanced ASR model implementation</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <a 
                          href="https://mockello.com" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="inline-flex items-center space-x-2 text-sm text-white hover:text-[#939090] transition-colors duration-300"
                        >
                          <span>Visit mockello.com</span>
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block"></div>
                  {/* Timeline Node */}
                  <div className="absolute left-[-5px] md:left-1/2 md:-ml-[5px] top-[45%] w-[10px] h-[10px] rounded-full bg-white shadow-[0_0_20px_rgba(147,144,144,0.5)]"></div>
                </div>

                {/* Voicello - Coming Soon */}
                <div className="relative grid md:grid-cols-2 gap-8 mb-24">
                  <div className="hidden md:block"></div>
                  <div className="md:pl-12">
                    <div className="glass-effect p-6 sm:p-8 rounded-2xl hover:bg-[#939090]/5 transition-all duration-500 floating hover-glow opacity-80">
                      <div className="flex items-center mb-4 space-x-4">
                        <div className="w-12 h-12 bg-[#939090]/10 rounded-xl flex items-center justify-center">
                          <Cpu className="w-6 h-6" />
                        </div>
                        <span className="bg-[#939090]/10 px-3 py-1 rounded-full text-xs tracking-wider text-[#939090]">Q2 2024</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-extralight tracking-[0.1em] mb-4">voicello</h3>
                      <p className="text-[#939090] text-sm leading-relaxed tracking-wider mb-4">
                        Advanced text-to-speech platform with natural voice synthesis capabilities.
                      </p>
                      <span className="text-sm text-[#939090]">Coming Soon</span>
                    </div>
                  </div>
                  {/* Timeline Node */}
                  <div className="absolute left-[-5px] md:left-1/2 md:-ml-[5px] top-[45%] w-[10px] h-[10px] rounded-full bg-[#939090]/50 shadow-[0_0_20px_rgba(147,144,144,0.3)]"></div>
                </div>

                {/* Agentello - Coming Soon */}
                <div className="relative grid md:grid-cols-2 gap-8">
                  <div className="md:text-right md:pr-12">
                    <div className="glass-effect p-6 sm:p-8 rounded-2xl hover:bg-[#939090]/5 transition-all duration-500 floating hover-glow opacity-80">
                      <div className="flex items-center md:justify-end mb-4 space-x-4">
                        <div className="w-12 h-12 bg-[#939090]/10 rounded-xl flex items-center justify-center">
                          <Database className="w-6 h-6" />
                        </div>
                        <span className="bg-[#939090]/10 px-3 py-1 rounded-full text-xs tracking-wider text-[#939090]">Q3 2024</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-extralight tracking-[0.1em] mb-4">agentello</h3>
                      <p className="text-[#939090] text-sm leading-relaxed tracking-wider mb-4">
                        Autonomous AI agents for task automation and workflow optimization.
                      </p>
                      <span className="text-sm text-[#939090]">Coming Soon</span>
                    </div>
                  </div>
                  <div className="hidden md:block"></div>
                  {/* Timeline Node */}
                  <div className="absolute left-[-5px] md:left-1/2 md:-ml-[5px] top-[45%] w-[10px] h-[10px] rounded-full bg-[#939090]/50 shadow-[0_0_20px_rgba(147,144,144,0.3)]"></div>
                </div>
              </div>
            </div>
          </section>

          {/* Research Section */}
          <section id="research" aria-label="Research" className="py-24 sm:py-32 bg-black relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl sm:text-3xl tracking-[0.2em] mb-16 text-center text-gradient">Active Research</h2>
              
              <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
                {/* Left Column - Research Cards */}
                <div className="space-y-8">
                  {/* TTS Research Card */}
                  <div className="group glass-effect p-8 rounded-2xl hover:bg-[#939090]/5 transition-all duration-500 floating hover-glow">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-[#939090]/10 rounded-xl flex items-center justify-center">
                          <Cpu className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-light tracking-wider mb-2">Indic TTS Research</h3>
                          <div className="flex items-center space-x-3">
                            <span className="text-xs text-[#939090] tracking-wider bg-[#939090]/10 px-3 py-1 rounded-full">Active</span>
                            <span className="text-xs text-[#939090] tracking-wider">Q2 2024</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <p className="text-[#939090] text-sm leading-relaxed tracking-wider">
                        Developing advanced text-to-speech systems for Indian languages with focus on natural conversation patterns.
                      </p>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-[#939090]/5 p-4 rounded-xl">
                          <h4 className="text-sm font-medium text-white mb-2">Current Focus</h4>
                          <ul className="space-y-2 text-sm text-[#939090]">
                            <li className="flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#939090]/30 mt-1.5"></div>
                              <span>Natural casual conversation</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#939090]/30 mt-1.5"></div>
                              <span>Multi-dialect support</span>
                            </li>
                          </ul>
                        </div>
                        <div className="bg-[#939090]/5 p-4 rounded-xl">
                          <h4 className="text-sm font-medium text-white mb-2">Progress</h4>
                          <ul className="space-y-2 text-sm text-[#939090]">
                            <li className="flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#939090]/30 mt-1.5"></div>
                              <span>Base model trained</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#939090]/30 mt-1.5"></div>
                              <span>Dataset preparation</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Agentic Models Research Card */}
                  <div className="group glass-effect p-8 rounded-2xl hover:bg-[#939090]/5 transition-all duration-500 floating hover-glow">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-[#939090]/10 rounded-xl flex items-center justify-center">
                          <Database className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-light tracking-wider mb-2">Agentic Models Research</h3>
                          <div className="flex items-center space-x-3">
                            <span className="text-xs text-[#939090] tracking-wider bg-[#939090]/10 px-3 py-1 rounded-full">Active</span>
                            <span className="text-xs text-[#939090] tracking-wider">Q3 2024</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <p className="text-[#939090] text-sm leading-relaxed tracking-wider">
                        Enhancing function calling capabilities in AI agents for robust and context-aware operations.
                      </p>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-[#939090]/5 p-4 rounded-xl">
                          <h4 className="text-sm font-medium text-white mb-2">Current Focus</h4>
                          <ul className="space-y-2 text-sm text-[#939090]">
                            <li className="flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#939090]/30 mt-1.5"></div>
                              <span>Error handling</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#939090]/30 mt-1.5"></div>
                              <span>Context awareness</span>
                            </li>
                          </ul>
                        </div>
                        <div className="bg-[#939090]/5 p-4 rounded-xl">
                          <h4 className="text-sm font-medium text-white mb-2">Progress</h4>
                          <ul className="space-y-2 text-sm text-[#939090]">
                            <li className="flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#939090]/30 mt-1.5"></div>
                              <span>Framework design</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#939090]/30 mt-1.5"></div>
                              <span>Initial testing</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Image and Stats */}
                <div className="space-y-8">
                  <div className="relative">
                    <img 
                      src="/NOS.png"  // Updated to use your NOS.png file
                      alt="AI Research Visualization" 
                      className="rounded-2xl relative z-10 border border-[#939090]/10 hover-glow transition-all duration-700 w-full h-[400px] object-cover"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="group flex items-center space-x-4 bg-[#939090]/5 p-5 sm:p-6 rounded-xl hover:bg-[#939090]/10 transition-all duration-300 hover-glow">
                      <FlaskConical className="w-5 h-5 sm:w-6 sm:h-6 text-[#939090] group-hover:text-white transition-all duration-300" />
                      <span className="text-sm tracking-[0.1em]">AI & ML Research</span>
                    </div>
                    <div className="glass-effect p-6 rounded-xl text-center">
                      <h4 className="text-2xl font-light mb-2">2+</h4>
                      <p className="text-sm text-[#939090] tracking-wider">Active Research Projects</p>
                    </div>
                    <div className="glass-effect p-6 rounded-xl text-center">
                      <h4 className="text-2xl font-light mb-2">2+</h4>
                      <p className="text-sm text-[#939090] tracking-wider">Team Members</p>
                    </div>
                    <a 
                      href="https://forms.gle/UyG76PtGrjRFnWnYA"
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="group glass-effect p-6 rounded-xl text-center hover:bg-[#939090]/10 transition-all duration-300 hover-glow"
                    >
                      <div className="flex items-center justify-center space-x-2">
                        <Plus className="w-5 h-5 text-[#939090] group-hover:text-white transition-all duration-300" />
                        <span className="text-sm text-[#939090] group-hover:text-white tracking-wider">Join Our Team</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" aria-label="About Us" className="py-24 sm:py-32 bg-black/95 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl sm:text-3xl tracking-[0.2em] mb-16 text-center text-gradient">About Us</h2>
              
              <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
                {/* Left Column - Content */}
                <div className="space-y-8">
                  <div className="glass-effect p-8 rounded-2xl hover:bg-[#939090]/5 transition-all duration-500 floating hover-glow">
                    <h3 className="text-xl sm:text-2xl font-light tracking-wider mb-6">Our Vision</h3>
                    <p className="text-[#939090] text-sm leading-relaxed tracking-wider mb-6">
                      At ello.one, we're dedicated to pushing the boundaries of technology through our comprehensive approach to innovation. Our mission spans artificial intelligence, machine learning, robotics, and cutting-edge software development, creating solutions that bridge the gap between human potential and technological advancement.
                    </p>
                    
                    {/* Product Development Process */}
                    <div className="mb-8">
                      <h4 className="text-sm font-medium mb-4 text-white">Product Development</h4>
                      <div className="glass-effect p-6 rounded-xl space-y-4">
                        <p className="text-sm text-[#939090] tracking-wider">
                          All our products are conceptualized, developed, and incubated within ello.one before being launched as independent platforms. This approach ensures:
                        </p>
                        <ul className="space-y-3">
                          <li className="flex items-start space-x-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#939090]/30 mt-1.5"></div>
                            <span className="text-sm text-[#939090] tracking-wider">Focused development and specialized teams</span>
                          </li>
                          <li className="flex items-start space-x-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#939090]/30 mt-1.5"></div>
                            <span className="text-sm text-[#939090] tracking-wider">Independent growth and scalability</span>
                          </li>
                          <li className="flex items-start space-x-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#939090]/30 mt-1.5"></div>
                            <span className="text-sm text-[#939090] tracking-wider">Tailored market strategies for each product</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Core Focus Areas */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="glass-effect p-4 rounded-xl">
                        <h4 className="text-sm font-medium mb-2">AI & ML</h4>
                        <p className="text-xs text-[#939090] tracking-wider">Advanced neural networks and intelligent systems</p>
                      </div>
                      <div className="glass-effect p-4 rounded-xl">
                        <h4 className="text-sm font-medium mb-2">Robotics</h4>
                        <p className="text-xs text-[#939090] tracking-wider">Next-gen automation and robotic solutions</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div className="glass-effect p-4 rounded-xl">
                        <h4 className="text-sm font-medium mb-2">Software Dev</h4>
                        <p className="text-xs text-[#939090] tracking-wider">Scalable and innovative applications</p>
                      </div>
                      <div className="glass-effect p-4 rounded-xl">
                        <h4 className="text-sm font-medium mb-2">Research</h4>
                        <p className="text-xs text-[#939090] tracking-wider">Pioneering technological breakthroughs</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="glass-effect p-8 rounded-2xl hover:bg-[#939090]/5 transition-all duration-500 floating hover-glow">
                    <h3 className="text-xl sm:text-2xl font-light tracking-wider mb-6">Our Approach</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-[#939090]/10 rounded-full flex items-center justify-center mt-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#939090]"></div>
                        </div>
                        <p className="text-sm text-[#939090] tracking-wider flex-1">
                          Research-driven development focusing on practical applications
                        </p>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-[#939090]/10 rounded-full flex items-center justify-center mt-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#939090]"></div>
                        </div>
                        <p className="text-sm text-[#939090] tracking-wider flex-1">
                          Collaborative environment fostering innovation and creativity
                        </p>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-[#939090]/10 rounded-full flex items-center justify-center mt-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#939090]"></div>
                        </div>
                        <p className="text-sm text-[#939090] tracking-wider flex-1">
                          User-centric design principles in all our solutions
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Right Column - Stats and Info */}
                <div className="space-y-8">
                  {/* Stats Grid */}
                  <div className="glass-effect p-8 rounded-2xl hover:bg-[#939090]/5 transition-all duration-500 floating hover-glow">
                    <div className="grid grid-cols-2 gap-8">
                      <div className="text-center">
                        <h4 className="text-3xl font-light mb-2">3+</h4>
                        <p className="text-sm text-[#939090] tracking-wider">Years Experience</p>
                      </div>
                      <div className="text-center">
                        <h4 className="text-3xl font-light mb-2">20+</h4>
                        <p className="text-sm text-[#939090] tracking-wider">Projects Completed</p>
                      </div>
                      {/* <div className="text-center">
                        <h4 className="text-3xl font-light mb-2">5+</h4>
                        <p className="text-sm text-[#939090] tracking-wider">Research Papers</p>
                      </div>
                      <div className="text-center">
                        <h4 className="text-3xl font-light mb-2">2+</h4>
                        <p className="text-sm text-[#939090] tracking-wider">Active Products</p>
                      </div> */}
                    </div>
                  </div>

                  {/* Technology Stack */}
                  <div className="glass-effect p-8 rounded-2xl hover:bg-[#939090]/5 transition-all duration-500 floating hover-glow">
                    <h3 className="text-xl font-light tracking-wider mb-6">Our Tech Stack</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="glass-effect p-4 rounded-xl">
                        <h4 className="text-sm font-medium mb-2">AI & ML</h4>
                        <p className="text-xs text-[#939090] tracking-wider">PyTorch, TensorFlow, Scikit-learn</p>
                      </div>
                      <div className="glass-effect p-4 rounded-xl">
                        <h4 className="text-sm font-medium mb-2">Backend</h4>
                        <p className="text-xs text-[#939090] tracking-wider">Python, Node.js, Go</p>
                      </div>
                      <div className="glass-effect p-4 rounded-xl">
                        <h4 className="text-sm font-medium mb-2">Frontend</h4>
                        <p className="text-xs text-[#939090] tracking-wider">React, Next.js, TypeScript</p>
                      </div>
                      <div className="glass-effect p-4 rounded-xl">
                        <h4 className="text-sm font-medium mb-2">Cloud & DevOps</h4>
                        <p className="text-xs text-[#939090] tracking-wider">AWS, Docker, Kubernetes</p>
                      </div>
                    </div>
                  </div>

                  {/* Product Launch Process */}
                  <div className="glass-effect p-8 rounded-2xl hover:bg-[#939090]/5 transition-all duration-500 floating hover-glow">
                    <h3 className="text-xl font-light tracking-wider mb-6">Launch Process</h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 rounded-full bg-[#939090]/10 flex items-center justify-center">
                          <span className="text-sm">1</span>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium">Research & Development</h4>
                          <p className="text-xs text-[#939090] tracking-wider mt-1">Initial concept and technology exploration</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 rounded-full bg-[#939090]/10 flex items-center justify-center">
                          <span className="text-sm">2</span>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium">Product Incubation</h4>
                          <p className="text-xs text-[#939090] tracking-wider mt-1">Development and testing within ello.one</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 rounded-full bg-[#939090]/10 flex items-center justify-center">
                          <span className="text-sm">3</span>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium">Independent Launch</h4>
                          <p className="text-xs text-[#939090] tracking-wider mt-1">Separate platform deployment and scaling</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer aria-label="Site footer" className="bg-black/95 py-12 sm:py-16 border-t border-[#939090]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
              <div>
                <h3 className="text-lg sm:text-xl tracking-[0.2em] mb-4 sm:mb-6 text-gradient">ello.one</h3>
                <p className="text-[#939090] text-sm leading-relaxed tracking-wider">Innovating the future of technology through research and development.</p>
              </div>
              <div>
                <h4 className="text-xs font-medium uppercase text-[#939090] tracking-[0.2em] mb-4 sm:mb-6">Products</h4>
                <ul className="space-y-3 sm:space-y-4">
                  <li><a href="#" className="text-[#939090] hover:text-white transition-colors duration-300 text-sm tracking-wider">mockello</a></li>
                  <li><span className="text-[#939090]/60 text-sm tracking-wider">voicello (Coming Soon)</span></li>
                  <li><span className="text-[#939090]/60 text-sm tracking-wider">agentello (Coming Soon)</span></li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-medium uppercase text-[#939090] tracking-[0.2em] mb-4 sm:mb-6">Company</h4>
                <ul className="space-y-3 sm:space-y-4">
                  <li><a href="#about" className="text-[#939090] hover:text-white transition-colors duration-300 text-sm tracking-wider">About</a></li>
                  <li>
                    <a 
                      href="https://forms.gle/UyG76PtGrjRFnWnYA"
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#939090] hover:text-white transition-colors duration-300 text-sm tracking-wider"
                    >
                      Careers
                    </a>
                  </li>
                  <li><a href="#" className="text-[#939090] hover:text-white transition-colors duration-300 text-sm tracking-wider">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-medium uppercase text-[#939090] tracking-[0.2em] mb-4 sm:mb-6">Connect</h4>
                <ul className="space-y-3 sm:space-y-4">
                  <li>
                    <a 
                      href="mailto:contact.ello.one@gmail.com" 
                      className="text-[#939090] hover:text-white transition-colors duration-300 text-sm tracking-wider inline-flex items-center space-x-2"
                    >
                      <span>contact.ello.one@gmail.com</span>
                    </a>
                  </li>
                  <li>
                    <a 
                      href="tel:7550000805" 
                      className="text-[#939090] hover:text-white transition-colors duration-300 text-sm tracking-wider inline-flex items-center space-x-2"
                    >
                      <span>+91 7550000805</span>
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://github.com/ello-one" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#939090] hover:text-white transition-all duration-300 text-sm tracking-wider inline-flex items-center space-x-2 group"
                    >
                      <GithubIcon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                      <span className="group-hover:translate-x-0.5 transition-transform duration-300">GitHub</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-[#939090]/10 text-center text-[#939090] text-sm tracking-wider">
              <p>&copy; 2025 ello.one. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
