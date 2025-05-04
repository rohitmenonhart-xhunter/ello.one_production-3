import { useState, useEffect } from 'react';
import { ArrowLeft, Linkedin, Twitter, Code, Cpu, Brain, Zap, Layers } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

function Founders() {
  const [scrollY, setScrollY] = useState(0);
  const [activeFounder, setActiveFounder] = useState('rohit');
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Helmet>
        <title>Our Founders - ello.one | R&D Division of Mockello</title>
        <meta name="description" content="Meet the visionary founders behind ello.one - the innovative R&D division driving technological advancement for Mockello." />
        <link rel="canonical" href="https://ello.one/founders" />
        
        {/* Add structured data for the Founders page */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "ello.one Founders",
            "description": "Meet the visionary founders behind ello.one - the innovative R&D division driving technological advancement for Mockello.",
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": [
                {
                  "@type": "Person",
                  "name": "Rohit",
                  "jobTitle": ["CEO"],
                  "description": "A visionary leader with experience in AI and machine learning.",
                  "sameAs": [
                    "https://www.linkedin.com/in/rohitmenonhart1/",
                    "https://x.com/rohitmenonhart"
                  ]
                },
                {
                  "@type": "Person",
                  "name": "Prem",
                  "jobTitle": ["COO"],
                  "description": "A marketing strategist with a passion for technology.",
                  "sameAs": [
                    "https://linkedin.com/in/prem",
                    "https://twitter.com/premkumar"
                  ]
                }
              ]
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-dark-900 text-white overflow-hidden">
        {/* Navigation */}
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-dark-800/90 backdrop-blur-xl border-b border-accent-primary/10' : 'bg-transparent'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center h-16">
              <Link 
                to="/" 
                className="group flex items-center space-x-2 text-accent-primary hover:text-white transition-colors duration-300"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
                <span className="text-sm tracking-[0.2em]">Back to Home</span>
              </Link>
            </div>
          </div>
        </nav>

        <main className="pt-32 pb-24 relative">
          {/* Animated Background Effects */}
          <div className="absolute inset-0 cyber-grid opacity-30"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-transparent to-dark-900"></div>
          
          {/* Animated particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(20)].map((_, i) => (
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
          
          {/* Animated scan line */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute w-full h-px bg-neon-green/30 animate-scan"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="mb-16 sm:mb-24 text-center">
              <div className="inline-flex items-center space-x-2 mb-4">
                <div className="h-px w-12 bg-gradient-to-r from-transparent via-neon-green to-transparent"></div>
                <span className="text-xs tracking-[0.3em] uppercase text-neon-green">Leadership</span>
                <div className="h-px w-12 bg-gradient-to-r from-transparent via-neon-green to-transparent"></div>
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl tracking-[0.2em] text-gradient-green font-light">
                Visionaries
              </h1>
              <p className="mt-6 max-w-2xl mx-auto text-accent-primary text-sm leading-relaxed tracking-wider">
                Meet the minds behind ello.one, pioneering the future of AI research and development.
              </p>
            </div>

            {/* Founders Selector */}
            <div className="flex justify-center mb-16">
              <div className="bg-dark-800/50 backdrop-blur-sm rounded-full p-1 border border-neon-green/20">
                <div className="flex">
                  <button 
                    onClick={() => setActiveFounder('rohit')}
                    className={`px-8 py-3 rounded-full text-sm tracking-[0.2em] transition-all duration-300 ${activeFounder === 'rohit' ? 'bg-dark-700 text-neon-green shadow-lg shadow-neon-green/20' : 'text-accent-primary hover:text-white'}`}
                  >
                    Rohit
                  </button>
                  <button 
                    onClick={() => setActiveFounder('prem')}
                    className={`px-8 py-3 rounded-full text-sm tracking-[0.2em] transition-all duration-300 ${activeFounder === 'prem' ? 'bg-dark-700 text-neon-green shadow-lg shadow-neon-green/20' : 'text-accent-primary hover:text-white'}`}
                  >
                    Prem
                  </button>
                </div>
              </div>
            </div>

            {/* Founder Profile Section */}
            <div className="max-w-4xl mx-auto relative">
              <div className="dark-glass-effect p-12 rounded-2xl border border-neon-green/20 overflow-hidden relative">
                {/* Background patterns */}
                <div className="absolute inset-0 cyber-grid opacity-10"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-dark-800/30 via-transparent to-dark-700/30"></div>
                
                {/* Animated borders */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-green to-transparent transform -translate-x-full animate-[border-flow_4s_ease-in-out_infinite]"></div>
                <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-green to-transparent transform translate-x-full animate-[border-flow_4s_ease-in-out_infinite]"></div>
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-neon-green to-transparent transform -translate-y-full animate-[border-flow-vertical_4s_ease-in-out_infinite]"></div>
                <div className="absolute right-0 bottom-0 w-1 h-full bg-gradient-to-b from-transparent via-neon-green to-transparent transform translate-y-full animate-[border-flow-vertical_4s_ease-in-out_infinite]"></div>
                
                <div className="relative z-10">
                  {/* Rohit Profile */}
                  {activeFounder === 'rohit' && (
                    <div className="flex flex-col-reverse md:flex-row items-center md:items-start md:space-x-12">
                      <div className="w-full md:w-2/3">
                        <div className="flex items-center mb-6">
                          <div className="w-16 h-16 rounded-lg bg-dark-700 flex items-center justify-center mr-4 border border-neon-green/30 shadow-lg shadow-neon-green/20">
                            <Brain className="w-8 h-8 text-neon-green" />
                          </div>
                          <div>
                            <h2 className="text-3xl md:text-4xl font-light tracking-wider text-white">Rohit</h2>
                            <div className="mt-1 flex items-center">
                              <span className="text-neon-green text-sm tracking-wider">CEO</span>
                              <div className="w-1.5 h-1.5 rounded-full bg-neon-green/50 inline-block ml-2 animate-pulse"></div>
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-accent-primary text-base leading-relaxed tracking-wider mb-8 ml-20">
                          A visionary leader and technical innovator with expertise in AI and software development. 
                          Rohit drives the technical direction of ello.one, 
                          combining deep AI knowledge with practical engineering experience to create breakthrough technologies.
                        </p>
                        
                        <div className="ml-20 space-y-4">
                          <div className="flex items-start">
                            <Code className="w-5 h-5 text-neon-green mt-1 mr-3" />
                            <div>
                              <h3 className="text-white text-lg mb-1">AI Expertise</h3>
                              <p className="text-accent-primary text-sm">Advanced neural networks, machine learning algorithms, and intelligent agent systems</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start">
                            <Cpu className="w-5 h-5 text-neon-green mt-1 mr-3" />
                            <div>
                              <h3 className="text-white text-lg mb-1">Software Development</h3>
                              <p className="text-accent-primary text-sm">Architecting robust, scalable systems and leading high-performance engineering teams</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-10 flex items-center space-x-4 ml-20">
                          <a 
                            href="https://www.linkedin.com/in/rohitmenonhart1/" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-accent-primary hover:text-neon-green transition-colors duration-300 text-sm tracking-wider"
                          >
                            <Linkedin className="w-4 h-4" />
                            <span>LinkedIn</span>
                          </a>
                          <a 
                            href="https://x.com/rohitmenonhart" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-accent-primary hover:text-neon-green transition-colors duration-300 text-sm tracking-wider"
                          >
                            <Twitter className="w-4 h-4" />
                            <span>X</span>
                          </a>
                        </div>
                      </div>
                      
                      <div className="w-full md:w-1/3 mb-8 md:mb-0">
                        <div className="relative">
                          <div className="w-48 h-48 mx-auto rounded-full bg-dark-700/50 border border-neon-green/20 flex items-center justify-center overflow-hidden">
                            <div className="text-9xl text-neon-green font-light">R</div>
                            <div className="absolute inset-0 bg-gradient-radial from-neon-green/5 via-transparent to-transparent"></div>
                            
                            {/* Orbital rings */}
                            <div className="absolute inset-0 border border-neon-green/10 rounded-full animate-[rotate-slow_20s_linear_infinite]"></div>
                            <div className="absolute inset-2 border border-neon-green/5 rounded-full animate-[rotate-slow_15s_linear_infinite_reverse]"></div>
                            
                            {/* Particles */}
                            <div className="absolute inset-0">
                              {[...Array(5)].map((_, i) => (
                                <div 
                                  key={i}
                                  className="absolute w-1.5 h-1.5 rounded-full bg-neon-green"
                                  style={{
                                    top: `${50 + 40 * Math.cos(i * Math.PI / 2.5)}%`,
                                    left: `${50 + 40 * Math.sin(i * Math.PI / 2.5)}%`,
                                    opacity: 0.6,
                                    animation: `pulse ${i % 2 ? 3 : 4}s ease-in-out infinite ${i * 0.5}s`,
                                  }}
                                ></div>
                              ))}
                            </div>
                          </div>
                          
                          {/* Data streams */}
                          <div className="absolute -top-4 -bottom-4 left-0 right-0 pointer-events-none">
                            {[...Array(3)].map((_, i) => (
                              <div
                                key={i}
                                className="absolute h-full w-px bg-neon-green/30 left-1/2"
                                style={{
                                  transform: `translateX(${(i - 1) * 20}px)`,
                                  opacity: 0.1 + i * 0.05,
                                }}
                              >
                                <div
                                  className="absolute w-full h-16 bg-gradient-to-b from-transparent via-neon-green to-transparent"
                                  style={{
                                    animation: `dataStream 10s linear infinite ${i * 2}s`,
                                  }}
                                ></div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Prem Profile */}
                  {activeFounder === 'prem' && (
                    <div className="flex flex-col-reverse md:flex-row items-center md:items-start md:space-x-12">
                      <div className="w-full md:w-2/3">
                        <div className="flex items-center mb-6">
                          <div className="w-16 h-16 rounded-lg bg-dark-700 flex items-center justify-center mr-4 border border-neon-green/30 shadow-lg shadow-neon-green/20">
                            <Layers className="w-8 h-8 text-neon-green" />
                          </div>
                          <div>
                            <h2 className="text-3xl md:text-4xl font-light tracking-wider text-white">Prem</h2>
                            <div className="mt-1 flex items-center">
                              <span className="text-neon-green text-sm tracking-wider">COO</span>
                              <div className="w-1.5 h-1.5 rounded-full bg-neon-green/50 inline-block ml-2 animate-pulse"></div>
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-accent-primary text-base leading-relaxed tracking-wider mb-8 ml-20">
                          A strategic thinker with a passion for technology and innovation. 
                          Prem expertly orchestrates the operational framework that allows ello.one
                          to transform advanced research into practical applications.
                        </p>
                        
                        <div className="ml-20 space-y-4">
                          <div className="flex items-start">
                            <Zap className="w-5 h-5 text-neon-green mt-1 mr-3" />
                            <div>
                              <h3 className="text-white text-lg mb-1">Strategic Vision</h3>
                              <p className="text-accent-primary text-sm">Translating complex research into market-ready solutions and business opportunities</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start">
                            <Layers className="w-5 h-5 text-neon-green mt-1 mr-3" />
                            <div>
                              <h3 className="text-white text-lg mb-1">Operational Excellence</h3>
                              <p className="text-accent-primary text-sm">Scaling research initiatives and optimizing cross-functional team performance</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-10 flex items-center space-x-4 ml-20">
                          <a 
                            href="https://www.linkedin.com/in/prem-kumar-b539112b9/" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-accent-primary hover:text-neon-green transition-colors duration-300 text-sm tracking-wider"
                          >
                            <Linkedin className="w-4 h-4" />
                            <span>LinkedIn</span>
                          </a>
                          <a 
                            href="https://twitter.com/premkumar" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-accent-primary hover:text-neon-green transition-colors duration-300 text-sm tracking-wider"
                          >
                            <Twitter className="w-4 h-4" />
                            <span>X</span>
                          </a>
                        </div>
                      </div>
                      
                      <div className="w-full md:w-1/3 mb-8 md:mb-0">
                        <div className="relative">
                          <div className="w-48 h-48 mx-auto rounded-full bg-dark-700/50 border border-neon-green/20 flex items-center justify-center overflow-hidden">
                            <div className="text-9xl text-neon-green font-light">P</div>
                            <div className="absolute inset-0 bg-gradient-radial from-neon-green/5 via-transparent to-transparent"></div>
                            
                            {/* Orbital rings */}
                            <div className="absolute inset-0 border border-neon-green/10 rounded-full animate-[rotate-slow_20s_linear_infinite_reverse]"></div>
                            <div className="absolute inset-2 border border-neon-green/5 rounded-full animate-[rotate-slow_15s_linear_infinite]"></div>
                            
                            {/* Particles */}
                            <div className="absolute inset-0">
                              {[...Array(5)].map((_, i) => (
                                <div 
                                  key={i}
                                  className="absolute w-1.5 h-1.5 rounded-full bg-neon-green"
                                  style={{
                                    top: `${50 + 40 * Math.cos(i * Math.PI / 2.5 + Math.PI / 5)}%`,
                                    left: `${50 + 40 * Math.sin(i * Math.PI / 2.5 + Math.PI / 5)}%`,
                                    opacity: 0.6,
                                    animation: `pulse ${i % 2 ? 4 : 3}s ease-in-out infinite ${i * 0.5}s`,
                                  }}
                                ></div>
                              ))}
                            </div>
                          </div>
                          
                          {/* Data streams */}
                          <div className="absolute -top-4 -bottom-4 left-0 right-0 pointer-events-none">
                            {[...Array(3)].map((_, i) => (
                              <div
                                key={i}
                                className="absolute h-full w-px bg-neon-green/30 left-1/2"
                                style={{
                                  transform: `translateX(${(i - 1) * 20}px)`,
                                  opacity: 0.1 + i * 0.05,
                                }}
                              >
                                <div
                                  className="absolute w-full h-16 bg-gradient-to-b from-transparent via-neon-green to-transparent"
                                  style={{
                                    animation: `dataStream 10s linear infinite ${i * 2}s`,
                                  }}
                                ></div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Stats and Achievements */}
              <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="dark-glass-effect p-6 rounded-xl border border-neon-green/20 transform hover:scale-[1.02] transition-all duration-500 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-green/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="mb-2 text-3xl font-light text-neon-green">3+</div>
                  <div className="text-accent-highlight text-sm tracking-wider">Years Combined Experience</div>
                </div>
                
                <div className="dark-glass-effect p-6 rounded-xl border border-neon-green/20 transform hover:scale-[1.02] transition-all duration-500 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-green/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="mb-2 text-3xl font-light text-neon-green">3</div>
                  <div className="text-accent-highlight text-sm tracking-wider">Research Domains</div>
                </div>
                
                <div className="dark-glass-effect p-6 rounded-xl border border-neon-green/20 transform hover:scale-[1.02] transition-all duration-500 group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-green/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="mb-2 text-3xl font-light text-neon-green">15+</div>
                  <div className="text-accent-highlight text-sm tracking-wider">Active Projects</div>
                </div>
              </div>
            </div>
            
            {/* Team Info */}
            <div className="mt-24 max-w-3xl mx-auto dark-glass-effect p-8 rounded-lg border border-accent-primary/20">
              <h2 className="text-2xl font-light tracking-wider mb-6 text-white">Join Our Vision</h2>
              <p className="text-accent-primary text-sm leading-relaxed tracking-wider mb-6">
                At ello.one, we're always looking for talented individuals who are passionate about 
                pushing the boundaries of technology. Join us in our mission to create the future.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                <a 
                  href="https://forms.gle/UyG76PtGrjRFnWnYA" 
                  className="cyber-button px-6 py-3 rounded-md hover:bg-dark-500/30 transition-all duration-300 text-sm tracking-[0.2em] border border-neon-green/30 flex items-center justify-center sm:justify-start space-x-3 neon-glow-green"
                >
                  <span>Apply Now</span>
                </a>
              </div>
            </div>
          </div>
        </main>
        
        {/* Footer */}
        <footer className="py-8 bg-dark-800 relative overflow-hidden border-t border-accent-primary/10">
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="mb-4 md:mb-0 flex items-center">
                <img src="/logo.svg" alt="ello.one" className="h-8 w-8 mr-3 filter drop-shadow(0 0 8px rgba(0, 255, 102, 0.5))" />
                <span className="text-xl tracking-[0.3em] text-gradient">ello.one</span>
              </div>
              <p className="text-accent-primary text-sm">© {new Date().getFullYear()} ello.one. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Founders; 