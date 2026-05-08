import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <span className="font-semibold text-slate-300">Email:</span>
            <a href="mailto:anshchauhan0501@gmail.com" className="hover:text-indigo-400 transition-colors">anshchauhan0501@gmail.com</a>
          </div>
          <div className="hidden md:block h-4 w-px bg-slate-800"></div>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/ansh-chauhan-5ba07b2a0/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="LinkedIn">
              LinkedIn
            </a>
            <a href="https://github.com/P4hadi" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="GitHub">
              GitHub
            </a>
          </div>
        </div>

        <div className="text-xs text-slate-500 flex flex-col items-center md:items-end gap-1">
          <p>&copy; {currentYear} Ansh Chauhan. Built with precision and passion.</p>
        </div>
      </div>
    </footer>
  );
}
