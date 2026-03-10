/**
 * ClientSatisfactionSection — Client satisfaction metrics
 * Clean visual with satisfaction ratings
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ratings = [
  { label: "Design Quality", score: 4.9 },
  { label: "Communication", score: 4.8 },
  { label: "Timeline Adherence", score: 4.7 },
  { label: "Overall Experience", score: 4.9 },
];

const ClientSatisfactionSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 px-8 md:px-16 lg:px-20">
      <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-6"
          >
            Client Happiness
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-4xl md:text-5xl font-light text-foreground leading-tight mb-8"
          >
            Built on <span className="italic">trust</span>
            <br />& transparency
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-body text-base text-muted-foreground leading-relaxed"
          >
            Our collaborative approach ensures every client feels heard,
            informed, and delighted throughout the entire journey — from first
            sketch to final handover.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-8"
        >
          {ratings.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
            >
              <div className="flex justify-between mb-2">
                <span className="font-body text-sm text-foreground">
                  {item.label}
                </span>
                <span className="font-display text-2xl font-light text-accent">
                  {item.score}
                </span>
              </div>
              <div className="h-1 bg-border rounded-full overflow-hidden">
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={inView ? { scaleX: 1 } : {}}
                  transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                  className="h-full bg-accent rounded-full origin-left"
                  style={{ width: `${(item.score / 5) * 100}%` }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientSatisfactionSection;
