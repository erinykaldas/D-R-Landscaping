import { motion } from 'motion/react';
import { Users, ShieldCheck, Heart } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-natural-border p-4 bg-natural-bg">
              <img 
                src="https://images.unsplash.com/photo-1592419044706-39796d40f98c?w=1000&q=80" 
                alt="D&R Landscaping Team at Work" 
                className="w-full h-full object-cover rounded-[2.5rem]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-10 left-10 bg-white/90 backdrop-blur-md p-6 rounded-[2rem] shadow-sm border border-natural-border">
                <div className="text-natural-dark font-serif font-black text-4xl italic">10+</div>
                <div className="text-natural-stone text-[10px] font-black uppercase tracking-[0.2em] mt-1">Years of Excellence</div>
              </div>
            </div>
            {/* Secondary floating image */}
            <div className="absolute -bottom-10 -right-10 w-64 aspect-square rounded-[2rem] overflow-hidden border-8 border-white shadow-xl hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1510520434124-5bc7e642b61d?w=400&q=80" 
                alt="Meticulous details" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          <div className="lg:pl-10">
            <h2 className="text-xs font-black text-natural-sage uppercase tracking-[0.3em] mb-4">Our Story</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-black text-natural-dark mb-8 tracking-tight leading-tight">
              A Family Legacy of <br />
              <span className="italic text-natural-sage">Green Craftsmanship</span>
            </h3>
            <p className="text-natural-stone text-lg mb-10 leading-relaxed font-medium">
              Founded on the principles of integrity and artistic precision, D&R Landscaping has transformed hundreds of Bayonne properties into outdoor masterpieces. As a family-owned business, we don't just mow lawns — we curate environments where memories are made.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-natural-bg border border-natural-border flex items-center justify-center text-natural-dark flex-shrink-0">
                  <Users size={28} />
                </div>
                <div>
                  <h4 className="text-lg font-serif font-bold text-natural-dark italic">Community Focused</h4>
                  <p className="text-natural-stone text-sm leading-relaxed font-medium">We're your neighbors. We understand the local climate and what Bayonne properties need to thrive.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-natural-bg border border-natural-border flex items-center justify-center text-natural-dark flex-shrink-0">
                  <ShieldCheck size={28} />
                </div>
                <div>
                  <h4 className="text-lg font-serif font-bold text-natural-dark italic">Vetted & Insured</h4>
                  <p className="text-natural-stone text-sm leading-relaxed font-medium">Total peace of mind with full liability coverage and a professional, background-checked team.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-natural-bg border border-natural-border flex items-center justify-center text-natural-dark flex-shrink-0">
                  <Heart size={28} />
                </div>
                <div>
                  <h4 className="text-lg font-serif font-bold text-natural-dark italic">Detail Obsessed</h4>
                  <p className="text-natural-stone text-sm leading-relaxed font-medium">Our difference is in the details — from perfect edging to color-balanced garden beds.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
