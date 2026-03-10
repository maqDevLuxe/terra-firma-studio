/**
 * DesignSolutionsSection — Innovative design solutions showcase
 * Split layout with large image and text overlay
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const DesignSolutionsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 bg-secondary">
      <div ref={ref} className="px-8 md:px-16 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=900&q=80"
              alt="Innovative architectural design with flowing forms"
              className="w-full aspect-[4/5] object-cover"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-earth-dark/80 to-transparent">
              <p className="font-body text-xs tracking-[0.3em] uppercase text-earth-warm">
                Award-Winning Design
              </p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-6">
              Innovation
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground leading-tight mb-8">
              Pushing boundaries
              <br />
              through <span className="italic">design</span>
            </h2>
            <p className="font-body text-base text-muted-foreground leading-relaxed mb-8">
              Our innovative approach merges cutting-edge sustainable technology
              with timeless design principles. Every solution is crafted to
              challenge conventions while maintaining harmony with nature and
              human experience.
            </p>

            <div className="space-y-6">
              {[
                { label: "Sustainable Materials", value: "92%" },
                { label: "Energy Efficiency", value: "85%" },
                { label: "Client Satisfaction", value: "98%" },
              ].map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between mb-2">
                    <span className="font-body text-sm text-foreground">
                      {item.label}
                    </span>
                    <span className="font-body text-sm text-accent">
                      {item.value}
                    </span>
                  </div>
                  <div className="h-px bg-border">
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={inView ? { scaleX: 1 } : {}}
                      transition={{ duration: 1.2, delay: 0.5 }}
                      className="h-full bg-accent origin-left"
                      style={{ width: item.value }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DesignSolutionsSection;
