import { ObjectId } from "mongodb";
import DbConnect from "./DbConnect";
import 'server-only';

export const revalidate=0;

export const getProducts = async (categoryId) => {
  const db = await DbConnect();
  const productCollection = db.collection("products");
  const query={};
  if(categoryId){
    query.categoryId=categoryId
    console.log(query.categoryId)
  }
  return productCollection.find(query).toArray();
};

export const getSinglePro=async(id)=>{
    const db=await DbConnect();
    const productCollection=db.collection("products");
    const query={_id:new ObjectId(id)}
    return productCollection.findOne(query);
}
