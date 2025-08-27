"use client"
import Link from 'next/link'
import React from 'react'
import { signIn, signOut, useSession } from "next-auth/react"
import UserInfo from './UserInfo'
import { usePathname } from 'next/navigation'
import ThemeToggle from './ThemeToggle'
export default function Navbar() {
  const pathName= usePathname();
    const { data: session, status } = useSession();
  // console.log(pathName)
  return (
   <div className=' bg-[#F54927] '>
    <div className="navbar shadow-sm  max-w-[1200px] mx-auto ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-3">
          <Link href='/'> <li >Home</li></Link>
          <Link href='/products'> <li>Products</li></Link>
          <Link href='/dashboard/add-product'> <li>Add Products</li></Link>
  
     
       
      </ul>
    </div>
   <p className='text-3xl font-extrabold'>Amar Bazaar</p>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-7">
           <Link href='/'> <li >Home</li></Link>
          <Link href='/products'> <li>Products</li></Link>
          <Link href='/dashboard/add-product'> <li>Add Products</li></Link>
    </ul>
  </div>
  <div className="navbar-end">


 <ThemeToggle></ThemeToggle>
   {status === "authenticated" && session?.user ? (
        <>
          <UserInfo />
          <button
            className="btn btn-black rounded-3xl"
            onClick={() => signOut()}
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <button
            className="btn btn-black rounded-3xl"
            onClick={() => signIn()}
          >
            Sign in
          </button>
          <Link className="btn btn-black rounded-3xl" href="/register">
            Register
          </Link>
        </>
      )}
   
  
  </div>
</div>
    </div>
  )
}
