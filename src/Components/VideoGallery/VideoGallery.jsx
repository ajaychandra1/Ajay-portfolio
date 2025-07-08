import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const videos = [
      {
    title: "Journey With Time",
    url: "https://youtube.com/embed/CpCRHCOEcdw",
  },
  {
    title: "Caste and Religious Hatred",
    url: "https://www.youtube.com/embed/sV4ACohtKjc",
  },
  {
    title: "Dora Tyrannic Rule Scene",
    url: "https://youtube.com/embed/lpf7rT9nRpA",
  },
  {
    title: "YAMALOKAM SCENE",
    url: "https://youtube.com/embed/_uTGFpjBWLM",
  },

  {
    title: "Madhaytharagathi Mandahasam Part 1",
    url: "https://www.youtube.com/embed/yyP0tAgAvY0",
  },
  {
    title: "Madhaytharagathi Mandahasam Part 2",
    url: "https://youtube.com/embed/LQNbNLNQgRk",
  },
  {
    title: "Madhaytharagathi Mandahasam Part 3",
    url: "https://youtube.com/embed/OhdNIgQJP40",
  },
  {
    title: "Madhaytharagathi Mandahasam Part 4",
    url: "https://youtube.com/embed/neBJHdeCWno",
  },
  {
    title: "Naa Aathma Ghosha",
    url: "https://youtube.com/embed/LZCk4k1qSwY",
  },

];

const VideoGallery = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      current.scrollBy({
        left: direction === "left" ? -320 : 320,
        behavior: "smooth",
      });
    }
  };

  return (
    <div id="VideoGallery" className="py-16 px-6 md:px-20 bg-white text-black">
      <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center">
         Video Gallery
      </h2>

      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full z-10 hover:bg-gray-800"
        >
          <FaArrowLeft />
        </button>

        {/* Scrollable Video Row */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth py-4 px-2"
        >
          {videos.map((video, index) => (
            <div key={index} className="min-w-[320px]">
              <iframe
                src={video.url}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-60 md:h-72 rounded-lg shadow-md"
              ></iframe>
              <p className="mt-2 text-sm font-semibold text-center">{video.title}</p>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full z-10 hover:bg-gray-800"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default VideoGallery;
