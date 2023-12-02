import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { axiosInstance } from "../config/axiosConfig";
import ReviewCard from "../components/ui/ReviewCard";

const AllReviews = () => {
  const [reviews, setReviews] = useState();
  const location = useLocation();

  useEffect(
    () => {
      const fetchReviews = async () => {
        const response = await axiosInstance.post(
          `/reviews/allreviews?restId=${location.state.id}`
        );
        await setReviews(response.data);
      };
      fetchReviews();
    },
    // eslint-disable-next-line
    []
  );

  return (
    <div>
      <div className=" text-center mt-10">
        <h1 className="font-bold lg:text-5xl md:text-3xl sm:text-2xl text-gray-900 mb-5">
          All Reviews
        </h1>
        {reviews?.map((review) => (
          <div className="flex flex-row">
            <ReviewCard props={review} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllReviews;
