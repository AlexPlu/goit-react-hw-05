import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCredits } from "../api";
import styles from "./MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieCredits(movieId).then((response) => setCast(response.data.cast));
  }, [movieId]);

  return (
    <div>
      <h3>Cast</h3>
      <ul className={styles.castList}>
        {cast.map((actor) => (
          <li key={actor.id} className={styles.castItem}>
            <span className={styles.castName}>{actor.name}</span> as
            <span className={styles.castCharacter}> {actor.character}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
