import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Услуги', href: '#services' },
    { name: 'Цены', href: '#pricing' },
    { name: 'Галерея', href: '#gallery' },
    { name: 'О нас', href: '#about' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-cream/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center text-charcoal">
        <a href="/" className="text-2xl font-serif tracking-widest uppercase">
          САНДРА
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium tracking-widest uppercase hover:text-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-charcoal text-cream px-8 py-3 text-xs tracking-widest uppercase hover:bg-gold transition-all duration-300">
            Записаться
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        variants={{
          open: { opacity: 1, height: 'auto', display: 'block' },
          closed: { opacity: 0, height: 0, transitionEnd: { display: 'none' } }
        }}
        className="md:hidden bg-cream border-t border-champagne overflow-hidden"
      >
        <div className="p-8 flex flex-col space-y-6 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-sm tracking-widest uppercase font-medium"
            >
              {link.name}
            </a>
          ))}
          <button className="w-full bg-charcoal text-cream py-4 text-xs tracking-widest uppercase">
            Записаться
          </button>
        </div>
      </motion.div>
    </nav>
  );
}
