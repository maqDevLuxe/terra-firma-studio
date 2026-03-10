/**
 * BlogSection — Design insights / blog preview
 * Asymmetric card layout with featured article
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const posts = [
  {
    title: "The Future of Biophilic Design in Urban Spaces",
    category: "Sustainability",
    date: "Feb 2026",
    image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80",
    alt: "Green architecture with integrated plant systems",
    featured: true,
  },
  {
    title: "Material Narratives: Stone in Modern Architecture",
    category: "Materials",
    date: "Jan 2026",
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=600&q=80",
    alt: "Stone textures in architectural detail",
    featured: false,
  },
  {
    title: "Light, Shadow & the Psychology of Space",
    category: "Design Theory",
    date: "Dec 2025",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=80",
    alt: "Dramatic light and shadow in interior space",
    featured: false,
  },
];

const BlogSection = () => {
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
          Journal
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-4xl md:text-6xl font-light text-foreground mb-20"
        >
          Design Insights
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Featured post */}
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="group cursor-pointer"
          >
            <div className="overflow-hidden mb-6">
              <img
                src={posts[0].image}
                alt={posts[0].alt}
                className="w-full aspect-[3/2] object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            <p className="font-body text-xs tracking-widest uppercase text-accent mb-2">
              {posts[0].category} — {posts[0].date}
            </p>
            <h3 className="font-display text-2xl md:text-3xl font-light text-foreground group-hover:text-accent transition-colors duration-300">
              {posts[0].title}
            </h3>
          </motion.article>

          {/* Other posts */}
          <div className="flex flex-col gap-8">
            {posts.slice(1).map((post, i) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.15 }}
                className="group cursor-pointer flex gap-6"
              >
                <div className="w-32 h-32 flex-shrink-0 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <div>
                  <p className="font-body text-xs tracking-widest uppercase text-accent mb-2">
                    {post.category} — {post.date}
                  </p>
                  <h3 className="font-display text-lg font-light text-foreground group-hover:text-accent transition-colors duration-300">
                    {post.title}
                  </h3>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
