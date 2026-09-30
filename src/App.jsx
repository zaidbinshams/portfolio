import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Projects from "./components/Projects";
import Work from "./components/Work";

function App() {
  return (
    <>
      <Sidebar />

      <main className="main-content">
        <About />
        <Projects />
        <Work />
      </main>
    </>
  );
}

export default App;