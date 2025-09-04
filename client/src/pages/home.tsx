import { useEffect } from "react";
import BubbleNavigation from "@/components/bubble-navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ProjectsSection from "@/components/projects-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  useEffect(() => {
    // Refresh AOS on route change
    if (typeof (window as any).AOS !== 'undefined') {
      (window as any).AOS.refresh();
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <BubbleNavigation />
      
      <main>
        <HeroSection />
        
        <div className="section-divider"></div>
        <AboutSection />
        
        <div className="section-divider"></div>
        <ProjectsSection />
        
        <div className="section-divider"></div>
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
}
