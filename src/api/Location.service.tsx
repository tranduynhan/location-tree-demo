import axios from "axios";

const BASE_URL = "/api/v1/locations/get-all";
class LocationService {
  async getAll(): Promise<Array<ILocationPayload>> {
    return axios.get<Array<ILocationPayload>>(BASE_URL).then((res) => {
      return res.data;
    });
  }
}
export const locationService = new LocationService();
