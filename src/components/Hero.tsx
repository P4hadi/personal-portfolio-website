import { motion } from 'motion/react';
import { ArrowRight, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-950">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-40">
        <div className="absolute top-20 left-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-slate-900 to-slate-800 rounded-[2.5rem] p-10 md:p-16 border border-slate-700/50 shadow-2xl relative overflow-hidden text-center md:text-left">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-indigo-400 font-mono text-sm md:text-base mb-6"
          >
            // Welcome to my portfolio
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-slate-100 leading-tight mb-6"
          >
            Hi, I'm <span className="text-indigo-400">Ansh.</span><br />
            Aspiring Data Analyst
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-10 mx-auto md:mx-0"
          >
            I specialize in bridging the gap between raw data and actionable intelligence through code and visualization.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <a
              href="#projects"
              className="w-full sm:w-auto px-8 py-3.5 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-2"
            >
              View Projects <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-3.5 bg-slate-900 border border-slate-700 text-slate-300 rounded-full font-semibold hover:bg-slate-800 hover:text-white transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              Contact Me <Mail size={18} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
