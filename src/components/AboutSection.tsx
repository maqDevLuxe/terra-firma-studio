/**
 * AboutSection — Firm philosophy with asymmetric layout
 */
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: "18+", label: "Years Experience" },
  { value: "120", label: "Projects Completed" },
  { value: "15", label: "Design Awards" },
];

const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 bg-secondary">
      <div ref={ref} className="px-8 md:px-16 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
          className="lg:col-span-5"
        >
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1600585153490-76fb20a32601?w=800&q=80"
              alt="Architectural detail showing material craftsmanship"
              className="w-full aspect-[3/4] object-cover"
              loading="lazy"
            />
            {/* Decorative offset frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-accent -z-10" />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:col-span-6 lg:col-start-7"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-6">
            Our Philosophy
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground leading-tight mb-8">
            Where form meets
            <br />
            <span className="italic">intention</span>
          </h2>
          <p className="font-body text-base text-muted-foreground leading-relaxed mb-6">
            At Archi.Studio, we believe every structure tells a story. Our designs emerge
            from deep listening — to the land, to light, and to the aspirations of the
            people who inhabit our spaces. We work at the intersection of materiality and
            emotion, creating environments that feel both inevitable and surprising.
          </p>
          <p className="font-body text-base text-muted-foreground leading-relaxed mb-12">
            Founded in 2008, our practice spans residential, commercial, and cultural
            projects across three continents. Each commission is an invitation to rethink
            what architecture can be.
          </p>

          {/* Stats */}
          <div className="flex gap-12 md:gap-16">
            {stats.map((stat) => (
              <div key={stat.label}>
                <span className="font-display text-3xl md:text-4xl font-light text-accent">
                  {stat.value}
                </span>
                <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
