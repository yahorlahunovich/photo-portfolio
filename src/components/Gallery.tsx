import React from "react";
import { Link } from "react-router-dom";

type GalleryProps = {
  photos: any[];
};

const Gallery = ({ photos }: GalleryProps) => {
  return (
    <div className="p-5">
      <Link to="/" className="underline">back home</Link>
      <h1 className="text-3xl sm:text-5xl font-semibold text-center mb-10 mt-3">
        Some of my works
      </h1>
      <div className="flex flex-col sm:flex-row gap-10 items-center justify-center flex-wrap">
        {photos.map((photo) => (
          <div key={Math.random().toString()} className="h-auto w-auto">
            <img
              src={photo.src}
              className="object-fill"
              alt="myPersonalPhoto"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
