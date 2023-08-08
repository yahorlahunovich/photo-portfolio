import React from "react";
import { BsChevronCompactDown } from "react-icons/bs";
import { Link } from "react-router-dom";

type PortfolioProps = {
  photos: any[];
};

export default function Portfolio({ photos }: PortfolioProps) {
  return (
    <div className="bg-white w-full h-auto sm:h-screen snap-start p-10" id="portfolio">
      <h1 className="text-center mb-10 uppercase text-2xl font-bold">
        My works
      </h1>
      <div className="flex flex-col sm:flex-row gap-10 items-center justify-center flex-wrap">
        {photos.map((photo) => (
          <div className="w-3/4 sm:w-1/4" key={Math.random().toString()}>
            <img src={photo.url} className='object-fill'  alt="myPersonalPhoto" />
          </div>
        ))}
      </div>
      <Link to="/portfolio" className="flex flex-col justify-center items-center mx-auto mt-8">
        See more{" "}
        <div className="text-xl rounded-full p-2 mt-2 bg-black/10 text-black cursor-pointer">
          <BsChevronCompactDown />
        </div>
      </Link>
    </div>
  );
}
