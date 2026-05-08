import { motion } from 'motion/react';
import { Target, Lightbulb, BookOpen, User } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-slate-900/50 rounded-[2.5rem] p-10 border border-slate-800 relative overflow-hidden"
          >
            <h2 className="text-xs uppercase tracking-widest text-indigo-500 font-bold mb-6">
              About Me
            </h2>
            <div className="space-y-6 text-slate-300 leading-relaxed text-sm md:text-base">
              <p>
                Hello! I'm Ansh Chauhan, a dedicated student with a profound enthusiasm for <strong>Data Analytics, AI, and Technology</strong>. I believe that data is the ultimate storyteller, and I strive to be the one who translates those numbers into a compelling narrative that solves real-world problems.
              </p>
              <p>
                My journey began with a natural curiosity about how software is built, which evolved into a deep interest in discovering patterns through data. Whether it's writing an efficient Python script or designing a comprehensive Excel dashboard, I focus on delivering clean, insightful, and impactful results.
              </p>
              <p>
                Currently, I am focusing my studies on advanced analytics and machine learning basics, working towards a career where I can design intelligent systems and guide strategic decisions based on quantitative analysis. I am also gaining valuable practical experience through my association with the <strong>InAmigos Foundation</strong>.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 hover:border-indigo-500/30 transition-colors flex flex-col gap-4">
              <div className="w-10 h-10 bg-indigo-500/10 text-indigo-400 rounded-lg flex items-center justify-center">
                <Target size={20} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-100 mb-1">Career Goal</h3>
                <p className="text-xs text-slate-400 leading-relaxed">To become a Data Analyst bridging technical data models with business strategy.</p>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 hover:border-indigo-500/30 transition-colors flex flex-col gap-4">
              <div className="w-10 h-10 bg-indigo-500/10 text-indigo-400 rounded-lg flex items-center justify-center">
                <BookOpen size={20} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-100 mb-1">Education</h3>
                <p className="text-xs text-slate-400 leading-relaxed">Continually upskilling through university coursework and intensive self-study in Data & ML.</p>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 hover:border-indigo-500/30 transition-colors flex flex-col gap-4">
              <div className="w-10 h-10 bg-indigo-500/10 text-indigo-400 rounded-lg flex items-center justify-center">
                <Lightbulb size={20} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-100 mb-1">Interests</h3>
                <p className="text-xs text-slate-400 leading-relaxed">Coding challenges, AI advancements, Data Visualization, and Tech Blogs.</p>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 hover:border-indigo-500/30 transition-colors flex flex-col gap-4">
              <div className="w-10 h-10 bg-indigo-500/10 text-indigo-400 rounded-lg flex items-center justify-center">
                <User size={20} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-100 mb-1">Soft Skills</h3>
                <p className="text-xs text-slate-400 leading-relaxed">Strong communication, critical problem solving, and effective teamwork.</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
