export function searchMovieBySearchTerm(searchTerm) {
  return `https://www.omdbapi.com/?apikey=${
    import.meta.env.VITE_OMDB_API_KEY
  }&s=${searchTerm}`;
}
