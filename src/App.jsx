import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import SocialIcons from "./components/SocialIcons";
import BottomNav from "./components/BottomNav";
import Education from "./components/Education";

export default function App() {
  return (
    <>
      <Navbar />
      <SocialIcons />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <BottomNav />
    </>
  );
}
