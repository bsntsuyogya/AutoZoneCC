import APIConstants from "../utils/APIConstants";
import { get } from "./BaseClient";

export const fetchAllVechicleMake = (year) => {
  const url =
    APIConstants.baseURL + `vehicles/GetMakesForVehicleType/car?format=json`;
  console.log("GET URL:", url);
  return get(url).then((res) => res);
};

export const fetchVechicleMakeModels = (make) => {
  const url =
    APIConstants.baseURL +
    `vehicles/GetModelsForMake/${make.toLowerCase()}?format=json`;
  console.log("GET URL:", url);
  return get(url).then((res) => res);
};
