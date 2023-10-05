import React from "react";
import Skeleton from "./Skeleton";

interface PropTypes {}

const ProductItemSkeleton: React.FC<PropTypes> = () => {
  return (
    <div className="card shadow-xl">
      <figure>
        {/* <img src={product.coverUrl} alt={product.title} /> */}
        <Skeleton className="w-full aspect-square rounded-none" />
      </figure>
      <div className="card-body p-4">
        <Skeleton className="w-5/6 h-6" />
        {/* <h2 className="card-title text-sm truncate"></h2> */}
        <div className="flex justify-between w-full">
          <small className="opacity-70">
            <Skeleton className="h-4 w-12" />
          </small>
          <small>
            <Skeleton className="h-4 w-10" />
          </small>
        </div>
        <div className="card-actions">
          <Skeleton className="h-8 w-full" />
        </div>
      </div>
    </div>
  );
};

export default ProductItemSkeleton;
