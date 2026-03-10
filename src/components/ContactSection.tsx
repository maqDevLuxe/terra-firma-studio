/**
 * ContactSection — Consultation CTA + Minimalist Footer
 * Final conversion section with elegant footer
 */
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ContactSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      {/* CTA Section */}
      <section id="contact" className="py-32 px-8 md:px-16 lg:px-20 relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=40"
            alt=""
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-background/90" />
        </div>

        <div ref={ref} className="max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-6"
          >
            Start Your Journey
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-light text-foreground mb-8"
          >
            Book a free
            <br />
            <span className="italic">consultation</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-body text-base text-muted-foreground mb-10 max-w-lg mx-auto"
          >
            Every great space begins with a conversation. Share your vision and
            let's explore what's possible together.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="mailto:studio@archistudio.com"
              className="inline-block px-10 py-4 bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase hover:bg-accent transition-colors duration-300"
            >
              Schedule a Call
            </a>
            <a
              href="mailto:studio@archistudio.com"
              className="inline-block px-10 py-4 border border-primary text-foreground font-body text-sm tracking-widest uppercase hover:border-accent hover:text-accent transition-colors duration-300"
            >
              Send a Brief
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-earth-dark py-16 px-8 md:px-16 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="font-display text-2xl font-light tracking-wider text-earth-cream">
              ARCHI<span className="text-earth-terracotta">.</span>STUDIO
            </a>
            <p className="font-body text-sm text-earth-stone mt-4 max-w-sm leading-relaxed">
              Boutique architecture and interior design studio creating timeless
              spaces that resonate with the soul.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-body text-xs tracking-widest uppercase text-earth-warm mb-4">
              Studio
            </h4>
            <ul className="space-y-3">
              {["Projects", "About", "Services", "Journal"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="font-body text-sm text-earth-stone hover:text-earth-terracotta transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-body text-xs tracking-widest uppercase text-earth-warm mb-4">
              Contact
            </h4>
            <ul className="space-y-3 font-body text-sm text-earth-stone">
              <li>studio@archistudio.com</li>
              <li>+44 20 7946 0958</li>
              <li>
                12 Clerkenwell Road
                <br />
                London EC1M 5PQ
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-earth-stone/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-body text-xs text-earth-stone/60 tracking-wider">
            © 2026 Archi.Studio — All rights reserved
          </p>
          <div className="flex gap-8">
            {["Instagram", "LinkedIn", "Behance", "Pinterest"].map((social) => (
              <a
                key={social}
                href="#"
                className="font-body text-xs tracking-widest uppercase text-earth-stone/60 hover:text-earth-terracotta transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContactSection;
