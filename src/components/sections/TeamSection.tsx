import React from "react";
import ProfileCard from "../ui/ProfileCard";

const TeamSection: React.FC = () => {
  const teamMembers = [
    {
      id: 1,
      name: "James Ho",
      role: "Training Director",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/0b17e7fe94452a678580d945575e228086c1af7e",
      altText: "James Ho - Training Director",
    },
    {
      id: 2,
      name: "Maude Le Roux",
      role: "Advisory Partner",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/2e2dc155b723f20fdb54db7fe58545c8b82193ba",
      altText: "Maude Le Roux - Advisory Partner",
    },
    {
      id: 3,
      name: "Denise",
      role: "DIRFloortime® Practitioner",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/1edbf7c612fb46b19b967dff3f0dc3631d3fba8c",
      altText: "Denise - DIRFloortime® Practitioner",
    },
  ];

  return (
    <section className="text-center p-20">
      <h2 className="text-[32px] font-bold text-black">Our Team</h2>
      <div className="flex justify-center gap-14 mt-[100px] max-md:flex-col max-md:items-center">
        {teamMembers.map((member) => (
          <ProfileCard
            key={member.id}
            imageSrc={member.imageSrc}
            name={member.name}
            role={member.role}
            altText={member.altText}
          />
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
