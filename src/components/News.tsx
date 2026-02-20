import { motion } from 'framer-motion';
import { Calendar, Tag, ChevronRight } from 'lucide-react';
import { news } from '../data/news';

const News = () => {
  return (
    <section id="news" className="min-h-screen py-20 px-4 bg-black/80 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16 border-l-4 border-matrix-green pl-6"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-2">
            SYSTEM_<span className="text-matrix-green">LOGS</span>
          </h2>
          <p className="text-gray-400 font-mono">Latest encryption keys and status updates</p>
        </motion.div>

        <div className="space-y-6">
          {news.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group border border-gray-800 hover:border-matrix-green bg-matrix-dark p-6 relative overflow-hidden transition-all duration-300"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                 <span className="font-orbitron text-4xl font-bold text-matrix-green">{item.id.padStart(2, '0')}</span>
              </div>

              <div className="flex flex-col md:flex-row gap-6 relative z-10">
                 <div className="md:w-48 flex-shrink-0 space-y-2">
                   <div className="flex items-center text-matrix-green font-mono text-sm">
                     <Calendar className="w-4 h-4 mr-2" />
                     {item.date}
                   </div>
                   <div className="flex items-center text-gray-400 font-mono text-xs">
                     <Tag className="w-3 h-3 mr-2" />
                     {item.category}
                   </div>
                 </div>

                 <div className="flex-grow">
                   <h3 className="text-xl font-orbitron font-bold text-white mb-2 group-hover:text-matrix-green transition-colors">
                     {item.title}
                   </h3>
                   <p className="text-gray-400 font-mono mb-4 text-sm leading-relaxed">
                     {item.summary}
                   </p>
                   <button className="text-matrix-green text-sm font-bold flex items-center hover:underline bg-transparent border-none p-0 cursor-pointer">
                     DECRYPT_DATA <ChevronRight className="w-4 h-4 ml-1" />
                   </button>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
