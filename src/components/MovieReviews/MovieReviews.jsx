import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getReviews } from "../../tmdbAPI";
import css from "./MovieReviews.module.css";

export default function MovieReviews() {
  const [data, setData] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    const fetchMovieDetails = async () => {
      setData(await getReviews(movieId));
    };
    fetchMovieDetails();
  }, [movieId]);

  return (
    <ul className={css.reviewslist}>
      {data.results && data.results.length !== 0 ? (
        data.results.map((review) => {
          return (
            <li className={css.reviewpart} key={review.id}>
              <div className={css.reviewabout}>
                <div className={css.authorcont}>
                  <img className={css.imgauthor} src="/user-tie.svg" />
                  <h3 className={css.author}>{review.author}</h3>
                </div>
                <p className={css.content}>{review.content}</p>
              </div>
            </li>
          );
        })
      ) : (
        <p className={css.warning}>
          We don&apos;t have any reviews for this movie
        </p>
      )}
    </ul>
  );
}
