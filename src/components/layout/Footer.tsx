import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="flex justify-between text-white bg-[#397B57] px-20 py-6 max-md:flex-col max-md:items-center max-md:text-center max-md:gap-10 max-sm:p-5">
      <div className="flex flex-col gap-[19px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7775266eea64d3112fdad482c41e28b03ce311c1"
          className="w-[127px] h-[120px] max-sm:w-[100px] max-sm:h-auto"
          alt="Sprout and Sprint logo"
        />
        <div className="text-base">Copyright 2024 © Sprout and Sprint</div>
      </div>
      <div className="flex flex-col items-end gap-[34px] max-md:items-center">
        <h2 className="text-[32px] font-bold">Contact Us</h2>
        <address className="text-base leading-[30px] text-right max-md:text-center not-italic">
          Tel: (65) 8298 4508
          <br />
          Email:{" "}
          <a
            href="mailto:sproutandsprint@gmail.com"
            className="text-white hover:underline"
          >
            sproutandsprint@gmail.com
          </a>
          <br />
          Biz Reg Number: UEN 53464972J
        </address>
      </div>
    </footer>
  );
};

export default Footer;
