// src/pages/MovieDetailsPage.jsx
import { useEffect, useState, useRef, Suspense, lazy } from "react";
import {
  useParams,
  Link,
  Route,
  Routes,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { fetchMovieDetails } from "../../api";
import styles from "./MovieDetailsPage.module.css";

const MovieCast = lazy(() => import("../../components/MovieCast/MovieCast"));
const MovieReviews = lazy(() =>
  import("../../components/MovieReviews/MovieReviews")
);

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [movie, setMovie] = useState(null);
  const fromLocation = useRef(location.state?.from ?? "/movies");

  useEffect(() => {
    fetchMovieDetails(movieId).then((response) => setMovie(response.data));
  }, [movieId]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <button
        className={styles.backButton}
        onClick={() => navigate(fromLocation.current)}
      >
        Go back
      </button>
      <h1 className={styles.title}>{movie.title}</h1>
      <p className={styles.overview}>{movie.overview}</p>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className={styles.poster}
      />
      <div className={styles.navLinks}>
        <Link to="cast" className={styles.link}>
          Cast
        </Link>
        <Link to="reviews" className={styles.link}>
          Reviews
        </Link>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;
