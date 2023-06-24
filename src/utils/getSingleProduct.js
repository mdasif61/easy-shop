import { getSinglePro } from '@/services/products';
import {cache} from 'react'

const getSingleProduct = cache(getSinglePro);

export default getSingleProduct;