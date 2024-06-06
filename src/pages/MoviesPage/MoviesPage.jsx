import { useState, useEffect } from "react";
import { searchMovies } from "../../api";
import { useSearchParams } from "react-router-dom";
import MovieList from "../../components/MovieList/MovieList";
import styles from "./MoviesPage.module.css";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get("query") || "";

  useEffect(() => {
    if (query) {
      searchMovies(query).then((response) => setMovies(response.data.results));
    }
  }, [query]);

  const handleSearch = (event) => {
    event.preventDefault();
    const form = event.target;
    const searchQuery = form.elements.search.value;
    setSearchParams({ query: searchQuery });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Search Movies</h1>
      <form onSubmit={handleSearch} className={styles.form}>
        <input
          type="text"
          name="search"
          defaultValue={query}
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Search
        </button>
      </form>
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
