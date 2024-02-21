import { MovieCard } from "../components/MovieCard";

export function Home() {
  const movies = [
    {
      Title: "Harry and His Bucket Full of Dinosaurs",
      Year: "2005–2015",
      imdbID: "tt0493094",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOGIyZDMyNTEtMDEwZi00MTYxLTg3YmMtZjIyOTZhNzM5MzRlXkEyXkFqcGdeQXVyNzMwOTY2NTI@._V1_SX300.jpg",
    },
    {
      Title: "Gospel According to Harry",
      Year: "1994",
      imdbID: "tt0106839",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTk5MjAxMTIyOF5BMl5BanBnXkFtZTcwMjM2MDY4MQ@@._V1_SX300.jpg",
    },
    {
      Title: "Harry Styles: Kiwi",
      Year: "2017",
      imdbID: "tt7547848",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNjE5MDYxMjUtYTk4MC00YTg2LTljYWItNDExZGMyZGJlNmFjXkEyXkFqcGdeQXVyNjExMjE5OTM@._V1_SX300.jpg",
    },
    {
      Title: "Harry: The Interview",
      Year: "2023",
      imdbID: "tt25795782",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMGQxMjE3NGYtNmVkMi00MDU1LWJmZmEtYzcxMzQwOTY4MjdlXkEyXkFqcGdeQXVyMjE1MDIzMA@@._V1_SX300.jpg",
    },
    {
      Title: "50 Greatest Harry Potter Moments",
      Year: "2011",
      imdbID: "tt2006673",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZmRmYTU5ZDgtOWY2Mi00OTZmLTkzNjUtYTRmYTJlNjY3ZjJlXkEyXkFqcGdeQXVyMjk2MTQxMzg@._V1_SX300.jpg",
    },
    {
      Title: "Lego Harry Potter: Years 5-7",
      Year: "2011",
      imdbID: "tt1954614",
      Type: "game",
      Poster: "N/A",
    },
    {
      Title: "Harry",
      Year: "2013",
      imdbID: "tt2331972",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMGUwNjdmOTEtODJlNy00ZjI4LTkyZGQtNTZkNzRkYzQ3ZGVjXkEyXkFqcGdeQXVyMTA5NzMyOTM@._V1_SX300.jpg",
    },
    {
      Title: "Target: Harry",
      Year: "1969",
      imdbID: "tt0065069",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYzkyODIzYTUtYTdjMy00NDBmLTk3NTktN2IwODdmY2MzZWQ1XkEyXkFqcGdeQXVyMjczMDc5MzM@._V1_SX300.jpg",
    },
    {
      Title: "Wild About Harry",
      Year: "2009",
      imdbID: "tt0435711",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZGRiYmUwMmItNjE3MS00NGViLWIxYTYtNDMyNzEwNzlmMjJiXkEyXkFqcGdeQXVyNTcwMzkyNDE@._V1_SX300.jpg",
    },
    {
      Title: "How Harry Met Sally...",
      Year: "2001",
      imdbID: "tt0305649",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTIwNDkyMjQ3MF5BMl5BanBnXkFtZTYwNDM2MjI5._V1_SX300.jpg",
    },
  ];

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
