import Link from "next/link";
import React from "react";

const SingleCategory = ({ category }) => {
  const { categoryId, name } = category;
  return (
    <Link href={`/products?categoryId=${categoryId}`}>
      <div className="mx-5 border py-2 px-7 cursor-pointer hover:bg-gray-300 hover:text-gray-600">
        <h1>{name}</h1>
      </div>
    </Link>
  );
};

export default SingleCategory;
