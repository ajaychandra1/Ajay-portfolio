import React from "react";
import { FaCss3, FaHtml5, FaJs } from "react-icons/fa";
import { SiSpringboot, SiMysql } from "react-icons/si";

const Experience = () => {
  return (
    <div
      id="Experience"
      className="bg-white text-black px-6 md:px-24 py-12 min-h-screen flex flex-col justify-center"
    >
      <h1 className="text-3xl md:text-5xl font-bold mb-10 text-center">Experience</h1>

      <div className="flex flex-col md:flex-row gap-10 items-center justify-between">
        {/* Tech Stack Icons */}
        <div className="flex flex-wrap justify-center md:justify-start gap-6 md:w-1/2">
          {[FaHtml5, FaCss3, FaJs, SiSpringboot, SiMysql].map((Icon, index) => (
            <div
              key={index}
              className="bg-gray-100 p-4 rounded-2xl shadow-md hover:scale-110 transition"
            >
              <Icon size={50} />
            </div>
          ))}
        </div>

        {/* Internship Description */}
        <div className="bg-gray-100 p-6 rounded-2xl shadow-lg md:w-1/2">
          <h2 className="text-xl font-bold mb-2">
            Full Stack Developer Intern, Tripillar Solutions
          </h2>
          <p className="text-md text-gray-600 mb-4">Oct 2024 – Dec 2024</p>
          <ul className="list-disc list-inside space-y-2 text-md text-gray-800">
            <li>Worked as a full-stack developer intern</li>
            <li>Handled both frontend and backend development</li>
            <li>Gained hands-on experience with core technologies</li>
            <li>Tech used: HTML, CSS, JavaScript, Spring Boot, MySQL, Core Java</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
