import MovieList from "../../components/MovieList/MovieList";
import { useEffect, useState } from "react";
import { getTrendingMovies } from "../../tmdbAPI";
import css from "./HomePage.module.css";

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
    <div className={css.homepage}>
      <h1 className={css.hometitle}>Trending today</h1>
      <MovieList movies={data} isFromHome={true} />
    </div>
  );
}
