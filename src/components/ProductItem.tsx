import React from "react";
import { Product } from "../lib/dummyData";
import { Link } from "react-router-dom";
import { PRODUCTS_PATH } from "../lib/constants";

interface PropTypes {
  product: Product;
}

const ProductItem: React.FC<PropTypes> = ({ product }) => {
  const productLink = `${PRODUCTS_PATH}/${product.nftInfoId}`;
  return (
    <div className="card shadow-xl">
      <figure>
        <Link to={productLink}>
          <img src={product.coverUrl} alt={product.title} />
        </Link>
      </figure>
      <div className="card-body p-4">
        <Link to={productLink}>
          <h2 className="card-title text-sm truncate">{product.title}</h2>
        </Link>
        <div className="flex justify-between w-full">
          <small className="opacity-70">Price: </small>
          <small>{product.startPrice}</small>
        </div>
        <div className="card-actions">
          <Link to={productLink} className="w-full">
            <button className="btn btn-primary btn-sm w-full">Buy Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
