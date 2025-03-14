import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section className="flex items-center gap-[132px] mt-[84px] p-20 max-md:flex-col max-md:gap-10 max-md:p-10 max-sm:p-5">
      <div className="flex flex-col gap-6 max-w-[745px]">
        <h2 className="text-[32px] font-bold text-black">Who we are</h2>
        <p className="text-base text-black text-justify">
          <span className="font-bold">Sprout and Sprint</span> adopts a
          developmental and play-based approach to support children in
          developing skills and reaching their full potential. Our team
          specializes in using play as a tool to improve social skills, language
          and communication skills, motor skills, and sensory integration. We
          create a safe and fun environment for your child to learn and grow,
          while also providing support and guidance for families. At Sprout and
          Sprint, we believe that every child deserves a chance to thrive.
          Sprout and Sprint offer individualized home-based therapy programs
          that are tailored to your child's needs and goals.
        </p>
      </div>
      <div className="flex w-[379px] h-[515px] px-[9px] py-[7px] rounded-[212.5px] border-4 border-solid border-[#397B57] max-sm:w-full max-sm:h-auto">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/25593257ffbdd72188e1d1fcf60eb09919ec052e"
          className="w-[360px] h-[499px] rounded-[180px] max-sm:w-full max-sm:h-auto"
          alt="Colorful hands representing child development"
        />
      </div>
    </section>
  );
};

export default AboutSection;
