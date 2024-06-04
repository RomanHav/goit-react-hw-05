import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCredits } from "../../tmdbAPI";

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
    <ul>
      {data.cast &&
        data.cast.map((actor) => {
          return (
            <li key={actor.id}>
              <div>
                <img
                  src={`${
                    actor.profile_path !== null
                      ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                      : "../../../public/actor.jpg"
                  }`}
                />
                <p>{actor.original_name}</p>
                <p>{`Character: ${actor.character}`}</p>
              </div>
            </li>
          );
        })}
    </ul>
  );
}
