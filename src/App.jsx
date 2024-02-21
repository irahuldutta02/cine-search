import Navbar from "./components/NavBar";
import MainRoutes from "./routes/MainRoutes";

function App() {
  return (
    <>
      <div className="bg-color4 text-color1 dark:bg-color1 dark:text-color4">
        <Navbar />
        <div className="px-4 py-28 min-h-[100vh]">
          <MainRoutes />
        </div>
      </div>
    </>
  );
}

export default App;
