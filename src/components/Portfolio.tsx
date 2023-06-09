import React from "react";
import { BsChevronCompactDown } from "react-icons/bs";

type PortfolioProps = {
  photos: any[];
};

export default function Portfolio({ photos }: PortfolioProps) {
  return (
    <div className="bg-white w-full h-screen snap-start p-10" id="portfolio">
      <h1 className="text-center mb-10 uppercase text-2xl font-bold">
        My works
      </h1>
      <div className="flex flex-row gap-10 items-center justify-center flex-wrap">
        {photos.map((photo) => (
          <div className="w-1/4">
            <img src={photo.url} alt="" />
          </div>
        ))}
      </div>
      <button className="flex flex-col justify-center items-center mx-auto mt-8">
        See more{" "}
        <div className="text-xl rounded-full p-2 bg-black/10 text-black cursor-pointer">
          <BsChevronCompactDown />
        </div>
      </button>
    </div>
  );
}
