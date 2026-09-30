import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Projects from "./components/Projects";
import Work from "./components/Work";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Sidebar />

      <main className="main-content">
        <About />
        <Projects />
        <Work />
        <Education />
        <Skills />
        <Contact />
      </main>
    </>
  );
}

export default App;