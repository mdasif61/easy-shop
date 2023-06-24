import DbConnect from "./DbConnect";
import 'server-only';

export const getCategoryDb = async () => {
  const db = await DbConnect();
  const categoryCollection = db.collection("categories");
  return categoryCollection.find({}).toArray();
};
