import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    name: "Александр Грушнёв",
    role: "Постоянный клиент",
    quote: "Посещаю салон уже лет 20, сначала с мамой ходили, теперь всей семьей. У Салона Сандра очень вежливый персонал и профессиональный подход.",
    image: "image/Александр.webp",
    rating: 5
  },
  {
    name: "Прокофьева Луна",
    role: "Клиент с 2021 года",
    quote: "Приятно посещать данное место. Обслуживаемся всей семьёй. Спасибо мастеру Веронике за профессионализм и чуткий подход.",
    image: "image/Луна.webp",
    rating: 5
  },
  {
    name: "Лариса Александрова",
    role: "Клиент с 2022 года",
    quote: "Уютный салон, спокойная атмосфера. Мастера работают очень грамотно, всегда прислушиваются к пожеланиям и дают дельные советы.",
    image: "image/Лариса.webp",
    rating: 5
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 bg-charcoal text-cream overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="flex flex-col items-center mb-12">
          <div className="flex space-x-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-gold text-gold" />
            ))}
          </div>
          <span className="text-xs tracking-[0.4em] uppercase text-gold">Мнения наших гостей</span>
        </div>

        <div className="relative min-h-[400px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="px-12 flex flex-col items-center"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden mb-8 border-2 border-gold/30">
                <img 
                  src={testimonials[current].image} 
                  alt={testimonials[current].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xl md:text-2xl font-serif italic mb-10 leading-relaxed font-light">
                "{testimonials[current].quote}"
              </p>
              <div>
                <h4 className="text-sm tracking-[0.2em] uppercase font-semibold mb-1">{testimonials[current].name}</h4>
                <p className="text-xs tracking-widest uppercase text-gold/60">{testimonials[current].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <button 
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center border border-cream/10 rounded-full hover:bg-gold transition-colors group"
          >
            <ChevronLeft className="w-4 h-4 text-cream group-hover:text-charcoal" />
          </button>
          <button 
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center border border-cream/10 rounded-full hover:bg-gold transition-colors group"
          >
            <ChevronRight className="w-4 h-4 text-cream group-hover:text-charcoal" />
          </button>
        </div>
      </div>
    </section>
  );
}
