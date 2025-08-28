import dbConnect from '@/lib/dbConnect'
import { ObjectId } from 'mongodb'
import Link from 'next/link'
import React from 'react'
// export const dynamic="force-dynamic"
export const getPosts= async(post_id)=>{
  // const res= await fetch(`https://amar-bazaar.vercel.app/api/items/${post_id}`)
  // const data=await res.json()
  // return data
  const data=await dbConnect("productsCollection").findOne({_id: new ObjectId(post_id)})
    return data
}
export default async function ProductDetails({params}) {
const p= await params;
const product=await getPosts(p.id)
  return (
    <div className="max-w-3xl mx-auto p-6 text-base-content">
      <div className="card bg-base-100 shadow-xl border">
        <div className="card-body">
          <h2 className="card-title text-2xl">{product.name}</h2>
          <p className="">{product.description}</p>

          <div className="mt-4 space-y-2">
            <p><span className="font-bold">Category:</span> {product.category}</p>
            <p><span className="font-bold">Origin:</span> {product.origin}</p>
            <p><span className="font-bold">Quantity:</span> {product.quantity} {product.unit}</p>
            <p className="text-lg font-bold text-primary">Price: ${product.price}</p>
          </div>

          <div className="card-actions justify-end mt-6">
          
           <Link href='/products'><button className="btn btn-outline">Back</button> </Link> 
          </div>
        </div>
      </div>
    </div>
  )
}
