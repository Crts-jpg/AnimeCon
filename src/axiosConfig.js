import axios from "axios";

const token = "f391dd1b501daec4faecc57f30d8bb9005b5e92cd1ccbd175b36f6c33bb41f5a"
const baseURL = "https://api.myanimelist.net/v2"

const axiosInstance = axios.create({
    baseURL: baseURL,
    headers: {
        accept: "application/json",
        Authorization: token,
    },
});

export default axiosInstance;
