import { motion } from 'motion/react';
import { BUSINESS_INFO } from '../constants';

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-xs font-black text-natural-sage uppercase tracking-[0.3em] mb-4">Our Work</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-black text-natural-dark tracking-tight">Recent Projects</h3>
          </div>
          <p className="text-natural-stone max-w-md leading-relaxed text-sm font-medium">
            Discover the artistry behind our latest landscape transformations. Each project is a testament to our commitment to quality and natural beauty.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BUSINESS_INFO.portfolio.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-[4/5] rounded-[3rem] overflow-hidden bg-natural-bg border border-natural-border shadow-sm"
            >
              <img 
                src={item.url} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-natural-dark/90 via-natural-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                <span className="bg-white/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 inline-block w-fit transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                  {item.category}
                </span>
                <h4 className="text-white text-2xl font-serif font-bold italic transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200">
                  {item.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="https://www.facebook.com/p/DR-Landscaping-100049210973103/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-natural-dark font-black hover:text-natural-sage transition-colors group text-sm uppercase tracking-widest"
          >
            See Facebook Gallery
            <span className="w-8 h-0.5 bg-natural-dark group-hover:w-12 transition-all group-hover:bg-natural-sage" />
          </a>
        </div>
      </div>
    </section>
  );
}
