import { motion } from 'motion/react';

const galleryImages = [
  { url: "image/Работа1.webp", size: "square" },
  { url: "image/Работа2.webp", size: "square" },
  { url: "image/Работа3.webp", size: "square" },
  { url: "image/Работа4.webp", size: "square" },
  { url: "image/Работа5.webp", size: "square" },
  { url: "image/Работа6.webp", size: "square" },
  { url: "image/Работа7.webp", size: "square" },
  { url: "image/Работа8.webp", size: "square" },
  { url: "image/Работа9.webp", size: "square" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-champagne">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif italic mb-4">Наше искусство</h2>
          <p className="text-charcoal/50 text-sm font-light tracking-widest uppercase">Взгляд в наш мир красоты</p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((image, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden bg-charcoal"
            >
              <img 
                src={image.url} 
                alt={`Gallery ${idx}`}
                className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 border-[20px] border-transparent group-hover:border-cream/20 transition-all duration-700 pointer-events-none" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-cream text-[10px] tracking-[0.5em] uppercase font-medium bg-charcoal/40 backdrop-blur-md px-6 py-3 border border-cream/30">
                  Увеличить
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
