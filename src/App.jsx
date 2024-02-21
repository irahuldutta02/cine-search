import Navbar from "./components/NavBar";
import MainRoutes from "./routes/MainRoutes";

function App() {
  return (
    <>
      <Navbar />
      <div className="bg-color4 text-color1 px-4 py-28 min-h-[100vh]">
        <MainRoutes />
      </div>
    </>
  );
}

export default App;
