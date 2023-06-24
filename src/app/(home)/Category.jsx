import getCategory from "@/utils/getCategory";
import React from "react";
import SingleCategory from "./SingleCategory";

const Category = async () => {
  const categorys = (await getCategory()) || [];
  return (
    <div>
      <h1 className="text-xl font-bold mb-5">Categorys</h1>
      <div className="flex">
        {categorys.map((category) => (
          <SingleCategory
            key={category._id}
            category={category}
          ></SingleCategory>
        ))}
      </div>
    </div>
  );
};

export default Category;
