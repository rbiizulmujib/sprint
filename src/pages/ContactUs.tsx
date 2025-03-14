
import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Your message has been sent successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
    }, 1000);
  };

  return (
    <div className="max-w-none bg-[#C1E5D2] mx-auto font-['Manrope',sans-serif]">
      <Header />

      <main className="relative min-h-screen pb-32">
        {/* Decorative shapes */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#D6F0E0] rounded-full -mt-20 -mr-20 z-0"></div>

        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto">
            {/* Image container */}
            <div className="w-full md:w-1/2">
              <div className="border-4 border-[#397B57] rounded-full overflow-hidden max-w-[500px] mx-auto">
                <img
                  src="/lovable-uploads/47b5c6e1-f8bc-4925-967b-86603d45e0f5.png"
                  alt="Child playing with colorful educational blocks"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Form container */}
            <div className="w-full md:w-1/2 bg-transparent">
              <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="block text-sm font-medium">
                      First Name*
                    </label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="border-[#397B57] bg-white"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="block text-sm font-medium">
                      Last Name*
                    </label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="border-[#397B57] bg-white"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email*
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-[#397B57] bg-white"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="border-[#397B57] bg-white"
                  />
                </div>
                
                <div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#397B57] hover:bg-[#2F6D4B] text-white px-8 py-3 rounded-full"
                  >
                    {isSubmitting ? "Sending..." : "Send"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactUs;
