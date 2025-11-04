import Hero from "@/sections/Hero";
import Navbar from "@/components/Navbar";
import About from "@/sections/About";
import Courses from "@/sections/Courses";
import Testimonial from "@/sections/Testimonial";
import FAQ from "@/sections/FAQ";
import Join from "@/sections/Join";

export default function Home() {
  return (
    <div className="bg-dark w-screen overflow-hidden min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Courses />
      <FAQ />
      <Testimonial />
      <Join />
    </div>
  );
}
