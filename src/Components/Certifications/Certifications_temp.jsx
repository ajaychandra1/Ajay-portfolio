import React from "react";
import { FaCertificate } from "react-icons/fa";

const Certifications = () => {
  return (
    <div
      id="Certifications"
      className="min-h-screen bg-white text-black px-6 md:px-24 py-12 flex flex-col justify-center"
    >
      <h1 className="text-3xl md:text-5xl font-bold mb-10 text-center">Certifications</h1>

      <div className="grid md:grid-cols-2 gap-10 md:gap-16">
        {/* Certification Card 1 */}
        <div className="flex gap-6 bg-gray-100 shadow-md p-6 rounded-2xl items-center hover:scale-105 transition duration-300">
          <FaCertificate color="#e4b300" size={50} />
          <div>
            <h2 className="text-xl font-semibold">Joy of Computing using Python</h2>
            <p className="text-md text-gray-600">Certified by NPTEL – 2024</p>
          </div>
        </div>

        {/* Certification Card 2 */}
        <div className="flex gap-6 bg-gray-100 shadow-md p-6 rounded-2xl items-center hover:scale-105 transition duration-300">
          <FaCertificate color="#e4b300" size={50} />
          <div>
            <h2 className="text-xl font-semibold">Data Structures Using C</h2>
            <p className="text-md text-gray-600">Certified by SIVA Academy – 2024</p>
          </div>
        </div>

        {/* Certification Card 3 */}
        <div className="flex gap-6 bg-gray-100 shadow-md p-6 rounded-2xl items-center hover:scale-105 transition duration-300 md:col-span-2">
          <FaCertificate color="#e4b300" size={50} />
          <div>
            <h2 className="text-xl font-semibold">Java Full Stack Development</h2>
            <p className="text-md text-gray-600">Certified by SIVA Academy – 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
