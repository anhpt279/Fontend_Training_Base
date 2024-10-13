// yourSlide.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSlides, nextSlide, prevSlide } from "./store";

const YourSlide = () => {
  const dispatch = useDispatch();
  const slides = useSelector((state) => state.slides.slides);
  const currentSlideIndex = useSelector((state) => state.slides.currentSlide);
  const currentSlide = slides[currentSlideIndex];

  useEffect(() => {
    const slidesData = [
      { title: "Slide 1", content: "LG CNS" },
      { title: "Slide 2", content: "VietNam Build Center" },
      { title: "Slide 3", content: "Training Fresher 2024" },
      // Thêm các slide khác nếu cần
    ];
    dispatch(setSlides(slidesData));
  }, [dispatch]);

  return (
    <div className="max-w-md mt-4 mx-auto p-6 bg-white border border-gray-300 rounded-lg shadow-md text-center">
      {currentSlide && (
        <>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            {currentSlide.title}
          </h2>
          <p className="text-lg text-gray-600 mb-6">{currentSlide.content}</p>
        </>
      )}
      <div className="flex justify-between gap-4">
        <button
          onClick={() => dispatch(prevSlide())}
          disabled={currentSlideIndex === 0}
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 disabled:bg-gray-300 transition duration-200"
        >
          Previous
        </button>
        <button
          onClick={() => dispatch(nextSlide())}
          disabled={currentSlideIndex === slides.length - 1}
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 disabled:bg-gray-300 transition duration-200"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default YourSlide;
