import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";
import Home from "../src/pages/home";
import CurrentPath from "./components/CurrentPath";
import NavBar from "./components/Nav";
import About from "./pages/about";

const App = () => {
  return (
    <Router>
      <NavBar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <CurrentPath />
      </div>
    </Router>
  );
};


export default App;
