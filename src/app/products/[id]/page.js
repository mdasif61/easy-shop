import getSingleProduct from "@/utils/getSingleProduct";

const product =async ({params:{id}}) => {
    const {name}=await getSingleProduct(id)
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};

export default product;