import React from "react";
import { useSearchParams } from "react-router-dom";

interface PropTypes {
  totalPageNumber: number;
  page: string;
}

const Pagination: React.FC<PropTypes> = ({ totalPageNumber, page }) => {
  const currentPage = parseInt(page);
  let [searchParams, setSearchParams] = useSearchParams();

  const gotoPage = (page: number) => {
    searchParams.set("page", page.toString());
    setSearchParams(searchParams);
  };

  const hasNextPage = currentPage < totalPageNumber;
  const hasPrevPage = currentPage > 1;

  const pages = new Array<number>(totalPageNumber).fill(0).map((_, i) => i + 1);

  if (totalPageNumber > 1)
    return (
      <div className="join my-4">
        <div className="join flex-wrap">
          <button
            disabled={!hasPrevPage}
            className="join-item btn"
            onClick={() => gotoPage(currentPage - 1)}
          >
            Prev
          </button>
          {pages.map((item) => (
            <button
              key={item}
              className={`join-item btn ${
                item == currentPage ? "btn-active" : ""
              }`}
              onClick={() => gotoPage(item)}
            >
              {item}
            </button>
          ))}
          <button
            className="join-item btn"
            disabled={!hasNextPage}
            onClick={() => gotoPage(currentPage + 1)}
          >
            Next
          </button>
        </div>
      </div>
    );

  return (
    <div className="p-4 bg-base-200 rounded-2xl">No more items avaliable.</div>
  );
};

export default Pagination;
