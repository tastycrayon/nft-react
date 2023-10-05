import React from "react";
import { Link, useLoaderData, useNavigation } from "react-router-dom";
import ProductItem from "../components/ProductItem";
import Sidebar from "../components/Sidebar";
import { HOME_PATH, PRODUCT_PER_PAGE } from "../lib/constants";
import Pagination from "../components/Pagination";
import { GetAllProductsRes } from "../lib/loader";
import ProductItemSkeleton from "../components/ProductItemSkeleton";
import HorizontalLine from "../components/HorizontalLine";

interface PropTypes {}

const Products: React.FC<PropTypes> = () => {
  const { products, categories, totalPageNumber, page } =
    useLoaderData() as GetAllProductsRes;
  const navigation = useNavigation();

  const loadingCheck = (s: string) => {
    const sp = new URLSearchParams(s);
    return sp.has("q") || sp.has("sortby") || sp.has("page") || sp.has("cat");
  };
  const loading =
    navigation.location && loadingCheck(navigation.location.search);

  const skeletonPpoducts = new Array<number>(PRODUCT_PER_PAGE)
    .fill(0)
    .map((_, i) => i + 1);

  return (
    <>
      {/* breadcrumb */}
      <div className="container mx-auto">
        <div className="text-sm breadcrumbs p-2">
          <ul>
            <li>
              <Link to={HOME_PATH} className="link">
                Home
              </Link>
            </li>
            <li>Products</li>
          </ul>
        </div>
      </div>
      <HorizontalLine />

      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-6">
          {/* sidebar */}
          <aside className="col-span-12 lg:col-span-3">
            <Sidebar categories={categories} />
          </aside>
          {/* content */}
          <div className="col-span-12 lg:col-span-9">
            {/* product items */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 my-4 p-2 ">
              {loading &&
                skeletonPpoducts.map((e) => <ProductItemSkeleton key={e} />)}
              {!loading &&
                products.map((p) => (
                  <ProductItem product={p} key={p.nftInfoId} />
                ))}
              {!loading && products.length <= 0 && (
                <div className="p-4 bg-base-200 rounded-2xl col-span-full">
                  No more items avaliable.
                </div>
              )}
            </div>
            <div className="p-2">
              <Pagination totalPageNumber={totalPageNumber} page={page} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
