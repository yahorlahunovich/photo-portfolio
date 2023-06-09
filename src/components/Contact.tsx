import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { Fa500Px } from "react-icons/fa";
import { BsPinterest } from "react-icons/bs";
import { ImFlickr4 } from "react-icons/im";

export default function Contact() {
  return (
    <div
      className="bg-black text-white w-full h-1/2 snap-start p-10 flex flex-col justify-center items-center gap-10"
      id="contact"
    >
      <div className="flex flex-row justify-center items-center gap-2 cursor-pointer">
        <a
          href="https://www.instagram.com/egorlagunovich"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillInstagram
            size={40}
            className="border-white rounded-full p-1 border-2 cursor-pointer"
          />
        </a>
        <a
          href="https://www.instagram.com/egorlagunovich"
          target="_blank"
          rel="noreferrer"
        >
          <Fa500Px
            size={40}
            className="border-white rounded-full p-1 border-2 cursor-pointer"
          />
        </a>
        <a
          href="https://pl.pinterest.com/egorlagunovich/"
          target="_blank"
          rel="noreferrer"
        >
          <BsPinterest
            size={40}
            className="border-white rounded-full p-1 border-2 cursor-pointer"
          />
        </a>
        <a
          href="https://www.flickr.com/photos/198474106@N05/"
          target="_blank"
          rel="noreferrer"
        >
          <ImFlickr4
            size={40}
            className="border-white rounded-full p-1 border-2 cursor-pointer"
          />
        </a>
      </div>
      <div className="text-center">
        <h2 className="uppercase text-xl font-bold italic mb-3">Egor lagunovich photography</h2>
        <p className="uppercase text-xl italic">
          Amateur photographer based in Poland and Belarus
        </p>
      </div>
    </div>
  );
}
