import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCredits } from "../../api";
import styles from "./MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieCredits(movieId).then((response) => setCast(response.data.cast));
  }, [movieId]);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Cast</h2>
      <ul className={styles.list}>
        {cast.map((actor) => (
          <li key={actor.id} className={styles.item}>
            <img
              src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
              alt={actor.name}
              className={styles.photo}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/200x300";
              }}
            />
            <p className={styles.name}>{actor.name}</p>
            <p className={styles.character}>{actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
