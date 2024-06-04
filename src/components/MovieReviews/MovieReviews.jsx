import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getReviews } from "../../tmdbAPI";

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
    <ul>
      {data.results && data.results.length !== 0 ? (
        data.results.map((review) => {
          return (
            <li key={review.id}>
              <div>
                <h3>{review.author}</h3>
                <p>{review.content}</p>
              </div>
            </li>
          );
        })
      ) : (
        <p>We don&apos;t have any reviews for this movie</p>
      )}
    </ul>
  );
}
