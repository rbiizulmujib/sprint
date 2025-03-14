import React from "react";

const ApproachSection: React.FC = () => {
  return (
    <section className="flex justify-center items-center gap-[75px] bg-[#C1E5D2] p-20 max-md:flex-col max-md:gap-10 max-md:p-10 max-sm:p-5">
      <div className="flex flex-col gap-6 max-w-[652px]">
        <h2 className="text-[32px] font-bold text-black">Our Approach</h2>
        <div className="flex flex-col gap-[42px] max-w-[518px]">
          <p className="text-base text-black">
            At Sprout and Sprint, we are dedicated to helping every child reach
            their full potential and achieve incredible things in life. Through
            our nurturing approach, we empower children to sprout and sprint
            towards their goals with confidence.
          </p>
          <blockquote className="flex flex-col gap-6 max-w-md">
            <p className="italic leading-[25px]">
              "Being Playful naturally liberates the MIND, opens the HEART, and
              lifts the SPIRIT. Take time to play today."
            </p>
            <cite className="font-bold leading-[25px]">
              - Debra L . Reble, Phd -
            </cite>
          </blockquote>
        </div>
      </div>
      <div className="flex w-[553px] h-[427px] overflow-hidden p-[9px] rounded-[138px] border-2 border-solid border-[#397B57] max-sm:w-full max-sm:h-auto">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c2cb8c406d4d213718a5c7833efcc64da45dd0aa"
          className="w-full h-full object-cover rounded-[130px]"
          alt="Children playing and learning together"
        />
      </div>
    </section>
  );
};

export default ApproachSection;
