import React from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import Navbar from "./Navbar";

type SlidesProps = {
  currentIndex: number;
  slides: any[];
  prevSlide(): void;
  nextSlide(): void;
  goToSlide(slideIndex: number): void;
  isNavbar: boolean;
  toggleNavber(): void;
};

export default function Slides({
  prevSlide,
  nextSlide,
  goToSlide,
  slides,
  currentIndex,
  isNavbar,
  toggleNavber,
}: SlidesProps) {
  return (
    <div className="relative h-screen w-full m-auto snap-start">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full bg-center bg-cover bg-fixed duration-300 flex flex-col justify-between"
      >
        <Navbar isNavbar={isNavbar} toggleNavber={toggleNavber} />
        <div className="flex top-4 justify-center items-center py-2">
          {slides.map((slide, slideIndex) => (
            <div
              className={`text-2xl text-white cursor-pointer ${
                currentIndex === slideIndex ? "text-gray-600" : ""
              }`}
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft size={30} onClick={prevSlide} />
      </div>
      <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight size={30} onClick={nextSlide} />
      </div>
    </div>
  );
}
