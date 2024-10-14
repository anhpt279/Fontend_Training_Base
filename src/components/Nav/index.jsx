import { Button } from "antd";
import React from "react";
import {
    Link, useLocation
} from "react-router-dom";

const NavBar = () => {

  const location = useLocation();
  const homePath = (location.pathname === "/")


    return (
      <nav className="p-4">
        <Link to="/" className="mr-4">
          <Button className={homePath && "border-blue-500"}>Home</Button>
        </Link>
        <Link to="/about">
          <Button className={!!!homePath && "border-blue-500"}>About</Button>
        </Link>
      </nav>
    );
  };

export default NavBar