/**
 * ProjectsSection — Asymmetrical grid with scroll-triggered image reveals
 * Uses Unsplash architecture photography
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Project {
  title: string;
  category: string;
  year: string;
  image: string;
  alt: string;
  size: "large" | "small";
}

const projects: Project[] = [
  {
    title: "The Slate Residence",
    category: "Residential",
    year: "2025",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1000&q=80",
    alt: "Modern minimalist residence with floor-to-ceiling windows",
    size: "large",
  },
  {
    title: "Horizon Loft",
    category: "Interior",
    year: "2024",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    alt: "Bright loft interior with warm wood tones",
    size: "small",
  },
  {
    title: "Ember Pavilion",
    category: "Commercial",
    year: "2024",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    alt: "Luxury modern pavilion with pool and landscape",
    size: "small",
  },
  {
    title: "Terra House",
    category: "Residential",
    year: "2023",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1000&q=80",
    alt: "Earth-toned modern house with natural materials",
    size: "large",
  },
  {
    title: "Solace Studio",
    category: "Workspace",
    year: "2023",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
    alt: "Minimalist workspace interior with warm lighting",
    size: "small",
  },
  {
    title: "Stone & Light",
    category: "Residential",
    year: "2023",
    image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80",
    alt: "Stone facade house with dramatic lighting",
    size: "small",
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: index % 2 === 0 ? 0 : 0.2, ease: "easeOut" }}
      className={`group cursor-pointer ${
        project.size === "large" ? "md:col-span-2 md:row-span-2" : ""
      }`}
    >
      {/* Image container with reveal */}
      <div className="relative overflow-hidden aspect-[4/3] mb-5">
        <motion.div
          initial={{ scaleX: 1 }}
          animate={isInView ? { scaleX: 0 } : {}}
          transition={{ duration: 0.8, delay: index % 2 === 0 ? 0.2 : 0.4, ease: "easeInOut" }}
          className="absolute inset-0 bg-secondary z-10 origin-right"
        />
        <img
          src={project.image}
          alt={project.alt}
          className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-earth-dark/0 group-hover:bg-earth-dark/20 transition-colors duration-500" />
      </div>

      {/* Project info */}
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-display text-xl md:text-2xl font-light text-foreground group-hover:text-accent transition-colors duration-300">
            {project.title}
          </h3>
          <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mt-1">
            {project.category}
          </p>
        </div>
        <span className="font-body text-xs text-muted-foreground">{project.year}</span>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 px-8 md:px-16 lg:px-20">
      {/* Section header */}
      <div ref={headerRef} className="mb-20">
        <motion.p
          initial={{ opacity: 0 }}
          animate={headerInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-4"
        >
          Selected Work
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-4xl md:text-6xl font-light text-foreground"
        >
          Projects
        </motion.h2>
      </div>

      {/* Asymmetrical grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
