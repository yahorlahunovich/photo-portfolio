import React, { useState } from "react";
import Slides from "./components/Slides";
import Navbar from "./components/Navbar";
import Information from "./components/Information";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const slides = [
    { url: require("./assets/images/1.jpg") },
    { url: require("./assets/images/2.jpg") },
    { url: require("./assets/images/antw.jpg") },
    { url: require("./assets/images/desert-main.jpg") },
  ];
  const photos = [
    { url: require("./assets/images/1.jpg") },
    { url: require("./assets/images/2.jpg") },
    { url: require("./assets/images/3.jpg") },
    { url: require("./assets/images/desert-main.jpg") },
    { url: require("./assets/images/antw.jpg") },
    { url: require("./assets/images/uni.jpg") },
  ];
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <div>
      <main className="snap-y snap-proximity overflow-y-scroll h-screen duration-300 scroll-smooth">
        <Slides
          prevSlide={prevSlide}
          nextSlide={nextSlide}
          goToSlide={goToSlide}
          slides={slides}
          currentIndex={currentIndex}
        />
        <Information />
        <Portfolio photos={photos} />
        <Contact />
      </main>
    </div>
  );
}

export default App;
