import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import { profiles } from '../data/profiles';

const Profiles = () => {
  return (
    <section id="profiles" className="min-h-screen py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-4">
            <span className="text-matrix-green">CREW</span>_MANIFEST
          </h2>
          <div className="h-1 w-24 bg-matrix-green mx-auto rounded-full shadow-[0_0_10px_#00ff00]" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {profiles.map((profile, index) => (
            <motion.div
              key={profile.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative bg-matrix-black/50 border border-matrix-green/30 hover:border-matrix-green transition-colors duration-300 p-6 rounded-lg backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-matrix-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full border-2 border-matrix-green/50 group-hover:border-matrix-green group-hover:scale-105 transition-all duration-300 overflow-hidden bg-black flex items-center justify-center">
                  {profile.image ? (
                    <img src={profile.image} alt={profile.name} className="w-full h-full object-cover" />
                  ) : (
                    <User className="w-16 h-16 text-matrix-green/50 group-hover:text-matrix-green transition-colors" />
                  )}
                </div>

                <h3 className="text-2xl font-orbitron font-bold text-white text-center mb-2 group-hover:text-matrix-green transition-colors">
                  {profile.name}
                </h3>
                <p className="text-center text-matrix-green/80 font-mono text-sm mb-4 tracking-wider">
                  [{profile.role}]
                </p>
                <p className="text-gray-400 text-center text-sm mb-6 font-mono leading-relaxed min-h-[5rem]">
                  {profile.description}
                </p>

                <div className="space-y-3 pt-6 border-t border-matrix-green/20">
                  {Object.entries(profile.stats).map(([stat, value]) => (
                    <div key={stat} className="space-y-1">
                      <div className="flex justify-between text-xs font-mono text-gray-500">
                        <span>{stat}</span>
                        <span className="text-matrix-green">{value}%</span>
                      </div>
                      <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${value}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                          className="h-full bg-matrix-green shadow-[0_0_5px_#00ff00]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Profiles;
