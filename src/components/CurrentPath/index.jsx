import React from "react";
import {
    useLocation
} from "react-router-dom";



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

export default CurrentPath