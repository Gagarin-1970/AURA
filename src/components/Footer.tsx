import { Instagram, MapPin, Phone, Clock, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-cream pt-24 pb-12 border-t border-champagne">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-24">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-serif tracking-widest uppercase mb-8">САНДРА</h3>
            <p className="text-charcoal/60 text-sm leading-loose font-light mb-10">
              Ваш идеальный образ — наша миссия с 2010 года. Премиум салон красоты в Красносельском районе Санкт-Петербурга.
            </p>
            <div className="flex space-x-4">
              <a href="https://vk.com/sandra_spb" target="_blank" rel="noreferrer" className="w-10 h-10 border border-charcoal/10 rounded-full flex items-center justify-center hover:border-gold hover:text-gold transition-all">
                <span className="text-xs font-bold">VK</span>
              </a>
              <a href="https://t.me/sandra_spb" target="_blank" rel="noreferrer" className="w-10 h-10 border border-charcoal/10 rounded-full flex items-center justify-center hover:border-gold hover:text-gold transition-all">
                <span className="text-xs font-bold">TG</span>
              </a>
              <a href="https://instagram.com/sandra_spb" target="_blank" rel="noreferrer" className="w-10 h-10 border border-charcoal/10 rounded-full flex items-center justify-center hover:border-gold hover:text-gold transition-all">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs tracking-[0.4em] uppercase font-bold mb-8">Студия</h4>
            <ul className="space-y-6">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-4 text-gold shrink-0" />
                <span className="text-sm text-charcoal/70">Санкт-Петербург,<br />просп. Ветеранов, 146/22</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-4 text-gold shrink-0" />
                <span className="text-sm text-charcoal/70">+7 (812) 730-69-68</span>
              </li>
              <li className="flex items-start">
                <Clock className="w-5 h-5 mr-4 text-gold shrink-0" />
                <span className="text-sm text-charcoal/70">
                  Ежедневно: 10:00 – 21:00
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-4 text-gold shrink-0" />
                <span className="text-sm text-charcoal/70">info@sandra-spb.ru</span>
              </li>
            </ul>
          </div>

          {/* Instagram Feed Integration Placeholder */}
          <div className="lg:col-span-2">
            <h4 className="text-xs tracking-[0.4em] uppercase font-bold mb-8 text-center md:text-left">Дневник @AuraBeauty</h4>
            <div className="grid grid-cols-4 gap-2">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="aspect-square bg-champagne overflow-hidden transition-all hover:opacity-80 cursor-pointer">
                  <div className="w-full h-full bg-charcoal/5" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Yandex Maps Section */}
        <section className="mb-24" id="map">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif mb-4">Как нас найти</h2>
            <div className="w-12 h-px bg-gold mx-auto mb-6"></div>
            <p className="text-charcoal/60 text-sm font-light">Санкт-Петербург, Красносельский район, проспект Ветеранов, 146/22</p>
          </div>
          
          {/* Square Map Container */}
          <div className="w-full max-w-[600px] aspect-square mx-auto overflow-hidden rounded-2xl shadow-xl bg-charcoal/5 border border-gold/10">
            <iframe 
              src="https://yandex.ru/map-widget/v1/?ll=30.156874%2C59.833809&z=18&pt=30.156874,59.833809,pm2rdm" 
              className="w-full h-full border-0 grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
              allowFullScreen={true}
              loading="lazy"
              title="Салон SANDRA на карте"
            ></iframe>
          </div>
          
          <div className="mt-8 text-center">
            <a 
              href="https://yandex.ru/maps/org/sandra/37844954477" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block border border-charcoal/20 px-10 py-4 text-[10px] tracking-[0.4em] uppercase font-bold hover:bg-charcoal hover:text-cream transition-all duration-500"
            >
              Открыть в Яндекс.Картах
            </a>
          </div>
        </section>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-charcoal/5 flex flex-col md:flex-row justify-between items-center text-[10px] tracking-[0.3em] uppercase text-charcoal/40 font-medium">
          <p>© 2026 Aura Aesthetics. Все права защищены.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-gold">Политика конфиденциальности</a>
            <a href="#" className="hover:text-gold">Условия использования</a>
            <a href="#" className="hover:text-gold">Доступность</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
