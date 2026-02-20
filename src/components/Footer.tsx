import { Github, Linkedin, Youtube, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/90 border-t border-matrix-green/30 py-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-matrix-green/5 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-orbitron font-bold text-white mb-2">
              LOKI<span className="text-matrix-green">_SYSTEMS</span>
            </h3>
            <p className="text-gray-400 text-sm font-mono typewriter">
              Coding the future, one glitch at a time.
            </p>
          </div>

          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-matrix-green transform hover:scale-110 transition-all duration-300">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-matrix-green transform hover:scale-110 transition-all duration-300">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://www.youtube.com/@DDIDDIDIDDI" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-matrix-green transform hover:scale-110 transition-all duration-300">
              <Youtube className="w-6 h-6" />
            </a>
            <a href="mailto:theodor@example.com" className="text-gray-400 hover:text-matrix-green transform hover:scale-110 transition-all duration-300">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 text-center text-xs text-matrix-green/60 font-mono border-t border-matrix-green/10 pt-4">
          <p>&copy; {new Date().getFullYear()} Theodor "Loki" Kvalem. All systems operational.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
