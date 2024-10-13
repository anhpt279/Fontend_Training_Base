import { configureStore, createSlice } from "@reduxjs/toolkit";

const slidesSlice = createSlice({
  name: "slides",
  initialState: {
    slides: [],
    currentSlide: 0,
  },
  reducers: {
    setSlides(state, action) {
      state.slides = action.payload;
    },
    nextSlide(state) {
      if (state.currentSlide < state.slides.length - 1) {
        state.currentSlide += 1;
      }
    },
    prevSlide(state) {
      if (state.currentSlide > 0) {
        state.currentSlide -= 1;
      }
    },
  },
});

export const { setSlides, nextSlide, prevSlide } = slidesSlice.actions;

const store = configureStore({
  reducer: {
    slides: slidesSlice.reducer,
  },
});

export default store;
