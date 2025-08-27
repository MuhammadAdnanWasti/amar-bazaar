"use client"
import { useSession } from 'next-auth/react'
import React from 'react'

export default function UserInfo() {
    const session=useSession()
    // console.log(object)
  return (
    <div>
      <p className='rounded-full bg-amber-300 p-3 text-black'>{session?.data?.user?.username}</p>
    </div>
  )
}
