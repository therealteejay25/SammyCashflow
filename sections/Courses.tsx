import React from "react";
import Header from "@/components/Header";
import CourseCard from "@/components/CourseCard";

const Courses = () => {

    const courseData = [
        {
            id: 1,
            level: "Beginner",
            weeks: 4,
            head: "Trading Fundamentals",
            modules: 12,
            includes: ["Market basics and terminology", "Chart reading fundamentals", "Order types and execution", "Basic technical indicators"]
        },
        {
            id: 2,
            level: "Intermediate",
            weeks: 6,
            head: "Technical Analysis Mastery",
            modules: 18,
            includes: ["Advanced chart patterns", "Indicator combinations", "Price action strategies", "Market structure analysis"]
        },
        {
            id: 3,
            level: "Advanced",
            weeks: 8,
            head: "Advanced Trading Strategies",
            modules: 24,
            includes: ["Options and derivatives", "Algorithmic trading basics", "Portfolio management", "Advanced risk strategies"]
        },
    ]

  return (
    <div className="min-h-screen p-10 flex flex-col justify-center items-center w-screen">
      <Header
        head="Our Trading Courses."
        text="Structured learning paths designed to take you from beginner to expert."
      />
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {
            courseData.map(data => (
                <div key={data.id}>
                    <CourseCard level={data.level} weeks={data.weeks} head={data.head} modules={data.modules} includes={data.includes} />
                </div>
            ))
        }
      </div>
    </div>
  );
};

export default Courses;
