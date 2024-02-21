import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { MovieDetails } from "../pages/MovieDetails";
import ErrorPage from "../pages/ErrorPage";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/name/:name" element={<MovieDetails />} />
      {/* <Route path="/imdbid/:imdbid" element={<MovieDetails />} /> */}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default MainRoutes;
