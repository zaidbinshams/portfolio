import Sidebar from "./components/Sidebar";
import About from "./components/About";

function App() {
  return (
    <>
      <Sidebar />

      <main className="main-content">
        <About />
      </main>
    </>
  );
}

export default App;