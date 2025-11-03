import React from "react";

const Hero = () => {
  return (
    <div className="min-h-screen w-screen overflow-hidden flex flex-col items-center justify-center relative">
      <div className="bg-base h-96 w-96 md:blur-[250px] blur-[1000px] absolute -left-10 -top-10"></div>
      <div className="bg-base h-96 w-96 md:blur-[250px] blur-[1000px] absolute -right-10 -top-10"></div>
      <div className="bg-base h-96 w-96 md:blur-[300px] blur-[1000px] absolute bottom-0"></div>

      <div className="z-20 flex flex-col gap-4 justify-center items-center text-center">
       <div className="flex flex-col gap-2">
         <h1 className="md:text-4xl text-3xl font-semibold">
          Elevate Your Trading Experience{" "}
        </h1>
        <p className="text-white/50">Unlock your trading potential in a fully regulated environment and watch yourself grow.</p>
       </div>
        <button className="bg-white/10 font-semibold hover:scale-105 transition-all duration-300 rounded-full px-6 py-3">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
