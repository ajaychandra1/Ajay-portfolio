import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import Certifications from "./Components/Certifications/Certifications_temp";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TheatreGallery from "./Components/TheatreGallery.jsx/TheatreGallery";
import Highlights from "./Components/Highlights.jsx/Highlights";
import VideoGallery from "./Components/VideoGallery/VideoGallery";


function App() {
  return (
    <div className="bg-white h-auto w-full overflow-hidden">
      <Navbar />
      <Home />
      <About />
      <TheatreGallery />
      <VideoGallery />
      <Highlights />
      <Footer />
      
    </div>
  );
}

export default App;
