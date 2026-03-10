/**
 * FeaturedInSection — Press logos / publications
 * Displays logos of publications that have featured the firm
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const publications = [
  "Architectural Digest",
  "Dezeen",
  "Wallpaper*",
  "Dwell",
  "ArchDaily",
  "Monocle",
];

const FeaturedInSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-20 border-t border-b border-border">
      <div ref={ref} className="px-8 md:px-16 lg:px-20">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground text-center mb-12"
        >
          Featured In
        </motion.p>
        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
          {publications.map((pub, i) => (
            <motion.span
              key={pub}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="font-display text-2xl md:text-3xl font-light text-muted-foreground/50 hover:text-accent transition-colors duration-300 cursor-default"
            >
              {pub}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedInSection;
