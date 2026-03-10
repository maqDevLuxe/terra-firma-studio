/**
 * HeroSection — Split-screen design with parallax image
 * Left: Typography + CTA
 * Right: Parallax architecture image
 */
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex">
      {/* Left — Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-16 lg:px-20 py-32"
      >
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-8"
        >
          Architecture &amp; Interior Design
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[0.9] text-foreground mb-8"
        >
          Crafting
          <br />
          <span className="italic font-light text-accent">timeless</span>
          <br />
          spaces
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-body text-base text-muted-foreground max-w-md leading-relaxed mb-10"
        >
          We blend contemporary vision with enduring materiality to create
          architecture that resonates with the soul of each space.
        </motion.p>

        <motion.a
          href="#projects"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="inline-flex items-center gap-3 font-body text-sm tracking-widest uppercase text-foreground hover:text-accent transition-colors group"
        >
          View Projects
          <span className="block w-12 h-px bg-accent group-hover:w-20 transition-all duration-300" />
        </motion.a>
      </motion.div>

      {/* Right — Parallax Image */}
      <div className="hidden lg:block absolute right-0 top-0 w-1/2 h-full parallax-container">
        <motion.div style={{ y }} className="absolute inset-0 -top-[15%] h-[130%]">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80"
            alt="Modern architectural interior with natural light"
            className="w-full h-full object-cover"
            loading="eager"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-transparent" />
        </motion.div>
      </div>

      {/* Mobile image fallback */}
      <div className="absolute inset-0 lg:hidden -z-10">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
          alt="Modern architectural interior"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>
    </section>
  );
};

export default HeroSection;
