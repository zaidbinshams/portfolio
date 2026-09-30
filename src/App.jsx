import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Sidebar />

      <main style={{ marginLeft: "240px", minHeight: "100vh" }}>
        <div id="top" />
      </main>
    </>
  );
}

export default App;