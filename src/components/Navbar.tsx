import React from "react";
import { BsFillCameraFill } from "react-icons/bs";

export default function Navbar() {
  return (
    <nav className="relative text-white flex flex-row justify-between px-5 py-7">
      <div>
        <a href="#home" className="flex items-center">
          {" "}
          <span> Egor Lagunovich </span>
          <BsFillCameraFill className="ml-2" size={30} />{" "}
        </a>
      </div>
      <div>
        <ul className="flex flex-row gap-3">
          <li>
            <a href="#aboutMe">About Me</a>
          </li>
          <li>
            <a href="#portfolio" className="">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
