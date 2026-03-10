/**
 * Index — Main landing page for Archi.Studio
 * Boutique architecture firm portfolio — 14 sections
 */
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedInSection from "@/components/FeaturedInSection";
import PhilosophiesSection from "@/components/PhilosophiesSection";
import ProjectsSection from "@/components/ProjectsSection";
import DesignSolutionsSection from "@/components/DesignSolutionsSection";
import MetricsSection from "@/components/MetricsSection";
import ProcessSection from "@/components/ProcessSection";
import ServicesSection from "@/components/ServicesSection";
import StudioShowcaseSection from "@/components/StudioShowcaseSection";
import StatCountersSection from "@/components/StatCountersSection";
import BlogSection from "@/components/BlogSection";
import ClientSatisfactionSection from "@/components/ClientSatisfactionSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <main>
      {/* 1. Navigation */}
      <Navbar />
      {/* 2. Hero — Parallax split-screen */}
      <HeroSection />
      {/* 3. Featured In — Press logos */}
      <FeaturedInSection />
      {/* 4. Core Philosophies — 3 columns */}
      <PhilosophiesSection />
      {/* 5. Innovative Design Solutions */}
      <DesignSolutionsSection />
      {/* 6. Selected Projects — Scroll reveals */}
      <ProjectsSection />
      {/* 7. Space & Light Metrics — Dark bg */}
      <MetricsSection />
      {/* 8. Client Collaboration Process */}
      <ProcessSection />
      {/* 9. Design Services — Minimal cards */}
      <ServicesSection />
      {/* 10. Studio Showcase — Large image area */}
      <StudioShowcaseSection />
      {/* 11. Stat Counters — Animated numbers */}
      <StatCountersSection />
      {/* 12. Design Insights / Blog */}
      <BlogSection />
      {/* 13. Client Satisfaction */}
      <ClientSatisfactionSection />
      {/* 14. Testimonials slider */}
      <TestimonialsSection />
      {/* 15. Consultation CTA & Footer */}
      <ContactSection />
    </main>
  );
};

export default Index;
