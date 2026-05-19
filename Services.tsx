import { motion } from 'motion/react';
import { Scissors, Flower2, BrickWall, Leaf } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const icons = {
  Scissors: <Scissors size={32} />,
  Flower2: <Flower2 size={32} />,
  BrickWall: <BrickWall size={32} />,
  Leaf: <Leaf size={32} />
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-natural-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-black text-natural-sage uppercase tracking-[0.3em] mb-4"
          >
            Our Expertise
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-black text-natural-dark mb-6 tracking-tight"
          >
            Landscaping Solutions
          </motion.h3>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-1 w-24 bg-natural-sage mx-auto rounded-full"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {BUSINESS_INFO.services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-10 rounded-[2.5rem] border border-natural-border hover:border-natural-sage transition-all hover:shadow-sm group"
            >
              <div className="w-16 h-16 bg-natural-bg text-natural-dark rounded-2xl flex items-center justify-center mb-8 group-hover:bg-natural-dark group-hover:text-white transition-colors duration-500">
                {icons[service.icon as keyof typeof icons]}
              </div>
              <h4 className="text-xl font-serif font-bold text-natural-dark mb-4 tracking-tight">
                {service.title}
              </h4>
              <p className="text-natural-stone leading-relaxed text-sm font-medium">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 p-12 bg-natural-dark rounded-[3rem] relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div>
              <h4 className="text-white text-3xl font-serif font-bold mb-2 italic">Ready for a transformation?</h4>
              <p className="text-natural-bg/60 font-medium">Contact our professional team for a comprehensive on-site assessment.</p>
            </div>
            <a 
              href="#contact" 
              className="bg-natural-bg text-natural-dark px-10 py-5 rounded-full font-bold hover:bg-white transition-all shadow-sm active:scale-95 whitespace-nowrap"
            >
              Consult an Expert
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
