import React, { useEffect } from "react";
import api from "../../api";
import YourSlide from "../../store/yourSlice";

const Home = () => {
  useEffect(() => {
    api
      .get("/users")
      .then((response) => {
        console.log("User data:", response.data);
      })
      .catch((error) => {
        console.error("API error:", error);
      });
  }, []);

  return (
    <div>
      <h2 className="text-xl">Home Page</h2>
      <p>Welcome to the home page!</p>
      <YourSlide />
    </div>
  );
};

export default Home;
