import { useEffect, useState } from "react";
import { MovieCard } from "../components/MovieCard";
import axios from "axios";
import { searchMovieBySearchTerm } from "../apis/searchMovieBySearchTerm";

export function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    document.title = "CineSearch | Home";
  }, []);

  useEffect(() => {
    async function fetchMovies() {
      const response = await axios.get(searchMovieBySearchTerm("Marvel"), {
        headers: {
          "Content-Type": "application/json",
        },
      });

      setMovies(response.data.Search);
    }
    fetchMovies();
  }, []);

  return (
    <>
      <div className="w-full flex justify-center items-start">
        <div className="w-full max-w-7xl flex flex-col justify-center items-center gap-8">
          <div className="flex justify-center items-center text-center gap-4 flex-col w-full py-8">
            <h1 className="text-4xl text-center font-bold">
              Welcome to CineSearch
            </h1>
            <p className="text-center mt-4">
              Search for your favorite movies and TV shows
            </p>
          </div>
          <div className="w-full flex justify-center items-center gap-8 flex-wrap">
            {movies.map((movie) => {
              return <MovieCard key={movie.imdbID} movie={movie} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
