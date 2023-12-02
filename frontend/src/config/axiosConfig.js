import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:5000", // Replace with your backend URL
});
