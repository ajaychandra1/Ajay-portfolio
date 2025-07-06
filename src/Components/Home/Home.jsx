import React from "react";
import ImageSlider from "../ImageSlider/ImageSlider";

const Home = () => {
  return (
    <div className="w-full bg-white text-black flex flex-col md:flex-row">
      {/* Left: Image Slider */}
      <div className="w-full md:w-1/2 h-[60vh] md:h-screen flex justify-center items-center px-4">
        <div className="w-full md:w-[90%] h-full">
          <ImageSlider />
        </div>
      </div>

      {/* Right: Intro Text */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center md:text-left px-6 md:px-12 py-8">
        <div>
          <h1 className="text-3xl md:text-6xl font-bold mb-3">Ajay Chandra</h1>
          <h2 className="text-lg md:text-2xl text-gray-600 mb-5">Actor</h2>
          <p className="text-base md:text-xl text-gray-700 max-w-xl mb-4">
            I’m an aspiring actor from Prakasham District, Andhra Pradesh.
            With a passion for storytelling, I began my journey in theatre
            during my BCA at New Horizon College, Bengaluru. I’ve performed in
            20+ stage plays.
          </p>
          <p className="text-base md:text-xl text-gray-700 max-w-xl mb-4">
            I’ve also acted in short films, including a lead role in
            "3 2 1 Journey With Time." Acting is how I share stories,
            and I’m committed to growing in both theatre and cinema.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
