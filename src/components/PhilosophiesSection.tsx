/**
 * PhilosophiesSection — Core design philosophies in 3 columns
 * Asymmetric layout with oversized numbering
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const philosophies = [
  {
    num: "01",
    title: "Material Honesty",
    description:
      "We celebrate raw textures — stone, timber, concrete — allowing each material to speak its own language. Authenticity in every surface.",
  },
  {
    num: "02",
    title: "Light as Medium",
    description:
      "Natural light is our most vital material. We sculpt spaces that transform with the sun's arc, creating living environments that breathe.",
  },
  {
    num: "03",
    title: "Contextual Empathy",
    description:
      "Every project emerges from deep dialogue with its landscape, culture, and community — architecture that belongs to its place.",
  },
];

const PhilosophiesSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 px-8 md:px-16 lg:px-20">
      <div ref={ref}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-4"
        >
          Our Philosophy
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-4xl md:text-6xl font-light text-foreground mb-20"
        >
          Core Principles
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {philosophies.map((item, i) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + i * 0.15 }}
              className="group"
            >
              <span className="font-display text-7xl md:text-8xl font-light text-border group-hover:text-accent/30 transition-colors duration-500">
                {item.num}
              </span>
              <h3 className="font-display text-2xl font-light text-foreground mt-4 mb-4">
                {item.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophiesSection;
