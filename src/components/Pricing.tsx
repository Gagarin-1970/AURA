import { motion } from 'motion/react';

const pricingData = [
  { category: "Парикмахерские услуги", services: [
    { name: "Модельная стрижка", price: "от 1 700 ₽" },
    { name: "Мужская стрижка", price: "от 1 000 ₽" },
    { name: "Детская стрижка (до 7 лет)", price: "от 500 ₽" },
    { name: "LUXURE COLLAGEN", price: "от 1 400 ₽" }
  ]},
  { category: "Маникюр и педикюр", services: [
    { name: "Маникюр", price: "от 2 300 ₽" },
    { name: "Педикюр", price: "от 2 500 ₽" },
    { name: "Парафинотерапия", price: "от 800 ₽" },
    { name: "Покрытие Shellac/Gel", price: "от 1 500 ₽" }
  ]},
  { category: "Косметология", services: [
    { name: "Уходовые процедуры", price: "от 2 500 ₽" },
    { name: "Массаж лица", price: "2 000 ₽" },
    { name: "Чистка лица", price: "3 500 ₽" },
    { name: "Коррекция бровей", price: "от 800 ₽" }
  ]}
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-charcoal/10 pb-12">
          <div className="max-w-2xl">
            <span className="text-xs tracking-[0.4em] uppercase text-gold font-semibold">Меню услуг</span>
            <h2 className="text-4xl md:text-5xl font-serif mt-4">Новый уровень заботы</h2>
          </div>
          <p className="mt-6 md:mt-0 text-charcoal/50 text-sm max-w-sm font-light italic">
            Цены указаны в качестве ориентира и могут варьироваться в зависимости от длины, густоты и сложности работы.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {pricingData.map((section, sIdx) => (
            <motion.div
              key={section.category}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: sIdx * 0.15 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-serif mb-8 pb-4 border-b border-gold/20 flex items-center">
                <span className="w-8 h-px bg-gold mr-4" />
                {section.category}
              </h3>
              <div className="space-y-8">
                {section.services.map((item) => (
                  <div key={item.name} className="group cursor-default">
                    <div className="flex justify-between items-baseline mb-2">
                      <h4 className="text-sm font-medium tracking-wide group-hover:text-gold transition-colors">{item.name}</h4>
                      <div className="flex-grow border-b border-dotted border-charcoal/10 mx-4" />
                      <span className="text-sm font-serif font-semibold">{item.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button className="border border-charcoal/20 px-10 py-4 text-xs tracking-widest uppercase hover:bg-charcoal hover:text-cream transition-all duration-500">
            Скачать полный прайс-лист
          </button>
        </div>
      </div>
    </section>
  );
}
