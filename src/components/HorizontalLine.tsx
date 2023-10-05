import React from "react";

interface PropTypes {}

const HorizontalLine: React.FC<PropTypes> = () => {
  return (
    <hr className="h-px bg-gray-300 border-0 dark:bg-gray-500 opacity-30" />
  );
};

export default HorizontalLine;
