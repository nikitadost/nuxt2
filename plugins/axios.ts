import axios from "axios";

const url = "https://easydev.club/api/v1";
const api = axios.create({
  baseURL: url,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default api;