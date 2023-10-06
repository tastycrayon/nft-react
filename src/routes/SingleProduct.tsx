import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Product } from "../lib/dummyData";
import { HOME_PATH, PRODUCTS_PATH } from "../lib/constants";
import CountDown from "../components/CountDown";
import HorizontalLine from "../components/HorizontalLine";

interface PropTypes {}

const SingleProduct: React.FC<PropTypes> = () => {
  const { product } = useLoaderData() as { product: Product };
  return (
    <>
      {/* breadcrumb */}
      <div className="container mx-auto">
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <Link to={HOME_PATH} className="link">
                Home
              </Link>
            </li>
            <li>
              <Link to={PRODUCTS_PATH} className="link">
                Products
              </Link>
            </li>
            <li>{product.title}</li>
          </ul>
        </div>
      </div>
      <HorizontalLine />
      <div className="container mx-auto p-2 mt-6">
        <main>
          <div className="grid grid-cols-12 gap-x-7 gap-y-4">
            <div className="col-span-12 lg:col-span-5">
              <img
                src={product.coverUrl}
                className="max-w-full rounded-lg shadow-2xl"
                alt={product.title}
              />
            </div>
            <div className="col-span-12 lg:col-span-7">
              <div className="flex w-100 justify-between mb-3 text-sm">
                <Link
                  to={`${PRODUCTS_PATH}/?cat=${product.collectionId}`}
                  className="link link-hover"
                >
                  <div className="text-accent">{product.collectionName}</div>
                </Link>
                <div className="flex space-x-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                  &nbsp;
                  {product.favorites}
                  <button className="btn btn-circle btn-xs">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="mb-3 lg:mb-8">
                <h1 className="text-4xl">{product.title}</h1>
              </div>
              {/* price */}
              <div className="flex w-100 justify-between mb-3 lg:mb-5">
                <div className="space-y-1">
                  <div className="text-xs">Price</div>
                  <div className="font-bold text-lg">
                    {product.startPrice} {product.currency}
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <div className="text-xs">Ends in</div>
                  <div className="stat-desc">
                    <CountDown
                      startTime={product.timestamp}
                      endTime={product.setEndTime}
                    />
                  </div>
                </div>
              </div>
              {/* action buttons */}
              <div className="space-x-2">
                <button className="btn btn-primary btn-wide">Buy Now</button>
                <button className="btn btn-outline px-10">Make Offer</button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default SingleProduct;
