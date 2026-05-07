/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden relative">
      <Navbar />
      
      <main>
        <Hero />
        
        <Services />
        
        {/* Quote & Stats Section */}
        <section className="py-32 bg-cream overflow-hidden border-y border-gold/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <span className="text-[10px] tracking-[0.5em] uppercase text-gold font-bold mb-8 block">Наша миссия</span>
                <blockquote className="text-3xl md:text-4xl font-serif italic text-charcoal/80 leading-snug">
                  "Мы верим, что истинная красота рождается в гармонии внешнего образа и внутреннего состояния."
                </blockquote>
              </div>
              <div className="grid grid-cols-2 gap-12">
                <div>
                  <h3 className="text-4xl font-serif text-charcoal mb-2">14+</h3>
                  <p className="text-xs tracking-[0.2em] uppercase text-gold font-medium">Лет опыта</p>
                </div>
                <div>
                  <h3 className="text-4xl font-serif text-charcoal mb-2">50+</h3>
                  <p className="text-xs tracking-[0.2em] uppercase text-gold font-medium">Мастеров</p>
                </div>
                <div>
                  <h3 className="text-4xl font-serif text-charcoal mb-2">15K+</h3>
                  <p className="text-xs tracking-[0.2em] uppercase text-gold font-medium">Гостей</p>
                </div>
                <div>
                  <h3 className="text-4xl font-serif text-charcoal mb-2">2010</h3>
                  <p className="text-xs tracking-[0.2em] uppercase text-gold font-medium">Год основания</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Pricing />
        
        <Gallery />
        
        <Testimonials />
      </main>

      <Footer />
      
      <ContactForm />
    </div>
  );
}

