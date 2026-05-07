import { motion } from 'motion/react';
import { Camera, Flower, Sparkles } from 'lucide-react';

const services = [
  {
    title: "Парикмахерский зал",
    description: "Модельные стрижки, окрашивания любой сложности и уходовые процедуры LUXURE COLLAGEN.",
    details: ["Модельные стрижки", "Окрашивание", "Детские стрижки"],
    image: "image/Работа7.webp",
    icon: <Sparkles className="w-6 h-6" />
  },
  {
    title: "Косметология и SPA",
    description: "Профессиональный уход за лицом и телом, раскрывающий ваше естественное сияние.",
    details: ["Уход за лицом", "Массаж", "SPA-программы"],
    image: "image/Работа12.webp",
    icon: <Flower className="w-6 h-6" />
  },
  {
    title: "Ногтевая студия",
    description: "Безупречный маникюр и педикюр с использованием лучших материалов и техник.",
    details: ["Маникюр", "Педикюр", "Парафинотерапия"],
    image: "image/Работа10.webp",
    icon: <Camera className="w-6 h-6" />
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-champagne/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-xs tracking-[0.4em] uppercase text-gold font-semibold">Искусство заботы</span>
          <h2 className="text-4xl md:text-5xl font-serif mt-4 font-normal">Авторские услуги</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group bg-cream p-1 shadow-sm overflow-hidden border border-gold/10"
            >
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-charcoal/30 group-hover:bg-charcoal/10 transition-colors" />
                <div className="absolute bottom-6 left-6 text-white bg-charcoal/60 backdrop-blur-md p-3 rounded-full border border-gold/30">
                  {service.icon}
                </div>
              </div>
              
              <div className="p-8 bg-cream">
                <h3 className="text-2xl font-serif mb-4 group-hover:text-gold transition-colors">{service.title}</h3>
                <p className="text-charcoal/70 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.details.map(detail => (
                    <li key={detail} className="text-xs tracking-wider uppercase text-charcoal/50 flex items-center">
                      <div className="w-1.5 h-1.5 bg-gold mr-3 rounded-full" />
                      {detail}
                    </li>
                  ))}
                </ul>
                <button className="text-xs tracking-[0.2em] font-semibold uppercase relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-gold after:transition-all hover:after:w-full">
                  Подробнее
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
