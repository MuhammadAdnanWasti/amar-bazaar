import dbConnect from "@/lib/dbConnect";

 
export async function GET() {
  const data= await dbConnect("productsCollection").find().limit(5).toArray()
  return Response.json(data)
}
