import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Background } from "@/components/layout/Background";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SystemDesignSection } from "@/components/sections/SystemDesignSection";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { CursorGlow } from "@/components/ui/cursor-glow";
import { ScrollProgress } from "@/components/ui/scroll-progress";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center">
      <CursorGlow />
      <ScrollProgress />
      <Background />
      <Header />
      
      <div className="w-full max-w-6xl px-6 md:px-12 flex flex-col gap-12 md:gap-24 relative z-10">
        <HeroSection />
        <AboutSection />
        <TechStackSection />
        <ProjectsSection />
        <SystemDesignSection />
        <TimelineSection />
        <ContactSection />
      </div>

      <Footer />
    </main>
  );
}
