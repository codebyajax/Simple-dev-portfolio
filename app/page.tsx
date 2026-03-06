import Hero from "./Sections/Hero";
import About from "./Sections/About";
import Experience from "./Sections/Experience";
import Projects from "./Sections/Projects";
import Skills from "./Sections/Skills.jsx"
import Contact from "./Sections/Contact"

export default function page() {
  return (
    <>
      <main>
        <Hero />
        <div className="line" />
        <About />
        <div className="line" />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <aside className="overlay" />
    </>
  )
}

