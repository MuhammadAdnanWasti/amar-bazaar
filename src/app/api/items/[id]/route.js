import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
export async function GET(req,{params}) {
    const p=await params;
   
    const singleData =await dbConnect("productsCollection").findOne({_id:new ObjectId(p.id)})

 
  return Response.json(singleData)
}

