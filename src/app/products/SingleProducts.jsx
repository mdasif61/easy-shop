import Link from "next/link";

const SingleProducts = ({ product }) => {
  const { _id, name, price, description } = product;
  return (
    <Link href={`/products/${_id}`}>
      <div className="border p-8 cursor-pointer">
        <h1>{name}</h1>
        <p>Price : {price}</p>
        <p>{description}</p>
      </div>
    </Link>
  );
};

export default SingleProducts;
