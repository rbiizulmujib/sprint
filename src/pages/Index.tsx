import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AboutSection from "@/components/sections/AboutSection";
import VisionMissionSection from "@/components/sections/VisionMissionSection";
import ApproachSection from "@/components/sections/ApproachSection";
import TeamSection from "@/components/sections/TeamSection";
import ContactForm from "@/components/ContactForm";
import NewsletterSignup from "@/components/ui/newsletter-signup";

const Index: React.FC = () => {
  return (
    <div className="max-w-none bg-[#F6F6F6] mx-auto max-md:max-w-[991px] max-sm:max-w-screen-sm font-['Manrope',sans-serif]">
      <Header />

      <main>
        <AboutSection />
        <VisionMissionSection />
        <ApproachSection />
        <TeamSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
