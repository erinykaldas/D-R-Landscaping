import { motion } from 'motion/react';
import { Phone, MapPin, Mail, Send } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-natural-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-xs font-black text-natural-sage uppercase tracking-[0.3em] mb-4">Start Your Transformation</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-black text-natural-dark mb-8 leading-[1.1] tracking-tight">
            Ready to <span className="italic text-natural-sage">Reimagine</span> Your Outdoor Space?
          </h3>
          <p className="text-natural-stone text-lg mb-12 leading-relaxed font-medium">
            Join the D&R family today. We provide transparent, detailed proposals for every project — no surprises, just exceptional craftsmanship.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white text-natural-dark border border-natural-border rounded-2xl flex items-center justify-center flex-shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-[10px] font-black text-natural-stone uppercase tracking-[0.2em] mb-1">Direct Line</p>
                <a href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`} className="text-xl font-serif font-bold text-natural-dark hover:text-natural-sage transition-colors italic">
                  {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white text-natural-dark border border-natural-border rounded-2xl flex items-center justify-center flex-shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-[10px] font-black text-natural-stone uppercase tracking-[0.2em] mb-1">Office Location</p>
                <p className="text-xl font-serif font-bold text-natural-dark italic">
                  {BUSINESS_INFO.address}
                </p>
              </div>
            </div>

            <div className="p-10 bg-natural-dark rounded-[3rem] text-white relative overflow-hidden shadow-sm">
              <div className="relative z-10">
                <h4 className="font-serif text-2xl font-bold italic mb-2">Service Excellence</h4>
                <p className="text-natural-bg/60 text-sm leading-relaxed">Providing professional care to all neighborhoods in Bayonne and surrounding PA areas.</p>
              </div>
              {/* Abstract Shape */}
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -mb-10 -mr-10" />
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white p-12 rounded-[3.5rem] border border-natural-border shadow-sm"
        >
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-natural-stone uppercase tracking-[0.2em] ml-1">First Name</label>
                <input type="text" className="w-full px-5 py-4 rounded-2xl border border-natural-border focus:outline-none focus:border-natural-sage transition-colors bg-natural-bg/30 font-medium text-natural-dark" placeholder="John" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-natural-stone uppercase tracking-[0.2em] ml-1">Last Name</label>
                <input type="text" className="w-full px-5 py-4 rounded-2xl border border-natural-border focus:outline-none focus:border-natural-sage transition-colors bg-natural-bg/30 font-medium text-natural-dark" placeholder="Doe" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-[10px] font-black text-natural-stone uppercase tracking-[0.2em] ml-1">Phone Number</label>
              <input type="tel" className="w-full px-5 py-4 rounded-2xl border border-natural-border focus:outline-none focus:border-natural-sage transition-colors bg-natural-bg/30 font-medium text-natural-dark" placeholder="(201) 000-0000" />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-natural-stone uppercase tracking-[0.2em] ml-1">Choose Service</label>
              <select className="w-full px-5 py-4 rounded-2xl border border-natural-border focus:outline-none focus:border-natural-sage transition-colors bg-natural-bg/30 font-medium text-natural-dark appearance-none">
                <option>Lawn Maintenance</option>
                <option>Landscape Design</option>
                <option>Hardscaping</option>
                <option>Seasonal Cleanup</option>
                <option>Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-natural-stone uppercase tracking-[0.2em] ml-1">Project Details</label>
              <textarea rows={4} className="w-full px-5 py-4 rounded-2xl border border-natural-border focus:outline-none focus:border-natural-sage transition-colors bg-natural-bg/30 font-medium text-natural-dark resize-none" placeholder="Describe your vision..."></textarea>
            </div>

            <button className="w-full bg-natural-dark text-white font-bold py-5 rounded-full flex items-center justify-center gap-3 hover:bg-natural-sage transition-all active:scale-[0.98] shadow-sm uppercase tracking-widest text-sm">
              Send Request
              <Send size={18} />
            </button>
            <p className="text-center text-[9px] text-natural-stone uppercase tracking-[0.3em] font-black">Professional response within 24 hours</p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
