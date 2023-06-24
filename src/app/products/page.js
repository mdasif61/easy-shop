import getProductsAll from "@/utils/getProducts";
import React from "react";
import SingleProducts from "./SingleProducts";

const ProductsPage = async ({ searchParams: { categoryId } }) => {
  const products = (await getProductsAll(categoryId)) || [];
  return (
    <div className="grid grid-cols-3 gap-5">
      {products.map((product) => (
        <SingleProducts key={product._id} product={product}></SingleProducts>
      ))}
    </div>
  );
};

export default ProductsPage;
