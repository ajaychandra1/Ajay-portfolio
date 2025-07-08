import React from "react";
import AboutImg from "../../assets/1000087234.jpg";

const About = () => {
  return (
    <div id="About" className="w-full bg-white text-black py-12">
      <div className="flex flex-col md:flex-row h-auto md:h-[calc(100vh-6rem)]">
        
        {/* Left: Personal Details */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-10 md:pl-20 md:pr-10 py-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">About Me</h2>
          <ul className="text-lg md:text-2xl space-y-4 leading-relaxed">
            <li><strong>Name:</strong> Ajay Chandra</li>
            <li><strong>Age:</strong> 24 years</li>
            <li><strong>Height:</strong> 5'10"</li>
            <li><strong>Weight:</strong> 68 kg</li>
            <li><strong>Colour:</strong> Brown</li>
            <li><strong>Languages Known:</strong> Telugu, Kannada, Tamil, English, Hindi</li>
            <li><strong>Mother Tongue:</strong> Telugu</li>
            <li><strong>Work Experience:</strong> Theatre Plays, Short Films</li>
            <li><strong>Phone:</strong> 7975529585</li>
            <li><strong>Email:</strong> ajaychandra7022001@mail.com</li>
            <li><strong>Instagram:</strong> ajay_chandra.7</li>
            <li><strong>Location:</strong> Hyderabad</li>
          </ul>
        </div>

        {/* Right: Image */}
        <div className="w-full md:w-1/2 h-[300px] md:h-full">
          <img
            src={AboutImg}
            alt="Ajay Chandra"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
