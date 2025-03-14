import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center h-32 bg-[#C1E5D2] px-20 py-0 border-b-[#2F6D4B] border-b border-solid max-md:px-10 max-md:py-0 max-sm:px-5 max-sm:py-0">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9077f13e0384cbea0a791187dfb91cbaecc5ac44"
        className="w-[191px] h-[190px]"
        alt="Sprout and Sprint logo"
      />
      <nav className="flex items-center gap-[75px] max-sm:hidden">
        <Link to="/" className="text-base text-black px-5 py-[5px] rounded-lg">
          Home
        </Link>
        <Link to="/" className="text-base text-black px-5 py-[5px] rounded-lg">
          About Us
        </Link>
        <Link to="/" className="text-base text-black px-5 py-[5px] rounded-lg">
          Our Programs
        </Link>
        <Link to="/" className="text-base text-black px-5 py-[5px] rounded-lg">
          Contact Us
        </Link>
      </nav>
      <div className="flex items-center gap-6">
        <a href="https://instagram.com" aria-label="Instagram">
          <svg
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="social-icon"
          >
            <path
              d="M16.9099 10.014C12.7123 10.014 9.23438 13.432 9.23438 17.6895C9.23438 21.947 12.6524 25.365 16.9099 25.365C21.1674 25.365 24.5853 21.8871 24.5853 17.6895C24.5853 13.492 21.1074 10.014 16.9099 10.014ZM16.9099 22.6066C14.2114 22.6066 11.9928 20.3879 11.9928 17.6895C11.9928 14.9911 14.2114 12.7724 16.9099 12.7724C19.6083 12.7724 21.827 14.9911 21.827 17.6895C21.827 20.3879 19.6083 22.6066 16.9099 22.6066Z"
              fill="#397B57"
            />
            <path
              d="M24.8855 11.5732C25.8459 11.5732 26.6244 10.7946 26.6244 9.83419C26.6244 8.87378 25.8459 8.09521 24.8855 8.09521C23.9251 8.09521 23.1465 8.87378 23.1465 9.83419C23.1465 10.7946 23.9251 11.5732 24.8855 11.5732Z"
              fill="#397B57"
            />
            <path
              d="M29.383 5.33685C27.8239 3.7178 25.6052 2.8783 23.0867 2.8783H10.7339C5.51702 2.8783 2.03906 6.35625 2.03906 11.5732V23.866C2.03906 26.4444 2.87857 28.6631 4.55758 30.2822C6.17663 31.8413 8.33536 32.6208 10.7939 32.6208H23.0267C25.6052 32.6208 27.7639 31.7813 29.323 30.2822C30.9421 28.7231 31.7816 26.5044 31.7816 23.9259V11.5732C31.7816 9.05466 30.9421 6.89593 29.383 5.33685ZM29.1431 23.9259C29.1431 25.7848 28.4835 27.2839 27.4041 28.3033C26.3248 29.3227 24.8257 29.8624 23.0267 29.8624H10.7939C8.99497 29.8624 7.49585 29.3227 6.41649 28.3033C5.33712 27.224 4.79744 25.7249 4.79744 23.866V11.5732C4.79744 9.77424 5.33712 8.27512 6.41649 7.19576C7.43589 6.17636 8.99497 5.63667 10.7939 5.63667H23.1466C24.9456 5.63667 26.4447 6.17636 27.5241 7.25572C28.5435 8.33509 29.1431 9.8342 29.1431 11.5732V23.9259Z"
              fill="#397B57"
            />
          </svg>
        </a>
        <a href="https://facebook.com" aria-label="Facebook">
          <svg
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="social-icon"
          >
            <g clipPath="url(#clip0_103_620)">
              <path
                d="M34 17.1033C34 7.71442 26.3888 0.103271 17 0.103271C7.61115 0.103271 0 7.71442 0 17.1033C0 25.5885 6.21669 32.6214 14.3438 33.8967V22.0173H10.0273V17.1033H14.3438V13.358C14.3438 9.09733 16.8817 6.7439 20.7649 6.7439C22.6249 6.7439 24.5703 7.07593 24.5703 7.07593V11.2595H22.4267C20.3149 11.2595 19.6562 12.5699 19.6562 13.9143V17.1033H24.3711L23.6174 22.0173H19.6562V33.8967C27.7834 32.6214 34 25.5885 34 17.1033Z"
                fill="#2F6D4B"
              />
            </g>
            <defs>
              <clipPath id="clip0_103_620">
                <rect width="34" height="34" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </a>
      </div>
    </header>
  );
};

export default Header;
