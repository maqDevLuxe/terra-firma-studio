/**
 * MetricsSection — Space & Light Metrics on dark background
 * Dramatic dark section with large typographic numbers
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const metrics = [
  { value: "2.4M", unit: "sq ft", label: "Spaces Designed" },
  { value: "340+", unit: "days", label: "Avg Natural Light Hours / Year" },
  { value: "67%", unit: "", label: "Energy Reduction Achieved" },
  { value: "14", unit: "countries", label: "Global Presence" },
];

const MetricsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 bg-earth-dark relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-5">
        <img
          src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1600&q=30"
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
      </div>

      <div ref={ref} className="relative px-8 md:px-16 lg:px-20">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="font-body text-xs tracking-[0.3em] uppercase text-earth-terracotta text-center mb-4"
        >
          By the Numbers
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-4xl md:text-5xl font-light text-earth-cream text-center mb-20"
        >
          Space & Light
        </motion.h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              className="text-center"
            >
              <span className="font-display text-5xl md:text-7xl font-light text-earth-cream">
                {metric.value}
              </span>
              {metric.unit && (
                <span className="font-body text-sm text-earth-stone ml-2">
                  {metric.unit}
                </span>
              )}
              <p className="font-body text-xs tracking-widest uppercase text-earth-stone mt-4">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
