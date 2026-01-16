import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Technologies from "@/components/sections/Technologies";
import Certifications from "@/components/sections/Certifications";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Technologies />
        <Certifications />
        <About />
        <Contact />
      </main>
    </>
  );
}
