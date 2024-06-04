import { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { getDetails } from "../../tmdbAPI";

export default function MovieDetailsPage() {
  const [data, setData] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();
  const backLink = location.state ?? "/movies";
  useEffect(() => {
    const fetchMovieDetails = async () => {
      setData(await getDetails(movieId));
    };
    fetchMovieDetails();
  }, [movieId]);
  return (
    <div>
      <Link to={backLink}>Go back</Link>
      <div>
        <img src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} />
        <div>
          <div>
            <h2>{data.title}</h2>
            <p>{`User Score: ${Math.floor(data.vote_average) * 10}%`}</p>
          </div>
          <div>
            <h3>Overview</h3>
            <p>{data.overview}</p>
          </div>
          <div>
            <h3>Genres</h3>
            <p>
              {data.genres &&
                data.genres.map((genre) => {
                  return `${genre.name} `;
                })}
            </p>
          </div>
          <div>
            <h3>Additional information</h3>
            <ul>
              <li>
                <Link to="cast">Cast</Link>
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
              <Outlet />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
