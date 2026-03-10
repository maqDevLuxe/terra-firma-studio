/**
 * StudioShowcaseSection — Large image area showcasing the studio
 * Full-width immersive imagery with minimal overlay text
 */
import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const StudioShowcaseSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section ref={ref} className="relative h-[80vh] overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 -top-[10%] h-[120%]">
        <img
          src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1600&q=80"
          alt="Archi.Studio workspace — open plan design studio"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </motion.div>
      <div className="absolute inset-0 bg-earth-dark/40" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="font-body text-xs tracking-[0.3em] uppercase text-earth-warm mb-6"
        >
          Visit Our Studio
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-earth-cream mb-6"
        >
          Where ideas <span className="italic">take form</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-body text-base text-earth-warm/80 max-w-lg"
        >
          Our London studio is a collaborative workshop where architects,
          designers, and craftspeople come together to shape the future of living.
        </motion.p>
      </div>
    </section>
  );
};

export default StudioShowcaseSection;
