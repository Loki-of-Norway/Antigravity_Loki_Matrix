import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { videos } from '../data/videos';

const VideoGallery = () => {
  return (
    <section id="videos" className="min-h-screen py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-4">
            VISUAL_<span className="text-matrix-green">TRANSMISSIONS</span>
          </h2>
          <p className="text-gray-400 font-mono max-w-2xl mx-auto">
            Authorized content from operative <a href="https://www.youtube.com/@DDIDDIDIDDI" target="_blank" rel="noopener noreferrer" className="text-matrix-green hover:underline">DDIDDI</a>.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-video bg-gray-900 border border-gray-800 hover:border-matrix-green rounded-lg overflow-hidden cursor-pointer"
              onClick={() => window.open(video.url, '_blank')}
            >
              <img 
                src={video.thumbnail} 
                alt={video.title} 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-300"
              />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-black/50 rounded-full border border-matrix-green flex items-center justify-center group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm">
                  <Play className="w-8 h-8 text-matrix-green ml-1" />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white font-orbitron text-sm font-bold truncate">{video.title}</h3>
                <span className="text-matrix-green text-xs font-mono">{video.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;
