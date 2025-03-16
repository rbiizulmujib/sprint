
import React from "react";
import { Link } from "react-router-dom";
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

        <section className="py-16 px-20 max-md:px-10 max-sm:px-5">
          <h2 className="text-[32px] font-bold text-black text-center mb-10">
            Contact Us
          </h2>
          <div className="flex flex-col items-center">
            <p className="text-center max-w-2xl mb-6">
              Want to learn more about our services or schedule a consultation? 
              Visit our detailed contact page or use the quick form below.
            </p>
            <Link 
              to="/contact" 
              className="mb-10 inline-flex items-center justify-center whitespace-nowrap rounded-md px-6 py-3 text-sm font-medium bg-[#397B57] text-white hover:bg-[#2F6D4B]"
            >
              Visit Contact Page
            </Link>
            {/* <div className="flex gap-10 max-md:flex-col w-full max-w-5xl">
              <div className="flex-1">
                <ContactForm />
              </div>
              <div className="w-80 max-md:w-full">
                <NewsletterSignup />
              </div>
            </div> */}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
