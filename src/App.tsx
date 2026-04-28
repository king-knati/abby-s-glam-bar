/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { MessageCircle, Instagram, MapPin, Phone, CheckCircle2, ChevronRight, Menu, X } from "lucide-react";
import { useState } from "react";

const WHATSAPP_URL = "https://wa.me/2349049096420?text=Hello%20Abby's%20Glam%20Bar!%20I%20saw%20your%20website%20and%20I’d%20like%20to%20inquire%20about%20booking%20a%20makeup%20session.%20Could%20you%20please%20send%20me%20your%20price%20list?";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getDriveImage = (id: string) => `https://lh3.googleusercontent.com/d/${id}`;

  const images = {
    logo: getDriveImage("1yytlPcwrkGVDfjXzI9ZraFsHogLu8Jf1"),
    hero: getDriveImage("1YZWwMPpH7t8qsjtq2E9RFRBBOUP7gOLU"),
    artist: getDriveImage("1yjO2IDUuHdeB99kfD4tvGC2PIULDCd4O"),
    artistSecondary: getDriveImage("1lNC5kAwgMInV5DOX_9VNj5xIBShQCWoZ"),
    service1: getDriveImage("1ZfoPB07kPnOBXrnmyFdPvKMSAq_DdDDg"),
    service2: getDriveImage("1ITzoQY4K0YEx00VURG8xUQ4JXHk-Tefc"),
    service3: getDriveImage("1bGcGP2WMhwXEtNxS9-RlurcJeyx67h5V"),
    service4: getDriveImage("1MzMQmVRLV3eAAq38ei-jmWTarVlv38zf"),
    portfolio: [
      getDriveImage("1bGcGP2WMhwXEtNxS9-RlurcJeyx67h5V"),
      getDriveImage("1UhNXMe7HODmVqhbusH0HXVB11BrxVret"),
      getDriveImage("1rBZNJ5YVc-v0YC3LhYSZLJSSJI6lXfN1"),
      getDriveImage("1ITzoQY4K0YEx00VURG8xUQ4JXHk-Tefc"),
      getDriveImage("1GhyXBOwWU2am6kFb_CU0BYss3gHlA3BT"),
      getDriveImage("1ZfoPB07kPnOBXrnmyFdPvKMSAq_DdDDg"),
    ]
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const stagger = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { staggerChildren: 0.2 }
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-secondary/80 backdrop-blur-md border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={images.logo} alt="Abby's Glam Bar Logo" className="h-12 w-auto" referrerPolicy="no-referrer" />
            <span className="font-serif text-xl font-bold text-choc tracking-tighter hidden sm:block">Abby's <span className="text-primary italic font-normal">Glam Bar</span></span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-ink/70">
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">Portfolio</a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="px-5 py-2 bg-primary text-white rounded-full hover:bg-primary-dark transition-all">Book Now</a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2 text-ink" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-20 left-0 w-full bg-secondary border-b border-primary/10 p-6 flex flex-col gap-4 text-center"
          >
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="py-2 text-lg font-serif">Services</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="py-2 text-lg font-serif">About</a>
            <a href="#portfolio" onClick={() => setIsMenuOpen(false)} className="py-2 text-lg font-serif">Portfolio</a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp py-3">Book Now</a>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={images.hero} 
            alt="Stunning Bridal Look" 
            className="w-full h-full object-cover opacity-50 scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 via-transparent to-secondary"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            {/* Elegant Logo */}
            <div className="inline-block p-4 border border-primary/20 rounded-full mb-8 bg-white/30 backdrop-blur-sm">
              <img src={images.logo} alt="Abby's Glam Bar" className="h-32 md:h-48 w-auto mix-blend-multiply" referrerPolicy="no-referrer" />
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-8xl mb-6 font-bold leading-[0.9]"
          >
            Let’s Get <span className="italic font-normal">Glammed</span> Together.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-2xl text-ink/70 mb-10 max-w-2xl mx-auto font-light"
          >
            Premium Bridal, Soft Glam, and Professional Gele Styling in the heart of Jalingo.
          </motion.p>
          
          <motion.a 
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="btn-whatsapp"
          >
            <MessageCircle size={20} />
            Book via WhatsApp
          </motion.a>
        </div>
      </section>

      {/* Meet the Artist */}
      <section id="about" className="section-container bg-white/50">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <motion.div {...fadeIn} className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl z-10">
              <img 
                src={images.artist} 
                alt="Abigail Tsintop Audu" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10"></div>
            </motion.div>
          </div>
          
          <motion.div {...fadeIn} className="pt-10 md:pt-0">
            <span className="uppercase tracking-[0.3em] text-primary font-semibold text-xs mb-4 block">Abby's Glam Bar</span>
            <h2 className="text-4xl md:text-6xl mb-6">The Hands Behind the Glow</h2>

            {/* Repositioned Secondary Artist Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-8 w-40 h-40 md:w-56 md:h-56 rounded-full border-[6px] border-white shadow-xl overflow-hidden"
            >
              <img 
                src={images.artistSecondary} 
                alt="Abigail Professional Look" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            <div className="space-y-6 text-lg text-ink/80 leading-relaxed font-light">
              <p>
                Hi, I’m <span className="text-choc font-semibold">Abigail!</span> With over 6 years of experience in the beauty industry, I’ve dedicated my craft to making every woman feel like the most radiant version of herself.
              </p>
              <p>
                Whether it’s your wedding day or a special celebration, I bring professional artistry and a passion for detail to every chair I work in.
              </p>
            </div>
            <div className="mt-12 flex flex-wrap gap-4">
              {["Bridal Expert", "Soft Glam Specialist", "Master Gele Finish"].map((tag) => (
                <span key={tag} className="px-6 py-2 border border-primary/30 rounded-full text-sm font-medium text-primary-dark bg-primary/5">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-secondary relative py-24 lg:py-32 overflow-hidden">
        <div className="section-container relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl mb-4">The Glam Menu</h2>
            <p className="text-ink/60 uppercase tracking-widest text-sm">Tailored experiences for every occasion</p>
          </div>

          <motion.div 
            variants={stagger}
            initial="initial"
            whileInView="whileInView"
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                title: "Bridal Experience",
                desc: "Flawless, long-lasting makeup for your big day. Designed to look stunning in person and on camera.",
                img: images.service1
              },
              {
                title: "The Soft Glam",
                desc: "Clean, glowy, and sophisticated. Perfect for birthdays, events, or 'just because.'",
                img: images.service2
              },
              {
                title: "Gele Styling & Lashes",
                desc: "The perfect finishing touch. Professional Gele tying (all styles) and luxury lash installations.",
                img: images.service3
              },
              {
                title: "Professional Training",
                desc: "Ready to learn? Join my makeup classes to master the art of glam, from beginner to pro levels.",
                img: images.service4
              }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                variants={fadeIn}
                className="group relative h-[500px] rounded-[2rem] overflow-hidden shadow-xl"
              >
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-choc/90 via-choc/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-8 text-white">
                  <h3 className="text-2xl mb-2 text-white">{service.title}</h3>
                  <p className="text-sm text-white/80 font-light line-clamp-3">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-16">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <Phone size={18} />
              Inquire About Prices
            </a>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section id="portfolio" className="section-container">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-5xl md:text-7xl mb-4 leading-tight">Recent Glam Sessions</h2>
            <p className="text-ink/60 text-lg uppercase tracking-wider">Showcasing the artistry of Abby's Glam Bar</p>
          </div>
          <a href="https://instagram.com/abbysglambar_" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-primary-dark font-semibold">
            Follow @abbysglambar_
            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <motion.div 
          variants={stagger}
          initial="initial"
          whileInView="whileInView"
          className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8"
        >
          {images.portfolio.map((img, i) => (
            <motion.div 
              key={i}
              variants={fadeIn}
              className="aspect-square rounded-2xl md:rounded-[2.5rem] overflow-hidden shadow-lg group relative"
            >
              <img 
                src={img} 
                alt="Portfolio Work" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Instagram className="text-white" size={32} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-choc/5 rounded-[4rem] mx-6 mb-24 overflow-hidden relative">
        <div className="section-container grid md:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeIn}>
            <h2 className="text-5xl md:text-6xl mb-12">Why Choose Abby’s Glam Bar?</h2>
            <div className="space-y-8">
              {[
                { title: "6+ Years Experience", desc: "Expert hands with a deep understanding of facial features and diverse skin tones." },
                { title: "Premium Products", desc: "We use only high-end, dermatologist-approved beauty products for long-lasting results." },
                { title: "Jalingo Based", desc: "The top choice for beauty in Taraba State, conveniently located and ready to serve." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary-dark">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                    <p className="text-ink/70 font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div {...fadeIn} className="hidden md:block relative">
            <div className="aspect-square bg-gradient-to-tr from-primary/30 to-secondary rounded-full absolute -top-20 -right-20 blur-3xl opacity-50"></div>
            <img 
              src={images.service1} 
              alt="Premium Setup" 
              className="relative z-10 w-full h-auto rounded-[3rem] shadow-2xl rotate-3"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Final CTA Footer */}
      <section className="bg-primary pt-24 pb-32 relative overflow-hidden text-white">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="section-container relative z-10 text-center">
          <motion.div {...fadeIn} className="max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-7xl mb-8 text-white">Ready for your transformation?</h2>
            <p className="text-xl md:text-2xl mb-12 text-white/90 font-light italic">
              I am currently booking for {new Date().toLocaleDateString('en-US', { month: 'long' })} and {new Date(new Date().setMonth(new Date().getMonth() + 1)).toLocaleDateString('en-US', { month: 'long' })}. Message me to secure your date!
            </p>
            <a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-4 px-10 py-6 bg-white text-primary-dark rounded-full shadow-2xl hover:bg-secondary transition-all transform hover:-translate-y-1"
            >
              <div className="p-2 bg-green-500 rounded-full text-white">
                <MessageCircle size={24} />
              </div>
              <span className="text-xl font-bold uppercase tracking-widest">Chat with Abby on WhatsApp</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary px-6 pt-16 pb-8 border-t border-primary/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div>
              <span className="font-serif text-3xl font-bold text-primary-dark mb-6 block tracking-tighter">Abby's <span className="italic text-ink font-normal opacity-50">Glam Bar</span></span>
              <p className="text-ink/60 leading-relaxed font-light">
                Professional artistry that celebrates your unique beauty. Based in Jalingo, serving clients nationwide.
              </p>
            </div>
            
            <div className="space-y-4">
              <h5 className="font-bold uppercase tracking-widest text-xs opacity-50 mb-6">Contact Details</h5>
              <div className="flex items-center gap-3 text-ink/80">
                <MapPin size={18} className="text-primary" />
                <span>Jalingo, Taraba State (Travel available)</span>
              </div>
              <div className="flex items-center gap-3 text-ink/80">
                <Phone size={18} className="text-primary" />
                <span>+234 904 909 6420</span>
              </div>
              <div className="flex items-center gap-3 text-ink/80">
                <Instagram size={18} className="text-primary" />
                <a href="https://instagram.com/abbysglambar_" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">@abbysglambar_</a>
              </div>
            </div>

            <div>
              <h5 className="font-bold uppercase tracking-widest text-xs opacity-50 mb-6">Quick Links</h5>
              <div className="flex flex-col gap-3 text-ink/80">
                <a href="#services" className="hover:text-primary transition-colors">Services Info</a>
                <a href="#about" className="hover:text-primary transition-colors">The Artist Biography</a>
                <a href="#portfolio" className="hover:text-primary transition-colors">Work Gallery</a>
                <a href={WHATSAPP_URL} className="hover:text-primary transition-colors">Pricing Inquiry</a>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-primary/20 text-ink/40 text-sm">
            <p>Copyright © Abby’s Glam Bar {new Date().getFullYear()}</p>
            <div className="flex gap-8 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

