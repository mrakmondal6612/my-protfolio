import React from "react";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="px-6 md:px-0 mt-12 text-white/70 py-8 max-w-[1000px] mx-auto border-t border-gray-700 pt-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Mr. AK</h1>
      <div className="flex space-x-3 text-[12px] min:text-[8px] md:text-[18px]">
        <a href="#" className="hover:text-gray-300">
          Home
        </a>
        <a href="#about" className="hover:text-gray-300">
          About Me
        </a>
        <a href="#portfolio" className="hover:text-gray-300">
          Portfolio
        </a>
      </div>
      <div className="flex space-x-3 md:px-4 justify-between items-center md:px-2">
        <a
          className="hover:text-gray-300"
          href="https://www.instagram.com/b.tech_ak/"
        >
          <FaInstagram size={20} />
        </a>
        <a
          className="hover:text-gray-300"
          href="https://www.linkedin.com/in/mr-ak/"
        >
          <FaLinkedin size={20} />
        </a>
        <a className="hover:text-gray-300" href="#">
          <FaTwitter size={20} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
