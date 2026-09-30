import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Sidebar />

      <main className="main-content">
        <About />
        <Projects />
      </main>
    </>
  );
}

export default App;