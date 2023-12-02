import { axiosInstance } from "../../config/axiosConfig";

//Add review
const addReview = async ({ reviewerName, review, restId }) => {
  const res = await axiosInstance.post("/reviews/addreview", {
    reviewerName,
    review,
    restId,
  });

  return res.data;
};

const reviewService = {
  addReview,
};

export default reviewService;
