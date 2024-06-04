import axios from "axios";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMWRmZDVmNGViMTI0MGIxZjM5MjBiZDdiNmE1Njk2MiIsInN1YiI6IjY2NWM5NzQ2YmVjMzBmNDE1ZTEwN2U0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QX0HxYBMUUuHjho5GXQ1cr6gh_ojVhZwhUPDg6k1MCk",
  },
};

export const getTrendingMovies = async () => {
  const urlTrending =
    "https://api.themoviedb.org/3/trending/movie/day?language=uk_UA";

  try {
    const response = await axios.get(urlTrending, options);
    return response.data.results;
  } catch (err) {
    console.error(err);
  }
};

export const getMoviesBySearch = async (query) => {
  const urlSearch = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;
  try {
    const response = await axios.request(urlSearch, options);
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
};

export const getDetails = async (id) => {
  const urlDetails = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
  try {
    const response = await axios.request(urlDetails, options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getCredits = async (id) => {
  const urlCredits = `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`;
  try {
    const response = await axios.request(urlCredits, options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getReviews = async (id) => {
  const urlReviews = `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`;
  try {
    const response = await axios.request(urlReviews, options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
