export function searchMovieBySearchTerm(searchTerm, pageNo) {
  return `https://www.omdbapi.com/?apikey=${
    import.meta.env.VITE_OMDB_API_KEY
  }&s=${searchTerm}&page=${pageNo}`;
}
