import React from "react";
import img1 from "../../assets/collage1.jpg";
import img2 from "../../assets/collage2.jpg";

const TheatreGallery = () => {
  return (
    <div id="TheatreGallery" className="w-screen text-center bg-gray-100">
      <h2 className="text-2xl md:text-4xl font-bold py-6">My Gallery</h2>

      {/* Image 1 */}
      <div className="w-full h-[100vh] md:h-screen">
        <img
          src={img1}
          alt="Theatre Collage 1"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Image 2 */}
      <div className="w-full h-[100vh] md:h-screen">
        <img
          src={img2}
          alt="Theatre Collage 2"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default TheatreGallery;
