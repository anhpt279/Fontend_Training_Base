import { Button } from "antd";
import React from "react";
import {
    Link
} from "react-router-dom";

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

export default NavBar