import { axiosInstance } from "../../config/axiosConfig";

//Add New Restaurant
const addRest = async ({
  name,
  latitude,
  longitude,
  city,
  region,
  cuisine,
  url,
  stars,
}) => {
  const res = await axiosInstance.post("/addrest", {
    name,
    latitude,
    longitude,
    city,
    region,
    cuisine,
    url,
    stars,
  });

  return res.data;
};

const pointService = {
  addRest,
};

export default pointService;
