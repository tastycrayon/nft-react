import React, { ChangeEventHandler, useEffect, useRef } from "react";
import {
  Form,
  useLoaderData,
  useSearchParams,
  useSubmit,
} from "react-router-dom";
import { GetAllProductsRes } from "../lib/loader";

interface PropTypes {
  categories: { id: string; name: string }[];
}

const Sidebar: React.FC<PropTypes> = ({ categories }) => {
  const { q, cat, sortBy, page } = useLoaderData() as GetAllProductsRes;
  const submit = useSubmit();
  let [searchParams, setSearchParams] = useSearchParams();

  const searchElementRef = useRef<HTMLInputElement | null>(null);
  const selectElementRef = useRef<HTMLSelectElement | null>(null);
  const sortElementRef = useRef<HTMLSelectElement | null>(null);

  useEffect(() => {
    if (!searchElementRef?.current) return;
    if (!selectElementRef?.current) return;
    if (!sortElementRef?.current) return;
    // default form value
    searchElementRef.current.value = q;
    selectElementRef.current.value = cat;
    sortElementRef.current.value = sortBy;

    if (q == "") searchParams.delete("q");
    if (cat == "") searchParams.delete("cat");
    if (page == "1") searchParams.delete("page");
    if (sortBy == "") searchParams.delete("sortby");
    setSearchParams(searchParams);
  }, []);

  const handleOnChange: ChangeEventHandler<
    HTMLInputElement | HTMLSelectElement
  > = (event) => {
    const isFirstSearch = q == null;
    submit(event.currentTarget.form, {
      replace: !isFirstSearch,
    });
  };

  const sortbyOpts = [
    { name: "Title Asc", value: "title-asc" },
    { name: "Title Desc", value: "title-desc" },
    { name: "Price low-high", value: "price-lh" },
    { name: "Price high-low", value: "price-hl" },
  ];
  return (
    <div className="">
      <Form id="search-form" role="search" className="flex flex-wrap lg:block">
        <input type="hidden" name="page" value="1" />
        <div className="form-control m-2">
          <label className="label">
            <span className="label-text">Search</span>
            {q && q != "" && (
              <span
                className="label-text-alt link link-hover"
                onClick={() => {
                  if (!searchElementRef.current) return;
                  searchParams.delete("q");
                  setSearchParams(searchParams);
                  searchElementRef.current.value = "";
                }}
              >
                Clear
              </span>
            )}
          </label>
          <input
            type="search"
            ref={searchElementRef}
            placeholder="Type here"
            aria-label="Search products"
            name="q"
            defaultValue={q || ""}
            className="input input-bordered w-full max-w-xs"
            onChange={handleOnChange}
          />
          <div id="search-spinner" aria-hidden hidden={true} />
          <div className="sr-only" aria-live="polite"></div>
        </div>
        <div className="form-control m-2">
          <label className="label">
            <span className="label-text">Select Collection</span>
            {cat && cat != "default" && (
              <span
                className="label-text-alt link link-hover"
                onClick={() => {
                  if (!selectElementRef.current) return;
                  searchParams.delete("cat");
                  setSearchParams(searchParams);
                  selectElementRef.current.value = "default";
                }}
              >
                Clear
              </span>
            )}
          </label>
          <select
            ref={selectElementRef}
            className="select select-primary w-full max-w-xs"
            name="cat"
            defaultValue="default"
            onChange={handleOnChange}
          >
            <option disabled value="default">
              Collection
            </option>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
        {/* sort by */}
        <div className="form-control m-2">
          <label className="label">
            <span className="label-text">Sort By</span>
            {sortBy && sortBy != "default" && (
              <span
                className="label-text-alt link link-hover"
                onClick={() => {
                  if (!sortElementRef.current) return;
                  searchParams.delete("sortby");
                  setSearchParams(searchParams);
                  sortElementRef.current.value = "default";
                }}
              >
                Clear
              </span>
            )}
          </label>
          <select
            ref={sortElementRef}
            className="select select-primary w-full max-w-xs"
            name="sortby"
            defaultValue="default"
            onChange={handleOnChange}
          >
            <option disabled value="default">
              None
            </option>
            {sortbyOpts.map((c) => (
              <option key={c.value} value={c.value}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
      </Form>
    </div>
  );
};

export default Sidebar;
