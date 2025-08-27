import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
   <div className='bg-[#F54927]'>
     <footer className="footer footer-horizontal footer-center  text-white rounded p-10  max-w-[1200px] mx-auto ">
    <div>
     <p className='text-3xl font-extrabold'>Amar Bazaar</p>
    </div>
 <ul className="grid grid-flow-col gap-4">
  <Link href='/'> <li>Home</li></Link>
          <Link href='/products'> <li>Products</li></Link>
         
 </ul>

 
 
 
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by Amar Bazaar Ltd</p>
    <p>Amar Bazaar is a web app that helps users buy necessary grocary products online </p>
  </aside>
</footer>
  </div>
  )
}
