import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-natural-dark relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-natural-sage/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-natural-sage/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-xs font-black text-natural-sage uppercase tracking-[0.3em] mb-4">Patient Words</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-black text-white italic tracking-tight">What Our Neighbors Say</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {BUSINESS_INFO.testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm p-12 rounded-[3rem] border border-white/10 relative group hover:border-natural-sage/30 transition-colors"
            >
              <Quote 
                className="absolute top-10 right-10 text-white/5 group-hover:text-natural-sage/10 transition-colors" 
                size={80} 
              />
              <div className="flex gap-1 mb-8">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-natural-sage text-natural-sage" />
                ))}
              </div>
              <p className="text-natural-bg/80 leading-relaxed italic mb-10 relative z-10 font-serif text-lg">
                "{t.text}"
              </p>
              <div>
                <h4 className="text-white font-serif font-bold text-xl">{t.name}</h4>
                <p className="text-natural-sage text-xs font-black uppercase tracking-[0.2em]">{t.location}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-center">
          <div className="bg-natural-bg text-natural-dark p-10 rounded-[3rem] flex flex-col items-center gap-4 text-center max-w-sm w-full">
            <div className="flex items-center gap-3">
              <span className="font-serif font-black text-5xl italic">4.7</span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={22} className={i < 4 ? "fill-natural-dark text-natural-dark" : "fill-natural-dark/20 text-natural-dark/20"} />
                ))}
              </div>
            </div>
            <p className="text-natural-stone font-bold uppercase tracking-widest text-xs">Community Rating on Google</p>
            <a 
              href="https://www.google.com/search?q=D+%26+R+Landscaping+Bayonne" 
              target="_blank" 
              rel="noopener"
              className="text-natural-sage text-sm font-bold hover:text-natural-dark transition-colors underline underline-offset-8 mt-2"
            >
              View Full History
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
