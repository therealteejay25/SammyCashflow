"use client";
import Image from "next/image";
import React, { useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(true);

  return (
    <div className="flex z-50 fixed backdrop-blur-md justify-between w-screen items-center p-4">
      <div className="flex z-10 justify-between w-screen items-center">
        <div>
          <Image
            src="/logo.svg"
            alt=""
            width={100}
            height={100}
            className="w-44 h-auto"
          />
        </div>
        <div onClick={() => setShow(!show)} className="md:hidden block">
          {show ? (
            <Image
              src="/list.svg"
              alt=""
              width={100}
              height={100}
              className="w-7 transition-all duration-300 h-auto"
            />
          ) : (
            <Image
              src="/x.svg"
              alt=""
              width={100}
              height={100}
              className="w-7 transition-all duration-300 h-auto"
            />
          )}
        </div>
        <div className="md:flex hidden gap-8">
          <a className="font-medium hover:text-base transition-all duration-300" href="#">
            Features
          </a>
          <a className="font-medium hover:text-base transition-all duration-300" href="#">
            Courses
          </a>
          <a className="font-medium hover:text-base transition-all duration-300" href="#">
            FAQ
          </a>
          <a className="font-medium hover:text-base transition-all duration-300" href="#">
            Contact
          </a>
        </div>
        <button className="hidden md:block bg-linear-to-r hover:scale-105 transition-all duration-300 font-semibold from-[#8064EE] to-base rounded-full px-6 py-3">
          Get Started
        </button>
      </div>
      <div
        className={`absolute w-screen p-20 flex items-center justify-center bg-dark/80 transition-all duration-300 top-0 left-0 ${
          show ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="flex flex-col gap-4 text-center items-center justify-center">
          <a className="font-semibold" href="#">
            Features
          </a>
          <a className="font-semibold" href="#">
            Courses
          </a>
          <a className="font-semibold" href="#">
            FAQ
          </a>
          <a className="font-semibold" href="#">
            Contact
          </a>
          <button className="bg-linear-to-r hover:scale-105 transition-all duration-300 font-semibold from-[#8064EE] to-base rounded-full px-6 py-3">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
