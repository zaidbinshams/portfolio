import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Projects from "./components/Projects";
import Work from "./components/Work";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Reveal from "./components/Reveal";

function App() {
  return (
    <>
      <Sidebar />

      <main>
        <Reveal>
          <About />
        </Reveal>

        <Reveal>
          <Projects />
        </Reveal>

        <Reveal>
          <Work />
        </Reveal>

        <Reveal>
          <Education />
        </Reveal>

        <Reveal>
          <Skills />
        </Reveal>

        <Reveal>
          <Contact />
        </Reveal>
      </main>
    </>
  );
}

export default App;