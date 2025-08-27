import Image from "next/image";
import Banner from "./components/Banner";
import Link from "next/link";
export const dynamic = 'force-dynamic';
export const getPosts= async()=>{
  const res= await fetch("https://amar-bazaar.vercel.app/api/products")
  const data=await res.json()
  return data
}
export default async function Home() {
  
    const demoProducts=await getPosts()
    // console.log(demoProducts)
  return (
    <div>
     <Banner></Banner>
     


    <section>
       <div className="max-w-6xl mx-auto p-6">
            <h2 className="text-2xl font-bold mb-6 text-center">Our Highlighted Products </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-base-content">
              {demoProducts.map((product, idx) => (
                <div key={idx} className="card bg-base-100 shadow-xl border">
                  <div className="card-body">
                    <h3 className="card-title">{product.name}</h3>
                    <p className="text-sm">{product.description}</p>
                    <p className="font-bold text-lg mt-2">${product.price}</p>
                    <div className="card-actions justify-end mt-4">
                      <Link className="btn bg-amber-300 text-gray-900" href={`/products/${product._id}`}>
                        See Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
    </section>
    </div>
  );
}
