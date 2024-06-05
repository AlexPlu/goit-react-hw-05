import axios from "axios";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MTQ4NTM0NjAxYjI2NWNkYmFmNmY3ZTI1MTcxMGNhNiIsInN1YiI6IjY2NWY5NzA2YWE3ZTk0MjI2M2YyMjc4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d9sxQvfdeudjV-EIxHLvhx2_0ameCRvLPTM4GsUkk8M";

const BASE_URL = "https://api.themoviedb.org/3";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});

export const fetchTrendingMovies = () => {
  return axiosInstance.get("/trending/movie/day");
};

export const searchMovies = (query) => {
  return axiosInstance.get("/search/movie", { params: { query } });
};

export const fetchMovieDetails = (movieId) => {
  return axiosInstance.get(`/movie/${movieId}`);
};

export const fetchMovieCredits = (movieId) => {
  return axiosInstance.get(`/movie/${movieId}/credits`);
};

export const fetchMovieReviews = (movieId) => {
  return axiosInstance.get(`/movie/${movieId}/reviews`);
};
