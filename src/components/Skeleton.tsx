import React from "react";

interface PropTypes {
  className?: string;
}

const Skeleton: React.FC<PropTypes> = ({ className = "h2.5 w-12" }) => {
  return (
    <div
      className={`bg-gray-200 rounded-xl animate-pulse dark:bg-gray-400 ${className}`}
    ></div>
  );
};

export default Skeleton;
