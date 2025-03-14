import React from "react";

const VisionMissionSection: React.FC = () => {
  return (
    <section className="flex gap-[210px] bg-[#C1E5D2] p-20 max-md:flex-col max-md:gap-10 max-md:p-10 max-sm:p-5">
      <div className="flex flex-col gap-6 max-w-[517px]">
        <h2 className="text-[32px] font-bold text-black">Our Vision</h2>
        <p>
          To create a safe and fun space for every child to develop themselves
          and be confident in who they are.
        </p>
      </div>
      <div className="flex flex-col gap-6 max-w-[517px]">
        <h2 className="text-[32px] font-bold text-black">Our Mission</h2>
        <p>
          <span>Let children play, learn, and grow in their</span>{" "}
          <span className="font-bold">own unique way</span>
          <span>
            . We want to provide a space where children can do so without any
            stress and simultaneously build
          </span>{" "}
          <span className="font-bold">
            awareness and respect for their differences.
          </span>
        </p>
      </div>
    </section>
  );
};

export default VisionMissionSection;
