import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";

export default function Navbar() {
  const [dropdown, setDropdown] = useState(false);

  const showDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <nav className="w-full h-24 flex flex-col justify-center items-center bg-white fixed z-20">
      <div className="container mx-auto lg:px-6">
        <div className="lg:w-full w-11/12 mx-auto h-full flex justify-between items-center">
          <div className="flex flex-col gap-y-4">
            <div className="flex items-center gap-x-2">
              <span className="flex items-center lg:text-5xl text-3xl">
                <button className="rounded-full py-1 text-white bg-primary lg:text-5xl text-3xl outline-none border-none">
                  Jo
                </button>
                <p className="font-semibold leading-tight">bline</p>
              </span>
            </div>
          </div>
          <ul className="flex-1 flex justify-center items-center xl:gap-12 gap-x-4 max-lg:hidden">
            <a
              href="#"
              className="leading-normal no-underline text-black font-bold text-lg hover:text-primary"
            >
              Find Jobs
            </a>
            <a
              href="#"
              className="leading-normal no-underline text-black font-bold text-lg hover:text-primary"
            >
              People
            </a>
            <a
              href="#"
              className="leading-normal no-underline text-black font-bold text-lg hover:text-primary"
            >
              Hiring sites
            </a>
            <a
              href="#"
              className="leading-normal no-underline text-black font-bold text-lg hover:text-primary"
            >
              Resume
            </a>
          </ul>
          <div className="flex max-lg:hidden gap-x-4">
            <button className="rounded-full bg-[#f3f3f4] text-lg text-black border-none font-bold px-8 py-3 hoverBtn">
              Sign Up
            </button>
            <button className="rounded-full bg-primary text-lg text-white border-none font-bold px-8 py-3 hoverBtn">
              Sign In
            </button>
          </div>
          {dropdown ? (
            <div
              onClick={showDropdown}
              className="lg:hidden text-[22px] cursor-pointer text-black"
            >
              <MdClose />
            </div>
          ) : (
            <div
              onClick={showDropdown}
              className="lg:hidden text-[22px] cursor-pointer text-black"
            >
              <HiMenuAlt3 />
            </div>
          )}
        </div>
        {dropdown ? (
          <div
            onClick={showDropdown}
            className="lg:hidden w-full h-[100vh] fixed top-24 bg-black ease-in-out duration-100"
          >
            <div className="w-full h-[320px] flex flex-col items-baseline pt-8 gap-4">
              <ul className="text-center p-0 flex flex-col justify-center w-full gap-y-8">
                <a
                  href="#"
                  className="leading-normal no-underline text-white font-bold text-lg hover:text-primary"
                >
                  Find Jobs
                </a>
                <a
                  href="#"
                  className="leading-normal no-underline text-white font-bold text-lg hover:text-primary"
                >
                  People
                </a>
                <a
                  href="#"
                  className="leading-normal no-underline text-white font-bold text-lg hover:text-primary"
                >
                  Hiring sites
                </a>
                <a
                  href="#"
                  className="leading-normal no-underline text-white font-bold text-lg hover:text-primary"
                >
                  Resume
                </a>
              </ul>
              <div className="flex flex-col justify-center items-center w-full gap-y-8 mt-4">
                <button className="rounded-full bg-[#f3f3f4] text-lg text-black border-none font-bold px-8 py-3 hoverBtn">
                  Sign Up
                </button>
                <button className="rounded-full bg-primary text-lg text-white border-none font-bold px-8 py-3 hoverBtn">
                  Sign In
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  );
}
