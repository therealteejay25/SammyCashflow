import Hero from "@/sections/Hero";
import Navbar from "@/components/Navbar";
import About from "@/sections/About";
import Courses from "@/sections/Courses";

export default function Home() {
  return (
    <div className="bg-dark w-screen overflow-hidden min-h-screen">
     <Navbar />
     <Hero />
     <About />
     <Courses />
    </div>
  );
}
