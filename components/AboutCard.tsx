import Image from "next/image";
import React from "react";

type AboutCardTypes = {
    img: string,
    head: string,
    text: string,
}

const AboutCard = ({ img, head, text } : AboutCardTypes) => {
  return (
    <div className="h-56 hover:scale-105 transition-all duration-300 w-72 md:w-96 flex flex-col gap-6 p-4 rounded-2xl bg-white/3">
      <Image
        src={img}
        alt=""
        width={100}
        height={100}
        className="w-10 transition-all duration-300 h-auto"
      />
      <div className="flex flex-col gap-2">
        <h1 className="md:text-2xl text-xl font-semibold">{head}</h1>
        <p className="text-white/50 text-sm md:text-md">
        {text}
        </p>
      </div>
    </div>
  );
};

export default AboutCard;
