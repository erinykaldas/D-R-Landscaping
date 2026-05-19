import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';
import { BUSINESS_INFO } from '../constants';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-natural-bg/90 backdrop-blur-md border-b border-natural-border py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
          <div className="bg-natural-dark text-white p-2 rounded-xl group-hover:bg-natural-sage transition-colors">
            <span className="font-serif font-bold text-xl leading-none">DR</span>
          </div>
          <span className={`font-serif font-bold text-xl tracking-tight ${scrolled ? 'text-natural-dark' : 'text-white'}`}>
            D&R Landscaping
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-bold uppercase tracking-widest hover:text-natural-sage transition-colors ${
                scrolled ? 'text-natural-stone' : 'text-white/90'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`}
            className="flex items-center gap-2 bg-natural-dark text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-natural-sage transition-all active:scale-95"
          >
            <Phone size={16} />
            {BUSINESS_INFO.phone}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-natural-dark" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} className={scrolled ? 'text-natural-dark' : 'text-white'} /> : <Menu size={28} className={scrolled ? 'text-natural-dark' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-natural-bg border-b border-natural-border overflow-hidden"
          >
            <div className="flex flex-col px-6 py-8 gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-serif font-bold text-natural-dark hover:text-natural-sage"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`}
                className="flex items-center justify-center gap-2 bg-natural-dark text-white px-5 py-4 rounded-2xl text-lg font-bold"
              >
                <Phone size={20} />
                Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
