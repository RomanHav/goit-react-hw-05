import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCredits } from "../../tmdbAPI";
import css from "./MovieCast.module.css";

export default function MovieCast() {
  const [data, setData] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setData(await getCredits(movieId));
    };
    fetchMovieDetails();
  }, [movieId]);

  return (
    <ul className={css.castlist}>
      {data.cast &&
        data.cast.map((actor) => {
          return (
            <li key={actor.id}>
              <div className={css.infocast}>
                <img
                  className={css.castimage}
                  src={`${
                    actor.profile_path !== null
                      ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                      : "/No-Image.png"
                  }`}
                />
                <p className={css.name}>{actor.original_name}</p>
                <p className={css.aboutcharacter}>
                  <span className={css.character}>Character: </span>
                  {actor.character}
                </p>
              </div>
            </li>
          );
        })}
    </ul>
  );
}
