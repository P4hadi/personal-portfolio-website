import { motion } from 'motion/react';
import { Mail, Linkedin, Github as GithubIcon, Send, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simulate form submission
    setStatus('Sending...');
    setTimeout(() => {
      setStatus('Message sent successfully! I will get back to you soon.');
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-slate-950 text-slate-50 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-16 md:mb-24">
          <h2 className="text-xs uppercase tracking-widest text-indigo-500 font-bold mb-6">
            Get in Touch
          </h2>
          <p className="text-slate-400 text-lg max-w-xl leading-relaxed">
            Whether it's an intriguing data problem, an internship opportunity, or just a quick chat about technology, I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Details */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:border-indigo-600 group-hover:text-white transition-all shadow-sm">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-1">Email</p>
                <a href="mailto:anshchauhan0501@gmail.com" className="text-base font-semibold text-slate-200 hover:text-indigo-400 transition-colors">
                  anshchauhan0501@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:border-indigo-600 group-hover:text-white transition-all shadow-sm">
                <Linkedin size={24} />
              </div>
              <div>
                <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-1">LinkedIn</p>
                <a href="https://www.linkedin.com/in/ansh-chauhan-5ba07b2a0/" target="_blank" rel="noopener noreferrer" className="text-base font-semibold text-slate-200 hover:text-indigo-400 transition-colors">
                  linkedin.com/in/ansh-chauhan-5ba07b2a0
                </a>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:border-indigo-600 group-hover:text-white transition-all shadow-sm">
                <GithubIcon size={24} />
              </div>
              <div>
                <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-1">GitHub</p>
                <a href="https://github.com/P4hadi" target="_blank" rel="noopener noreferrer" className="text-base font-semibold text-slate-200 hover:text-indigo-400 transition-colors">
                  github.com/P4hadi
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:border-indigo-600 group-hover:text-white transition-all shadow-sm">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-1">Location</p>
                <p className="text-base font-semibold text-slate-200">
                  Remote Only
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
              <h3 className="text-xl font-bold mb-6 text-slate-100">Send a message</h3>
              
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs font-medium text-slate-400">Name</label>
                    <input type="text" id="name" required className="bg-slate-950/50 border border-slate-700/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:bg-slate-900 transition-all font-mono text-sm" placeholder="John Doe" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs font-medium text-slate-400">Email</label>
                    <input type="email" id="email" required className="bg-slate-950/50 border border-slate-700/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:bg-slate-900 transition-all font-mono text-sm" placeholder="john@example.com" />
                  </div>
                </div>
                
                <div className="flex flex-col gap-1.5 mt-2">
                  <label htmlFor="message" className="text-xs font-medium text-slate-400">Message</label>
                  <textarea id="message" rows={4} required className="bg-slate-950/50 border border-slate-700/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:bg-slate-900 transition-all resize-none font-mono text-sm" placeholder="How can I help you?"></textarea>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <button type="submit" disabled={status === 'Sending...'} className="inline-flex items-center gap-2 bg-indigo-600 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-500/20 disabled:opacity-70 disabled:cursor-not-allowed">
                    {status === 'Sending...' ? 'Sending...' : 'Send Message'} <Send size={18} />
                  </button>
                  
                  {status && status !== 'Sending...' && (
                    <span className="text-emerald-400 text-sm font-medium bg-emerald-400/10 px-3 py-1.5 rounded-lg border border-emerald-400/20">
                      {status}
                    </span>
                  )}
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
