import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="image/photo001.webp" 
          alt="Интерьер салона САНДРА"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream/20 via-transparent to-cream/80" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-block text-sm tracking-[0.3em] uppercase mb-4 text-gold font-medium"
        >
          Премиум салон красоты в Красносельском районе
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-5xl md:text-8xl font-serif mb-8 leading-tight tracking-tight"
        >
          Подчеркнем вашу <br />
          <span className="italic">природную красоту.</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-lg md:text-xl text-charcoal/70 max-w-2xl mx-auto mb-12 font-light leading-relaxed"
        >
          Более 14 лет опыта, профессиональные мастера и 15 000 довольных клиентов.
          <br />Ваш идеальный образ — наша миссия с 2010 года.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <a 
            href="#booking"
            className="inline-block bg-charcoal text-cream px-12 py-5 text-sm tracking-widest uppercase hover:bg-gold transition-all duration-500 shadow-xl"
          >
            Записаться на прием
          </a>
        </motion.div>
      </div>

      {/* Decorative vertical line */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="w-px h-24 bg-gold/30 animate-pulse" />
      </div>
    </section>
  );
}
