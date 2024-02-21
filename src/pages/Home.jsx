import { useEffect, useState } from "react";
import { MovieCard } from "../components/MovieCard";
import axios from "axios";
import { searchMovieBySearchTerm } from "../apis/searchMovieBySearchTerm";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import ErrorPage from "./ErrorPage";

export function Home() {
  const [movies, setMovies] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  const [error, setError] = useState(null);

  const { pageNo } = useParams();

  let currentPage;

  if (pageNo === undefined || isNaN(parseInt(pageNo))) {
    currentPage = 1;
  } else {
    currentPage = pageNo;
  }

  const nextPage = parseInt(currentPage) + 1;
  const prevPage = parseInt(currentPage) - 1;

  useEffect(() => {
    document.title = "CineSearch | Home";
  }, []);

  useEffect(() => {
    async function fetchMovies() {
      const response = await axios.get(
        searchMovieBySearchTerm("Harry Potter", currentPage),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.Response === "False") {
        setError(response.data.Error);
        return;
      } else {
        setError(null);
        setMovies(response.data.Search);
        setPageCount(Math.ceil(response.data.totalResults / 10));
      }
    }
    fetchMovies();
  }, [currentPage]);

  if (error) {
    return <ErrorPage status={"404"} message={error} />;
  }

  if (movies.length > 0) {
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
            <div className="w-full flex justify-center items-center gap-4">
              {prevPage > 0 && (
                <Link to={`/page/${prevPage}`}>
                  <button className="bg-color1 text-color4 dark:bg-color4 dark:text-color1 px-4 py-2 rounded-md w-[7rem]">
                    Previous
                  </button>
                </Link>
              )}
              {nextPage <= pageCount && (
                <Link to={`/page/${nextPage}`}>
                  <button className="bg-color1 text-color4 dark:bg-color4 dark:text-color1 px-4 py-2 rounded-md w-[7rem]">
                    Next
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}
