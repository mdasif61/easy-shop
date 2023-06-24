import { getProducts } from "@/services/products";
import {cache} from 'react'

const getProductsAll = cache(getProducts);

export default getProductsAll;