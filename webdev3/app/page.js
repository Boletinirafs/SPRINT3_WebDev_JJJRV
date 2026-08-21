"use client"

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AccessibilitySection from "@/components/AccessibilitySection";
import PrototypeSection from "@/components/PrototypeSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <HeroSection />
        <AboutSection />
        <AccessibilitySection />
        <PrototypeSection />
        <TeamSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}