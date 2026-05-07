import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsOpen(false);
    }, 2000);
  };

  return (
    <>
      {/* Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-[60] w-16 h-16 bg-charcoal text-cream rounded-full shadow-2xl flex items-center justify-center hover:bg-gold transition-colors duration-300 border border-gold/20"
      >
        <MessageSquare className="w-6 h-6" />
      </motion.button>

      {/* Floating Form Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-charcoal/20 backdrop-blur-sm z-[70]"
            />
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.9 }}
              className="fixed bottom-28 right-8 z-[80] w-96 bg-cream shadow-2xl overflow-hidden border border-gold/10"
            >
              <div className="bg-charcoal p-6 flex justify-between items-center">
                <div>
                  <h4 className="text-cream text-lg font-serif">Связаться с нами</h4>
                  <p className="text-gold/60 text-[10px] tracking-[0.2em] font-medium uppercase mt-1">Ответим в течение 2 часов</p>
                </div>
                <button onClick={() => setIsOpen(false)} className="text-cream/50 hover:text-cream">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {submitted ? (
                <div className="p-12 text-center">
                  <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="w-6 h-6 text-gold" />
                  </div>
                  <h5 className="text-xl font-serif mb-2">Сообщение отправлено</h5>
                  <p className="text-sm text-charcoal/60 font-light">Спасибо за обращение. Эксперт Aura свяжется с вами в ближайшее время.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-8 space-y-6">
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] font-bold mb-2 text-charcoal/40">Имя и фамилия</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-champagne/20 border-b border-charcoal/10 py-2 text-sm focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] font-bold mb-2 text-charcoal/40">Интересующая услуга</label>
                    <select className="w-full bg-champagne/20 border-b border-charcoal/10 py-2 text-sm focus:outline-none focus:border-gold transition-colors appearance-none p-1">
                      <option>Парикмахерские услуги</option>
                      <option>Ногтевой сервис</option>
                      <option>Косметология</option>
                      <option>SPA-программы</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] font-bold mb-2 text-charcoal/40">Ваш вопрос</label>
                    <textarea 
                      required
                      rows={3} 
                      className="w-full bg-champagne/20 border-b border-charcoal/10 py-2 text-sm focus:outline-none focus:border-gold transition-colors resize-none"
                    />
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-charcoal text-cream py-4 text-[10px] tracking-[0.4em] uppercase font-bold hover:bg-gold transition-colors"
                  >
                    Отправить запрос
                  </button>
                </form>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
