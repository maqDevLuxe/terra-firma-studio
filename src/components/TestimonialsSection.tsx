/**
 * TestimonialsSection — Client testimonials slider
 * Elegant carousel with quotes
 */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote:
      "Archi.Studio didn't just design our home — they understood the way we live. Every room feels intentional, every view carefully framed.",
    name: "Helena & Marcus Chen",
    project: "The Slate Residence",
  },
  {
    quote:
      "Their ability to balance bold vision with practical execution is remarkable. Our office became a space people genuinely love working in.",
    name: "James Whitfield",
    project: "Horizon Commercial Tower",
  },
  {
    quote:
      "From the first meeting, we felt a deep commitment to our vision. The result exceeded every expectation we had.",
    name: "Sofia Andersson",
    project: "Terra House",
  },
  {
    quote:
      "The attention to material detail is extraordinary. Three years later, the spaces feel even more beautiful as they age with grace.",
    name: "David & Priya Kapoor",
    project: "Ember Pavilion",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-32 bg-earth-dark">
      <div className="px-8 md:px-16 lg:px-20 max-w-4xl mx-auto text-center">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-earth-terracotta mb-12">
          Client Voices
        </p>

        <div className="relative min-h-[280px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl font-light text-earth-cream leading-relaxed italic mb-10">
                &ldquo;{testimonials[current].quote}&rdquo;
              </blockquote>
              <p className="font-body text-sm text-earth-warm tracking-wider">
                {testimonials[current].name}
              </p>
              <p className="font-body text-xs text-earth-stone tracking-widest uppercase mt-1">
                {testimonials[current].project}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-8 mt-12">
          <button
            onClick={prev}
            className="font-body text-xs tracking-widest uppercase text-earth-stone hover:text-earth-terracotta transition-colors"
            aria-label="Previous testimonial"
          >
            ← Prev
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  i === current ? "bg-earth-terracotta" : "bg-earth-stone/30"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="font-body text-xs tracking-widest uppercase text-earth-stone hover:text-earth-terracotta transition-colors"
            aria-label="Next testimonial"
          >
            Next →
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
