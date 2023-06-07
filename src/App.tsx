import React, { useState } from "react";
import Slides from "./components/Slides";

function App() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const slides = [
    { url: require("./assets/images/1.jpg") },
    { url: require("./assets/images/2.jpg") },
    { url: require("./assets/images/3.jpg") },
    { url: require("./assets/images/4.jpg") },
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
      <Slides
        prevSlide={prevSlide}
        nextSlide={nextSlide}
        goToSlide={goToSlide}
        slides={slides}
        currentIndex={currentIndex}
      />
    </div>
  );
}

export default App;
