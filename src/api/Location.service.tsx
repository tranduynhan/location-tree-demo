import httpService from "./axiosInstance";

const BASE_URL = "/locations/get-all";
class LocationService {
  async getAll(): Promise<Array<ILocationPayload>> {
    return httpService.get<Array<ILocationPayload>>(BASE_URL).then((res) => {
      return res.data;
    });
  }
}
export const locationService = new LocationService();
