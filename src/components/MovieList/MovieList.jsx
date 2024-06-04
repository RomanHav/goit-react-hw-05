import { Link, useLocation } from "react-router-dom";

export default function MovieList({ movies, isFromHome = false }) {
  const location = useLocation();
  return (
    <div>
      <ul>
        {movies.map((movie) => {
          return (
            <li key={movie.id}>
              <Link
                to={`${isFromHome ? "/movies/" : ""}${movie.id}`}
                state={location}
              >
                {movie.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
