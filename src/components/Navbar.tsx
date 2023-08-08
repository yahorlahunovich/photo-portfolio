import React from "react";
import { BsFillCameraFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

type NavbarProps = {
  isNavbar: boolean;
  toggleNavber(): void;
};

export default function Navbar({ isNavbar, toggleNavber }: NavbarProps) {
  return (
    <nav className="relative text-white flex flex-row justify-between px-5 py-7">
      <header>
        <a href="#home" className="flex items-center">
          {" "}
          <span className="uppercase font-bold text-sm sm:text-2xl">
            {" "}
            Egor Lagunovich{" "}
          </span>
          <BsFillCameraFill className="ml-2 sm:block hidden" size={30} />{" "}
        </a>
      </header>
      <div>
        <ul className="hidden sm:flex flex-row gap-3 uppercase font-semibold text-md">
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
        <div className="flex flex-col">
          <div
            className="sm:hidden flex justify-end mb-2"
            onClick={toggleNavber}
          >
            <GiHamburgerMenu size={15} />
          </div>
          {isNavbar ? (
            <ul
              className="flex-col bg-gray-500 bg-opacity-80 p-5 uppercase font-semibold text-md"
            >
              <li className="mb-5">
                <a href="#aboutMe" className="hover:text-gray-300">
                  About Me
                </a>
              </li>
              <li className="mb-5">
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
          ) : (
            ""
          )}
        </div>
      </div>
    </nav>
  );
}
