import React from "react";
import { BsFillCameraFill } from "react-icons/bs";

export default function Navbar() {
  return (
    <nav className="relative text-white flex flex-row justify-between px-5 py-7">
      <header>
        <a href="#home" className="flex items-center">
          {" "}
          <span className="uppercase font-bold text-2xl">
            {" "}
            Egor Lagunovich{" "}
          </span>
          <BsFillCameraFill className="ml-2" size={30} />{" "}
        </a>
      </header>
      <div>
        <ul className="flex flex-row gap-3 uppercase font-semibold text-md">
          <li>
            <a href="#aboutMe" className="hover:text-gray-300">
              About Me
            </a>
          </li>
          <li>
            <a href="#portfolio" className="hover:text-gray-300">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-300">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
