import React, { useEffect, useState, Suspense } from "react";
import {
  useParams,
  Link,
  Route,
  Routes,
  useRouteMatch,
} from "react-router-dom";
import { fetchMovieDetails } from "../api";
import styles from "./MovieDetailsPage.module.css";
const MovieCast = React.lazy(() => import("../components/MovieCast"));
const MovieReviews = React.lazy(() => import("../components/MovieReviews"));

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const { path, url } = useRouteMatch();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieDetails(movieId).then((response) => setMovie(response.data));
  }, [movieId]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{movie.title}</h1>
      <p className={styles.overview}>{movie.overview}</p>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className={styles.poster}
      />
      <div className={styles.navLinks}>
        <Link to={`${url}/cast`} className={styles.link}>
          Cast
        </Link>
        <Link to={`${url}/reviews`} className={styles.link}>
          Reviews
        </Link>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={`${path}/cast`} component={<MovieCast />} />
          <Route path={`${path}/reviews`} component={<MovieReviews />} />
        </Routes>
      </Suspense>
      <Link to="/" className={styles.backLink}>
        Go back
      </Link>
    </div>
  );
};

export default MovieDetailsPage;
