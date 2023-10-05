import React from "react";
import { Link } from "react-router-dom";
import { PRODUCTS_PATH, SIGNIN_PATH } from "../lib/constants";

interface PropTypes {}

const RootIndex: React.FC<PropTypes> = () => {
  return (
    <div className="hero relative-full-height bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <div className="flex space-x-2 justify-center">
            <Link to={PRODUCTS_PATH}>
              <button className="btn btn-primary">View Products</button>
            </Link>
            <Link to={SIGNIN_PATH}>
              <button className="btn btn-secondary">Sign In</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RootIndex;
