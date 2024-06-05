import { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { getDetails } from "../../tmdbAPI";
import css from "./MovieDetailsPage.module.css";

export default function MovieDetailsPage() {
  const [data, setData] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();
  const backLink = location.state ?? "/";
  useEffect(() => {
    const fetchMovieDetails = async () => {
      setData(await getDetails(movieId));
    };
    fetchMovieDetails();
  }, [movieId]);
  return (
    <div className={css.detailscontainer}>
      <Link className={css.backbutton} to={backLink}>
        <div className={css.goback}>
          <img src="./arrow-left2.svg" />
          Go back
        </div>
      </Link>
      <div className={css.movie}>
        <img src={`https://image.tmdb.org/t/p/w300/${data.poster_path}`} />
        <div className={css.description}>
          <div className={css.descrpart}>
            <h2 className={css.maititle}>{data.title}</h2>
            <p className={css.about}>{`User Score: ${
              Math.floor(data.vote_average) * 10
            }%`}</p>
          </div>
          <div className={css.descrpart}>
            <h3 className={css.subtitles}>Overview</h3>
            <p className={css.aboutoverview}>{data.overview}</p>
          </div>
          <div className={css.descrpart}>
            <h3 className={css.subtitles}>Genres</h3>
            <p className={css.about}>
              {data.genres &&
                data.genres.map((genre) => {
                  return `${genre.name}, `;
                })}
            </p>
          </div>
        </div>
      </div>
      <div>
        <h3 className={css.addsubtitle}>Additional information</h3>
        <ul className={css.aditional}>
          <li className={css.aditionalpart}>
            <Link className={css.links} to="cast" state={location.state}>
              Cast
            </Link>
          </li>
          <li>
            <Link className={css.links} to="reviews" state={location.state}>
              Reviews
            </Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
}
