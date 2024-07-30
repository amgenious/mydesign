import { navlinks } from '@/data/index'
import Link from "next/link"

export const Filter = () => {
  return (
    <div className='bg-white w-[100%] flex justify-center md:justify-start '>
<div className="dropdown w-[90%] md:w-[10%]">
  <div tabIndex={0} role="button" className="btn m-1 w-full text-white bg-black">Filter</div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-black rounded-box w-full">
    {
        navlinks.map((navlink) => (
            <li key={navlink.id}><Link href={navlink.url}>{navlink.name}</Link></li>
        ))
    }
  </ul>
</div>
</div>
  )
}
