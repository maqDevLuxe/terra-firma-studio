/**
 * StatCountersSection — Animated stat counters
 * Projects completed, awards, etc.
 */
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect } from "react";

const Counter = ({ target, label, suffix = "" }: { target: number; label: string; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    if (inView) {
      const controls = animate(count, target, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, target, count]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => {
      if (ref.current) ref.current.textContent = `${v}${suffix}`;
    });
    return unsubscribe;
  }, [rounded, suffix]);

  return (
    <div ref={containerRef} className="text-center">
      <span ref={ref} className="font-display text-5xl md:text-7xl font-light text-foreground">
        0
      </span>
      <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mt-4">
        {label}
      </p>
    </div>
  );
};

const StatCountersSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 px-8 md:px-16 lg:px-20">
      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-12"
        >
          <Counter target={120} label="Projects Completed" suffix="+" />
          <Counter target={15} label="Design Awards" />
          <Counter target={45} label="Team Members" />
          <Counter target={18} label="Years of Excellence" />
        </motion.div>
      </div>
    </section>
  );
};

export default StatCountersSection;
