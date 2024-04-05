import React from 'react'
import Image from 'next/image'
import { logo } from '@/images'
import { Filter } from './filter'

export const Navbar = () => {
  return (
    <>
    <div className="navbar bg-base-300 flex justify-center">
    <div>
    <a className="btn btn-ghost text-xl">
    <Image
      priority
      src={logo}
      width={50}
      alt="Follow us on Twitter"
      />
    </a>
      </div>
</div>
<Filter />
      </>
  )
}
