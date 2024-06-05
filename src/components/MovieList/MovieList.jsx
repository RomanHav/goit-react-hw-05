import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

export default function MovieList({ movies, isFromHome = false }) {
  const location = useLocation();
  return (
    <div className={css.container}>
      <ul className={css.movielist}>
        {movies.map((movie) => {
          return (
            <li key={movie.id}>
              <Link
                className={css.movielink}
                to={`${isFromHome ? "/movies/" : ""}${movie.id}`}
                state={location}
              >
                <div className={css.movie}>
                  <img
                    src={`${
                      movie.poster_path !== null
                        ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                        : "/no-imageMovie.jpg"
                    }`}
                  />
                  {movie.title}
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
