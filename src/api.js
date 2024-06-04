import axios from "axios";

const API_KEY = "7148534601b265cdbaf6f7e251710ca6";
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
