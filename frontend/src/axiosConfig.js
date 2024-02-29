import axios from "axios";

const token = "https://kitsu.io/api/edge/anime/?page[limit]=20&page[offset]=0";
const baseURL = "https://kitsu.io/api/edge";

const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    accept: "application/json",
    Authorization: token,
  },
});

export default axiosInstance;
