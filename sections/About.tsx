import AboutCard from "@/components/AboutCard";
import Header from "@/components/Header";
import React from "react";

const About = () => {
  const aboutData = [
    {
      id: 1,
      img: "/book.svg",
      head: "Comprehensive Curriculum",
      text:
        "From beginner basics to advanced strategies, our structured courses cover everything you need to succeed.",
    },
    {
      id: 2,
      img: "/users.svg",
      head: "Live Trading Sessions",
      text:
        "Join daily live sessions with professional traders and learn real-time market analysis.",
    },
    {
      id: 3,
      img: "/medal.svg",
      head: "Certification Programs",
      text:
        "Earn recognized certifications that validate your trading knowledge and skills.",
    },
    {
      id: 4,
      img: "/chart.svg",
      head: "Proven Strategies",
      text:
        "Learn battle-tested trading strategies that have generated consistent returns.",
    },
    {
      id: 5,
      img: "/shield.svg",
      head: "Risk Management",
      text:
        "Master the art of protecting your capital with advanced risk management techniques.",
    },
    {
      id: 6,
      img: "/clock.svg",
      head: "Lifetime Access",
      text:
        "Get unlimited access to all course materials, updates, and community support.",
    },
  ];

  return (
    <div className="min-h-screen p-10 flex flex-col justify-center items-center w-screen">
      <Header
        head="Why choose SammyCashflow?"
        text="Everything you need to become a confident and profitable trader."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3">
        {aboutData.map((data) => (
          <div key={data.id}>
            <AboutCard img={data.img} head={data.head} text={data.text} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
