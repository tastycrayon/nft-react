import { LoaderFunction } from "react-router-dom";
import dummyData, { Product } from "./dummyData";
import { PRODUCT_PER_PAGE } from "./constants";

export const getProduct: LoaderFunction = async ({ params }) => {
  const product = dummyData.find((item) => item.nftInfoId == params.productID);
  return { product };
};

export const getCategories = (products: Product[]) => {
  const categories: { [x: string]: { name: string, id: string } } = {}

  for (const product of products) {
    const id = product.collectionId
    const name = product.collectionName
    if (!categories.hasOwnProperty(id)) categories[id] = { id, name }
  }
  return Object.values(categories)
}

export interface GetAllProductsRes {
  products: Product[]
  categories: { name: string, id: string }[]
  totalPageNumber: number
  q: string
  cat: string
  page: string,
  sortBy: string
}
enum SortbyOpts {
  TitleAsc = "title-asc",
  TitleDesc = "title-desc",
  PriceLH = "price-lh",
  PriceHL = "price-hl"
}

export const getAllProducts: LoaderFunction = async ({ request }): Promise<GetAllProductsRes> => {
  // price,
  const url = new URL(request.url);
  const q = url.searchParams.get("q") || "";
  const cat = url.searchParams.get("cat") || "default";
  const page = url.searchParams.get("page") || "1";
  const sortBy = url.searchParams.get("sortby") || "default";

  let products = dummyData;

  // filter
  if (q && q !== "") products = products.filter((p) => {
    const searchText = q.toLocaleLowerCase()
    return p.title.toLocaleLowerCase().search(searchText) != -1
  })
  if (cat && cat !== "default") products = products.filter(p => p.collectionId == cat)

  // pagination
  const totalPageNumber = Math.round(products.length / PRODUCT_PER_PAGE)
  const startIndex = (parseInt(page) - 1) * PRODUCT_PER_PAGE;
  const endIndex = startIndex + PRODUCT_PER_PAGE;
  products = products.slice(startIndex, endIndex)

  // sorting
  switch (sortBy) {
    case SortbyOpts.PriceLH:
      products = products.sort((a, b) => a.startPrice - b.startPrice)
      break;
    case SortbyOpts.PriceHL:
      products = products.sort((a, b) => b.startPrice - a.startPrice)
      break;
    case SortbyOpts.TitleAsc:
      products = products.sort((a, b) => a.title.toLocaleLowerCase() > b.title.toLocaleLowerCase() ? 1 : -1)
      break;
    case SortbyOpts.TitleDesc:
      products = products.sort((a, b) => a.title.toLocaleLowerCase() < b.title.toLocaleLowerCase() ? 1 : -1)
      break;
    default:
      // do nothing
      break;
  }

  await delay1s()
  return {
    products,
    categories: getCategories(dummyData),
    totalPageNumber,
    q,
    cat, page,
    sortBy
  };
};


function delay1s() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('done!');
    }, 1000);
  });
}