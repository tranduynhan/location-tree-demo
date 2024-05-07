import axios from "axios";
const BASE_URL =
  import.meta.env.MODE === "development"
    ? "/api/v1"
    : "https://663a1b561ae792804bee15db.mockapi.io/api/v1";

const httpService = axios.create({
  baseURL: BASE_URL,
});
export default httpService;
