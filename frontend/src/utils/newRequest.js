import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://fiverr-api-alpha.vercel.app/",
  withCredentials: true,
});

export default newRequest;
