import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex flex-col md:flex-row justify-around bg-black text-white p-10 md:p-12 items-start md:items-center"
    >
      {/* Title Section */}
      <div className="mb-6 md:mb-0">
        <h1 className="text-2xl md:text-5xl font-bold">Contact</h1>
        <h3 className="text-base md:text-xl font-normal mt-2">
          Feel free to reach out!
        </h3>
      </div>

      {/* Contact Info */}
      <ul className="text-sm md:text-lg space-y-4">
        <li className="flex items-center gap-3">
          <FaPhoneAlt />
          <span>+91 79755 29585</span>
        </li>
        <li className="flex items-center gap-3">
          <MdOutlineEmail />
          <a
            href="mailto:ajaychandra7022001@mail.com"
            className="hover:underline"
          >
            ajaychandra7022001@mail.com
          </a>
        </li>
        <li className="flex items-center gap-3">
          <FaInstagram />
          <a
            href="https://instagram.com/ajay_chandra.7"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            @ajay_chandra.7
          </a>
        </li>
        <li className="flex items-center gap-3">
          <FaMapMarkerAlt />
          <span>Hyderabad, India</span>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
