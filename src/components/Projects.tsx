import { motion } from 'motion/react';
import { ArrowUpRight, Github } from 'lucide-react';

const projects = [
  {
    title: 'Customer Attrition Analysis',
    category: 'Data Analysis',
    description: 'Analyzed an extensive dataset to predict customer churn, identifying key factors and proposing retention strategies. Used pandas, Matplotlib, and Seaborn.',
    tags: ['Python', 'Pandas', 'Data Viz'],
    link: 'https://github.com/P4hadi/customer-attrition-analysis',
    linkType: 'GitHub',
  },
  {
    title: 'House Price Predictor',
    category: 'Machine Learning',
    description: 'An introductory machine learning pipeline using scikit-learn. Takes historical data on square footage, location, and rooms to predict future housing property values.',
    tags: ['Scikit-Learn', 'Linear Regression', 'Jupyter'],
    link: 'https://github.com/P4hadi/house-price-predictor',
    linkType: 'GitHub',
  },
  {
    title: 'Automated Web Scraper',
    category: 'Python Programming',
    description: 'A customizable Python script utilizing BeautifulSoup and requests to extract, clean, and structure real-time market data from e-commerce websites.',
    tags: ['Python', 'BeautifulSoup', 'Automation'],
    link: null,
    linkType: 'None',
  },
  {
    title: 'Sales Performance Dashboard',
    category: 'Excel Dashboard',
    description: 'A fully interactive Excel dashboard utilizing complex pivot tables, advanced VLOOKUP formulas, and dynamic charting to track corporate KPIs effectively.',
    tags: ['Excel', 'Pivot Tables', 'Dashboarding'],
    link: null,
    linkType: 'None',
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <h2 className="text-xs uppercase tracking-widest text-indigo-500 font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              A curated collection of my recent academic and personal projects demonstrating my capabilities in Data Analytics, Python, and Excel.
            </p>
          </div>
          <a
            href="https://github.com/P4hadi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            View all on GitHub <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative flex flex-col justify-between bg-slate-900/80 border border-slate-800 p-8 rounded-3xl hover:border-indigo-500/50 hover:bg-slate-900 transition-all shadow-sm shadow-slate-900/50"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-xs text-indigo-400 font-mono">
                    {project.category}
                  </div>
                  <div className="transition-opacity">
                    {project.link ? (
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-500 hover:text-indigo-400 transition-colors flex items-center"
                        title={`View ${project.linkType}`}
                        aria-label={`View ${project.linkType}`}
                      >
                        {project.linkType === 'GitHub' ? (
                          <Github className="cursor-pointer" size={20} />
                        ) : (
                          <ArrowUpRight className="cursor-pointer" size={20} />
                        )}
                      </a>
                    ) : (
                      <span className="text-[10px] uppercase font-semibold tracking-wider text-slate-500 bg-slate-800/50 border border-slate-700/50 px-2 py-1 rounded-md">
                        Not Available
                      </span>
                    )}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-indigo-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2 mt-auto">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs font-semibold text-slate-500 bg-slate-800/50 border border-slate-700 px-3 py-1 rounded-lg">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
