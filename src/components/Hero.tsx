import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Zap, Globe } from 'lucide-react';
import logo from '/loki-logo.png';

const Hero = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const quotes = [
    "In Odin We Trust, Loki We Must!",
    "Reality is just a suggestion.",
    "Burdened with Glorious Purpose.",
    "The Matrix has you."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden px-4">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="space-y-8 z-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-matrix-green text-lg font-mono tracking-widest mb-4">
              SYSTEM_INIT: THEODOR_KVALEM
            </h2>
            <h1 className="text-5xl md:text-7xl font-orbitron font-bold text-white mb-6 glitch-text" data-text="LOKI">
              LOKI
            </h1>
            <div className="h-20">
              <p className="text-xl md:text-2xl text-gray-300 font-mono typewriter">
                {">"} {quotes[quoteIndex]}<span className="animate-pulse">_</span>
              </p>
            </div>
          </motion.div>

          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-3 bg-matrix-green/10 border border-matrix-green text-matrix-green hover:bg-matrix-green hover:text-black transition-all duration-300 font-orbitron tracking-wider clip-path-polygon flex items-center gap-2 group">
              INITIATE_PROTOCOL <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-3 border border-gray-600 text-gray-300 hover:border-matrix-green hover:text-matrix-green transition-all duration-300 font-orbitron tracking-wider clip-path-polygon">
              VIEW_LOGS
            </button>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-800">
            {[
              { icon: Code, label: "FULL_STACK" },
              { icon: Zap, label: "OPTIMIZED" },
              { icon: Globe, label: "CONNECTED" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <stat.icon className="w-6 h-6 mx-auto mb-2 text-matrix-green" />
                <p className="text-xs tracking-widest text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content - Visual */}
        <div className="relative z-10 hidden md:block">
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 border-2 border-matrix-green/30 rounded-full animate-spin-slow"></div>
            <div className="absolute inset-4 border border-matrix-green/20 rounded-full animate-spin-reverse"></div>
            {/* Holographic Image Container */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-72 h-72 rounded-full overflow-hidden border-4 border-matrix-green/50 shadow-[0_0_30px_rgba(0,255,0,0.3)] bg-black">
                <div className="absolute inset-0 bg-matrix-green/10 z-10 mix-blend-overlay"></div>
                {/* Glitch overlay */}
                <div className="absolute inset-0 bg-[url('https://media.giphy.com/media/oEI9uBYSzLpBK/giphy.gif')] opacity-10 mix-blend-screen pointer-events-none z-20"></div>
                
                <img 
                  src={logo} 
                  alt="Loki Avatar" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
            
            {/* Floating particles/elements */}
            {[...Array(5)].map((_, i) => (
              <div 
                key={i}
                className="absolute w-2 h-2 bg-matrix-green rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: `ping ${2 + Math.random()}s cubic-bezier(0, 0, 0.2, 1) infinite`
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
