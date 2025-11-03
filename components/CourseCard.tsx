import Image from "next/image";
import React from "react";

type CourseCardType = {
    level: string,
    weeks: number,
    head: string,
    modules: number,
    includes: string[],
}

const CourseCard = ({ level, weeks, head, modules, includes } : CourseCardType) => {
  return (
    <div className="h-108 justify-between flex flex-col md:w-80 w-full p-4 bg-white/3 rounded-2xl">
      <div>
        <div className="flex text-sm md:text-md justify-between items-center w-full">
        <div className="bg-white/3 py-1.5 px-5 rounded-full">{level}</div>
        <p className="text-base">{weeks} weeks</p>
      </div>
      <div className="flex mt-8 flex-col gap-1">
        <h1 className="text-xl md:text-2xl font-semibold">
          {head}
        </h1>
        <p className="text-white/50">{modules} modules included</p>
      </div>
      <div className="flex mt-6 flex-col gap-4">
        {
            includes.map(data => (
                <div key={data.length} className="flex gap-2 items-center">
          <Image
            src="/coins.svg"
            alt=""
            width={100}
            height={100}
            className="w-6 transition-all duration-300 h-auto"
          />
          <p className="text-white/50">{data}</p>
        </div>
            ))
        }
      </div>
      </div>
       <button className="bg-linear-to-r hover:scale-105 transition-all duration-300 font-semibold w-full from-[#8064EE] to-base rounded-full px-6 py-3">
          Learn More
        </button>
    </div>
  );
};

export default CourseCard;
