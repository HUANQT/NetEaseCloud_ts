import axios from "axios";

const http = axios.create({
  baseURL: "https://netease-cloud-music-api-five-roan-88.vercel.app",
  timeout: 100000,
});

export default http;
