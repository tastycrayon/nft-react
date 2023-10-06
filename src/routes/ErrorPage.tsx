import React from "react";
import { Link } from "react-router-dom";
import { HOME_PATH } from "../lib/constants";

interface PropTypes {}

const ErrorPage: React.FC<PropTypes> = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col">
        {/* Error Container  */}
        <div className="flex flex-col items-center p-4 text-center">
          <div className="text-secondary font-bold text-7xl">404</div>

          <div className="font-bold text-2xl xl:text-7xl lg:text-5xl md:text-4xl mt-10">
            This page does not exist
          </div>

          <div className="font-medium text-sm md:text-xl lg:text-2xl mt-8">
            The page you are looking for could not be found.
          </div>
          <Link to={HOME_PATH}>
            <button className="btn btn-primary mt-4">Return Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
