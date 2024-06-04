import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { getMoviesBySearch } from "../../tmdbAPI";
import toast, { Toaster } from "react-hot-toast";
import { useSearchParams } from "react-router-dom";

export default function MoviesPage() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const movieName = searchParams.get("query") ?? "";

  useEffect(() => {
    if (movieName.trim() !== "") {
      const fetchGettingMovies = async () => {
        setData(await getMoviesBySearch(movieName));
      };
      fetchGettingMovies();
    }
  }, [movieName]);

  const handleClick = (evt) => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const searchQuery = form.elements.search.value.trim();

    if (searchQuery === "") {
      toast("Field must be fulfilled");
      return;
    }

    setSearchParams({ query: searchQuery });
    setQuery(""); // Clear the input field
  };

  const handleChange = (evt) => {
    setQuery(evt);
  };

  return (
    <>
      <form onSubmit={handleClick}>
        <input
          name="search"
          onChange={(e) => handleChange(e.target.value)}
          value={query}
        />
        <button type="submit">Search</button>
      </form>
      <div>
        <MovieList movies={data} />
      </div>
      <Toaster
        toastOptions={{ style: { background: "red", color: "white" } }}
      />
    </>
  );
}
