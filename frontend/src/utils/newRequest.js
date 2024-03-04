import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://fiverr-frontend-nine.vercel.app/api/",
  withCredentials: true,
});

export default newRequest;
