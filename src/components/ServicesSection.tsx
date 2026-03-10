/**
 * ServicesSection — Design services in minimal cards
 * Clean grid with subtle hover interactions
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    title: "Architectural Design",
    desc: "Full-service design from concept through construction documentation for residential and commercial projects.",
    icon: "◻",
  },
  {
    title: "Interior Architecture",
    desc: "Holistic interior environments that integrate spatial planning, materials, lighting, and custom furnishings.",
    icon: "◈",
  },
  {
    title: "Landscape Integration",
    desc: "Seamless connection between built form and natural landscape, creating dialogue between inside and outside.",
    icon: "◇",
  },
  {
    title: "Renovation & Restoration",
    desc: "Sensitive transformation of existing structures, honoring heritage while introducing contemporary comfort.",
    icon: "△",
  },
  {
    title: "Sustainable Consulting",
    desc: "Expert guidance on passive design, renewable materials, and certification pathways for green building.",
    icon: "○",
  },
  {
    title: "Project Management",
    desc: "End-to-end oversight ensuring quality, timeline adherence, and budget alignment from start to finish.",
    icon: "□",
  },
];

const ServicesSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 bg-secondary">
      <div ref={ref} className="px-8 md:px-16 lg:px-20">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-4"
        >
          What We Offer
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-4xl md:text-6xl font-light text-foreground mb-20"
        >
          Services
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="group p-8 bg-background border border-border hover:border-accent/40 transition-all duration-500"
            >
              <span className="text-3xl text-accent mb-6 block">
                {service.icon}
              </span>
              <h3 className="font-display text-xl font-light text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                {service.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
