/**
 * ProcessSection — Client collaboration process
 * Horizontal stepped process with connecting lines
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    num: "01",
    title: "Discovery",
    desc: "Deep listening sessions to understand your vision, lifestyle, and aspirations for the space.",
  },
  {
    num: "02",
    title: "Concept",
    desc: "Translating ideas into spatial narratives through sketches, material palettes, and moodboards.",
  },
  {
    num: "03",
    title: "Design",
    desc: "Detailed architectural drawings and 3D visualization bringing every dimension to life.",
  },
  {
    num: "04",
    title: "Realization",
    desc: "Meticulous project management ensuring flawless execution from foundation to finishing.",
  },
];

const ProcessSection = () => {
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
          How We Work
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-4xl md:text-6xl font-light text-foreground mb-20"
        >
          Our Process
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-8 left-[12%] right-[12%] h-px bg-border" />

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
              className="relative"
            >
              <div className="w-16 h-16 rounded-full border border-accent flex items-center justify-center mb-6 bg-background relative z-10">
                <span className="font-display text-lg text-accent">
                  {step.num}
                </span>
              </div>
              <h3 className="font-display text-2xl font-light text-foreground mb-3">
                {step.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
