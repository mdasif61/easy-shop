import { getCategoryDb } from "@/services/categories";
import {cache } from 'react'
import 'server-only'

const getCategory = cache(() => {
    return getCategoryDb()
})

export default getCategory;