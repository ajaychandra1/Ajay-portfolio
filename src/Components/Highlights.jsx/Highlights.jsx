import React from "react";

const highlights = [
  {
    title: "",
    content:
      "A highlight of my theatre journey has been playing seven roles—including a landlord, a freedom fighter, and Chithra Guptha—in the thought-provoking play *Bathukantha Deshanidi*, which beautifully depicts the life of the legendary writer Kolloji Narayanarao Garu.",
  },
  {
    title: "",
    content:
      "I brought to life the character of a middle-class worker facing the hardships of financial pressure and societal expectations in *Hush Kaki*, a play penned by distinguished writer and actor LB Sriram Garu.",
  },
  {
    title: "",
    content:
      "I brought comic relief to the stage as a funny painter in the renowned play *Madhyatharagathi Mandhahasam*, penned by the esteemed Jandhyala Garu.",
  },
];

const Highlights = () => {
  return (
    <div id="Highlights" className="bg-white text-black px-6 md:px-20 py-16">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12"> Highlights</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {highlights.map((highlight, index) => (
          <div
            key={index}
            className="bg-gray-100 hover:bg-gray-200 p-6 rounded-2xl shadow-md transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-2 text-indigo-800">{highlight.title}</h3>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed italic">
              “{highlight.content}”
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Highlights;
