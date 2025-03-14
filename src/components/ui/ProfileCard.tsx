import React from "react";

interface ProfileCardProps {
  imageSrc: string;
  name: string;
  role: string;
  altText?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  imageSrc,
  name,
  role,
  altText,
}) => {
  return (
    <div className="flex flex-col items-center gap-9 max-sm:w-full">
      <div className="flex h-[441px] overflow-hidden p-2 rounded-[169px] border-2 border-solid border-[#397B57] max-sm:w-full max-sm:h-auto">
        <img
          src={imageSrc}
          className="w-full h-full object-cover rounded-[159px] max-sm:w-full max-sm:h-auto"
          alt={altText || name}
        />
      </div>
      <div className="flex flex-col items-center gap-4">
        <h3 className="text-2xl font-bold text-black">{name}</h3>
        <p className="text-base text-black">{role}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
