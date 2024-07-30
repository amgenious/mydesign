import React from 'react'
import Image from 'next/image'
import { about, logo } from '@/images'
import { Filter } from './filter'

export const Navbar = () => {
  return (
    <>
    <div className="navbar bg-black flex justify-between">
    <div>
    <Image
      priority
      src={logo}
      width={50}
      alt="logo"
      />
      </div>
      <div>
        <Image src={about} width={30} alt='about'/>
      </div>
</div>
<Filter />
      </>
  )
}
