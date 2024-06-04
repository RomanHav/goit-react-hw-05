import MovieList from "../../components/MovieList/MovieList";
import { useEffect, useState } from "react";
import { getTrendingMovies } from "../../tmdbAPI";

export default function HomePage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchTrendingMovies = async () => {
      const movies = await getTrendingMovies();
      setData(movies);
    };
    fetchTrendingMovies();
  }, []);
  return (
    <div>
      <h1>Trending today</h1>
      <MovieList movies={data} isFromHome={true} />
    </div>
  );
}
