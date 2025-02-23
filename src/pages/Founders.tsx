import { ArrowLeft } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

function Founders() {
  return (
    <>
      <Helmet>
        <title>Our Founders - ello.one</title>
        <meta name="description" content="Meet the visionary founders behind ello.one - leaders in AI technology innovation and research." />
        <link rel="canonical" href="https://ello.one/founders" />
        
        {/* Add structured data for the Founders page */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "ello.one Founders",
            "description": "Meet the visionary founders behind ello.one - leaders in AI technology innovation and research.",
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": [
                {
                  "@type": "Person",
                  "name": "Rohit",
                  "image": "https://cdn.jsdelivr.net/gh/rohitmenonhart-xhunter/ello.one-production-2@08b51c0af6ee1c1b1e4e41c36b3cdf30b19ae1cd/founders/rohit.jpeg",
                  "jobTitle": ["CEO", "CTO", "CFO"],
                  "description": "A visionary leader with extensive experience in AI and machine learning.",
                  "sameAs": [
                    "https://www.linkedin.com/in/rohitmenonhart1/",
                    "https://x.com/rohitmenonhart"
                  ]
                },
                {
                  "@type": "Person",
                  "name": "Prem",
                  "image": "https://cdn.jsdelivr.net/gh/rohitmenonhart-xhunter/ello.one-production-2@91fe748f5cea77c405fedaca2dc00e6d6b1585c2/founders/prem.jpeg",
                  "jobTitle": ["CMO", "Deputy CFO"],
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

      <div className="min-h-screen bg-black text-white">
        {/* Navigation */}
        <nav className="fixed w-full bg-black/30 backdrop-blur-xl z-50 border-b border-[#939090]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center h-16">
              <Link 
                to="/" 
                className="group flex items-center space-x-2 text-[#939090] hover:text-white transition-colors duration-300"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
                <span className="text-sm tracking-[0.2em]">Back to Home</span>
              </Link>
            </div>
          </div>
        </nav>

        <main className="pt-32 pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl tracking-[0.2em] text-gradient text-center mb-16">
              Our Founders
            </h1>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Rohit */}
              <div className="glass-effect p-8 rounded-2xl hover:bg-[#939090]/5 transition-all duration-500 floating hover-glow">
                <div className="aspect-square mb-6 overflow-hidden rounded-xl">
                  <img 
                    src="https://cdn.jsdelivr.net/gh/rohitmenonhart-xhunter/ello.one-production-2@08b51c0af6ee1c1b1e4e41c36b3cdf30b19ae1cd/founders/rohit.jpeg" 
                    alt="Rohit" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-2xl font-light tracking-wider mb-2">Rohit</h2>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-[#939090]/10 px-3 py-1 rounded-full text-xs tracking-wider">CEO</span>
                  <span className="bg-[#939090]/10 px-3 py-1 rounded-full text-xs tracking-wider">CTO</span>
                  <span className="bg-[#939090]/10 px-3 py-1 rounded-full text-xs tracking-wider">CFO</span>
                </div>
                <p className="text-[#939090] text-sm leading-relaxed tracking-wider mb-6">
                  A visionary leader with extensive experience in AI and machine learning. 
                  Rohit drives the technical innovation and strategic direction of ello.one.
                </p>
                <div className="flex items-center space-x-4">
                  <a 
                    href="https://www.linkedin.com/in/rohitmenonhart1/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#939090] hover:text-white transition-colors duration-300 text-sm tracking-wider"
                  >
                    LinkedIn
                  </a>
                  <a 
                    href="https://x.com/rohitmenonhart" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#939090] hover:text-white transition-colors duration-300 text-sm tracking-wider"
                  >
                    X
                  </a>
                </div>
              </div>

              {/* Prem */}
              <div className="glass-effect p-8 rounded-2xl hover:bg-[#939090]/5 transition-all duration-500 floating hover-glow">
                <div className="aspect-square mb-6 overflow-hidden rounded-xl">
                  <img 
                    src="https://cdn.jsdelivr.net/gh/rohitmenonhart-xhunter/ello.one-production-2@91fe748f5cea77c405fedaca2dc00e6d6b1585c2/founders/prem.jpeg" 
                    alt="Prem" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-2xl font-light tracking-wider mb-2">Prem</h2>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-[#939090]/10 px-3 py-1 rounded-full text-xs tracking-wider">CMO</span>
                  <span className="bg-[#939090]/10 px-3 py-1 rounded-full text-xs tracking-wider">Deputy CFO</span>
                </div>
                <p className="text-[#939090] text-sm leading-relaxed tracking-wider mb-6">
                  A marketing strategist with a passion for technology. 
                  Prem leads our market expansion and brand development initiatives.
                </p>
                <div className="flex items-center space-x-4">
                  <a 
                    href="https://linkedin.com/in/prem" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#939090] hover:text-white transition-colors duration-300 text-sm tracking-wider"
                  >
                    LinkedIn
                  </a>
                  <a 
                    href="https://twitter.com/premkumar." 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#939090] hover:text-white transition-colors duration-300 text-sm tracking-wider"
                  >
                    X
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Founders; 