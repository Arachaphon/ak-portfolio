import Hero from "@/components/sections/Hero";
import AboutMe from "@/components/sections/AboutMe";
import TechStack from "@/components/sections/TechStack";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Page() {
  return (
    <main className="max-w-[1200px] mx-auto px-6 py-16">
      <Hero />
      <AboutMe />
      <TechStack />
      <Projects />
      <Contact />
    </main>
  );
}