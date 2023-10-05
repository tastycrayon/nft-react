import React from "react";

interface PropTypes {}

const ErrorPage: React.FC<PropTypes> = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col">
        {/* Error Container  */}
        <div className="flex flex-col items-center">
          <div className="text-secondary font-bold text-7xl">404</div>

          <div className="font-bold text-3xl xl:text-7xl lg:text-6xl md:text-5xl mt-10">
            This page does not exist
          </div>

          <div className="font-medium text-sm md:text-xl lg:text-2xl mt-8">
            The page you are looking for could not be found.
          </div>
          <button className="btn btn-neutral mt-4">Return Home</button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
