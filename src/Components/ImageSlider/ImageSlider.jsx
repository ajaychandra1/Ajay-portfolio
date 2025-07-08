import React from "react";
import Slider from "react-slick";

import img5 from "../../assets/1000085715(1).jpg";
import img1 from "../../assets/1000085837.jpg";
import img3 from "../../assets/1000087231.jpg";
import img2 from "../../assets/1000087234.jpg";
import img4 from "../../assets/1000087235(1)(1)(1).jpg";
import img7 from "../../assets/pho1(1).jpg";
import img8 from "../../assets/pho2(1).jpg";
import img9 from "../../assets/pho3(1).jpg";


const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
  };

  const images = [img1, img3, img5,img7, img8, img9];

  return (
    <div className="w-full h-[80h] md:h-full overflow-hidden rounded-xl shadow-xl">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="h-[80vh] md:h-full">
        <img
  src={img}
  alt={`Slide ${index + 1}`}
  className="w-full h-[875px] object-cover rounded-xl"
/>

          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
