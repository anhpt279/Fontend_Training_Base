import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";
import Home from "../src/pages/home";
import About from "./pages/about";
import { Button } from "antd";

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

const NavBar = () => {
  return (
    <nav className="p-4">
      <Link to="/" className="mr-4">
        <Button>Home</Button>
      </Link>
      <Link to="/about">
        <Button>About</Button>
      </Link>
    </nav>
  );
};

const CurrentPath = () => {
  const location = useLocation();

  return (
    <div className="mt-4 p-4 border border-gray-300 rounded-md">
      <p className="text-lg font-semibold">
        Current Path: <span className="text-blue-600">{location.pathname}</span>
      </p>
    </div>
  );
};

export default App;
