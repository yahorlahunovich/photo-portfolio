import React, { useState } from "react";
import Slides from "./components/Slides";
import Information from "./components/Information";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import { Route, Routes } from "react-router-dom";
import Gallery from "./components/Gallery";

function App() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isNavbar, setIsNavbar] = useState<boolean>(false);
  const slides = [
    { url: require("./assets/images/1.jpg") },
    { url: require("./assets/images/2.jpg") },
    { url: require("./assets/images/alp1.jpg") },
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
  const galleryPhotos = [
    { src: require("./assets/images/1.jpg") },
    { src: require("./assets/images/2.jpg")},
    { src: require("./assets/images/3.jpg")},
    { src: require("./assets/images/4.jpg") },
    { src: require("./assets/images/alp1.jpg") },
    { src: require("./assets/images/alp2.jpg") },
    { src: require("./assets/images/alp3.jpg"), },
    { src: require("./assets/images/alp4.jpg"),  },
    { src: require("./assets/images/alp5.jpg")},
    { src: require("./assets/images/alp6.jpg") },
    { src: require("./assets/images/desert-main.jpg"),},
    { src: require("./assets/images/antw.jpg"),  },
    { src: require("./assets/images/antw2.jpg"),},
    { src: require("./assets/images/uni.jpg"),  },
    { src: require("./assets/images/rock.jpg"),},
    { src: require("./assets/images/wr1.jpg"),},
    { src: require("./assets/images/forest.jpg"), },
    { src: require("./assets/images/wr2.jpg"), },
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
  const toggleNavber = () => {
    setIsNavbar((prev) => !prev);
  };

  const Main = () => {
    return (
      <div>
        <main className="snap-y snap-proximity overflow-y-scroll h-screen duration-300 scroll-smooth">
          <Slides
            prevSlide={prevSlide}
            nextSlide={nextSlide}
            goToSlide={goToSlide}
            slides={slides}
            currentIndex={currentIndex}
            isNavbar={isNavbar}
            toggleNavber={toggleNavber}
          />
          <Information />
          <Portfolio photos={photos} />
          <Contact />
        </main>
      </div>
    );
  };
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/portfolio" element={<Gallery photos={galleryPhotos} />} />
    </Routes>
  );
}

export default App;
