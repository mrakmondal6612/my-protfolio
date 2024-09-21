import React from "react";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="px-6 md:px-0 mt-12 text-white/70 py-8 max-w-[1000px] mx-auto border-t border-gray-700 pt-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Mr. AK</h1>
      <div className="flex space-x-6 mt-4">
        <a className="hover:text-gray-300" href="#">
          <FaInstagram size={24} />
        </a>
        <a className="hover:text-gray-300" href="#">
          <FaLinkedin size={24} />
        </a>
        <a className="hover:text-gray-300" href="#">
          <FaTwitter size={24} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
