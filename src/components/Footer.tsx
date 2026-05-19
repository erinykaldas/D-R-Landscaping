import { BUSINESS_INFO } from '../constants';

export default function Footer() {
  return (
    <footer className="bg-natural-dark text-white py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="bg-white text-natural-dark p-2 rounded-xl">
                <span className="font-serif font-bold text-xl leading-none">DR</span>
              </div>
              <span className="font-serif font-black text-2xl tracking-tight italic">D&R Landscaping</span>
            </div>
            <p className="text-natural-bg/40 max-w-sm mb-10 leading-relaxed font-medium">
              A legacy of green craftsmanship in Bayonne, NJ. Locally owned and dedicated to the art of professional landscaping since 2012.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/p/DR-Landscaping-100049210973103/" className="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center hover:bg-white hover:text-natural-dark transition-all">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.249h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-serif font-black text-xs uppercase tracking-[0.3em] mb-8">Navigation</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-natural-bg/40 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest">Services</a></li>
              <li><a href="#portfolio" className="text-natural-bg/40 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest">Portfolio</a></li>
              <li><a href="#testimonials" className="text-natural-bg/40 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest">Reviews</a></li>
              <li><a href="#contact" className="text-natural-bg/40 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest">Estimate</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif font-black text-xs uppercase tracking-[0.3em] mb-8">Business Hours</h4>
            <ul className="space-y-4 text-natural-bg/40 text-[10px] font-black uppercase tracking-[0.2em]">
              <li className="flex justify-between border-b border-white/5 pb-2"><span>Monday - Friday</span> <span>7am - 8pm</span></li>
              <li className="flex justify-between border-b border-white/5 pb-2"><span>Saturday</span> <span>7am - 6pm</span></li>
              <li className="flex justify-between"><span>Sunday</span> <span>By Appt.</span></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-natural-bg/20 text-[10px] font-black uppercase tracking-[0.3em]">
            © 2025 D&R Landscaping • PA LICENSED #1000492 • FULLY INSURED
          </p>
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-natural-bg/20">
            <a href="https://www.google.com/search?q=D+%26+R+Landscaping+Bayonne" className="hover:text-natural-sage transition-colors italic">Google Verified Profile</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
