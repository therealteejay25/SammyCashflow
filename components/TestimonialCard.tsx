import Image from "next/image";
import React from "react";

const TestimonialCard = () => {
  return (
    <div className="w-full gap-5 md:w-84 hover:scale-105 transition-all duration-300 flex flex-col p-6 rounded-2xl bg-white/3 h-56">
      <div className="flex gap-4">
        <Image
        src="/star.svg"
        alt=""
        width={100}
        height={100}
        className="w-7 transition-all duration-300 h-auto"
      />
        <Image
        src="/star.svg"
        alt=""
        width={100}
        height={100}
        className="w-7 transition-all duration-300 h-auto"
      />
        <Image
        src="/star.svg"
        alt=""
        width={100}
        height={100}
        className="w-7 transition-all duration-300 h-auto"
      />
        <Image
        src="/star.svg"
        alt=""
        width={100}
        height={100}
        className="w-7 transition-all duration-300 h-auto"
      />
        <Image
        src="/star.svg"
        alt=""
        width={100}
        height={100}
        className="w-7 transition-all duration-300 h-auto"
      />
      </div>
      <p className="text-sm md:text-md">{'"TradeMaster Academy completely transformed my trading journey. The structured curriculum and live sessions helped me achieve consistent profitability within 6 months."'}</p>
    </div>
  );
};

export default TestimonialCard;
