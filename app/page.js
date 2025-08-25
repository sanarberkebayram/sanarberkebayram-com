'use client';
import TargetCursor from "./components/TargetCursor";
import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";
import HeroSection from "./sections/HeroSection";
import WorkSection from "./sections/WorkSection";

export default function Home() {
    return (
        <main className="container mx-auto px-4 pt-8 md:pt-24 pb-8 md:pb-4 space-y-16 md:space-y-24 relative z-10 scroll-smooth">
            <TargetCursor spinDuration={2} hideDefaultCursor={false} />
            <HeroSection />
            <AboutSection />
            <WorkSection/>
        <ContactSection/>
        </main>
    );
}
