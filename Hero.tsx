import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-natural-bg">
      {/* Background with Subtle Texture/Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,#D1CDC2_0%,transparent_70%)] opacity-30" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-natural-cream -skew-x-12 translate-x-1/4" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 bg-natural-sage/10 border border-natural-sage/20 rounded-full px-4 py-1.5 text-natural-sage text-xs font-bold tracking-[0.2em] uppercase mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-natural-sage opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-natural-sage"></span>
            </span>
            Professional Landscaping in Bayonne
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-black text-natural-dark leading-[1.1] mb-8 tracking-tight">
            Crafting Nature's <br />
            <span className="text-natural-sage italic">Beautiful</span> <br />
            Canvas
          </h1>
          
          <p className="text-lg text-natural-stone max-w-lg mb-10 leading-relaxed font-medium">
            D&R Landscaping is Bayonne's premier partner for custom landscape design and professional garden maintenance since 2012.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a 
              href="#contact" 
              className="bg-natural-dark text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-natural-sage transition-all hover:scale-[1.02] shadow-sm active:scale-95"
            >
              Request a Free Quote
              <ArrowRight size={20} />
            </a>
            <a 
              href="#portfolio" 
              className="bg-white text-natural-stone border border-natural-border px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-natural-cream transition-all shadow-sm active:scale-95"
            >
              Explore Our Gallery
            </a>
          </div>

          <div className="grid grid-cols-2 gap-6 border-t border-natural-border pt-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-natural-sage/10 flex items-center justify-center text-natural-sage">
                <CheckCircle2 size={20} />
              </div>
              <span className="text-natural-dark font-bold text-sm uppercase tracking-wider">Licensed #1000492</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-natural-sage/10 flex items-center justify-center text-natural-sage">
                <CheckCircle2 size={20} />
              </div>
              <span className="text-natural-dark font-bold text-sm uppercase tracking-wider">10+ Years Experience</span>
            </div>
          </div>
        </motion.div>

        {/* Feature Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden lg:block relative"
        >
          <div className="relative rounded-[3rem] overflow-hidden shadow-sm border border-natural-border p-4 bg-white">
            <img 
              src="https://images.unsplash.com/photo-1584486144884-257a70a83011?w=800&q=80" 
              alt="Recent Project"
              className="w-full aspect-[4/5] object-cover rounded-[2.5rem]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-sm text-natural-dark font-bold text-sm border border-natural-border">
              4.7 ★ Community Rated
            </div>
            <div className="absolute bottom-8 left-8 right-8 p-8 bg-white/95 backdrop-blur-md rounded-[2rem] border border-natural-border">
              <p className="text-natural-sage font-black text-xs uppercase tracking-[0.2em] mb-2">Featured Project</p>
              <h3 className="text-2xl font-serif text-natural-dark font-bold italic">West Hudson Garden Transformation</h3>
            </div>
          </div>
        </motion.div>
      </div>
      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-natural-stone/40 flex flex-col items-center gap-2"
      >
        <div className="w-px h-12 bg-gradient-to-b from-natural-sage/50 to-transparent" />
        <span className="text-[10px] uppercase tracking-[0.3em]">Explore</span>
      </motion.div>
    </section>
  );
}
