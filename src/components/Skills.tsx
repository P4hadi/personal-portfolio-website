import { motion } from 'motion/react';
import { FileSpreadsheet, Terminal, BarChart3, BrainCircuit, Database, Puzzle, MessageSquare, Code } from 'lucide-react';

const skills = [
  { name: 'Python', icon: Terminal, category: 'Technical' },
  { name: 'Excel', icon: FileSpreadsheet, category: 'Technical' },
  { name: 'Data Analytics', icon: BarChart3, category: 'Technical' },
  { name: 'Machine Learning Basics', icon: BrainCircuit, category: 'Technical' },
  { name: 'SQL', icon: Database, category: 'Technical' },
  { name: 'Programming', icon: Code, category: 'Technical' },
  { name: 'Problem Solving', icon: Puzzle, category: 'Soft Skill' },
  { name: 'Communication', icon: MessageSquare, category: 'Soft Skill' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="bg-slate-900 rounded-[2.5rem] p-10 md:p-16 border border-slate-800">
          <div className="text-center md:text-left mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 relative">
            <div>
              <h2 className="text-xs uppercase tracking-widest text-indigo-500 font-bold mb-4">
                Core Expertise
              </h2>
              <p className="text-slate-400 max-w-2xl text-sm md:text-base leading-relaxed">
                A blend of technical prowess and interpersonal capabilities fine-tuned for modern data environments.
              </p>
            </div>
            
            <p className="text-xs text-slate-500 italic">
              Soft Skills: Communication, Problem Solving, Critical Thinking
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 hover:bg-slate-800 hover:border-indigo-500/50 transition-all group flex flex-col items-center justify-center text-center gap-4"
              >
                <div className="text-indigo-400 group-hover:text-indigo-300 transition-colors">
                  <skill.icon size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">{skill.name}</h3>
                  <p className="text-[10px] text-slate-500 mt-1 uppercase tracking-wider font-medium">{skill.category}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
