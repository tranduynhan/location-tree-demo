import axios from "axios";
const BASE_URL = import.meta.env.VITE_API_URL;
console.log(" BASE_URL -- ", BASE_URL);

const httpService = axios.create({
  baseURL: BASE_URL ? BASE_URL : "https://663a1b561ae792804bee15db.mockapi.io",
});
export default httpService;
