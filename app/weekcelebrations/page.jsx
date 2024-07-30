import { designs } from "@/data";
import Image from "next/image";
export default function Weekcelebrations(){
    return(
        <div className="w-[100%] text-center bg-white h-fit md:h-screen p-2">
        <div className='w-[100%] flex flex-col justify-center items-center mt-3 mb-3 gap-8'>
         <div className='w-[100%] flex flex-wrap justify-center items-center gap-24'>
            {
                designs
                .filter((product) => product.category === "weekcelebrations")
                .sort((a, b) => b.id - a.id)
                .map((product)=>(
                    <div className="card w-80 h-80 bg-slate-900" key={product.id}>
                      <Image src={product.image} alt="car!" />
                      <div className="w-full flex justify-end cursor-pointer">
                    <a href={product.psd}  download={product.name}>
                  <div className="flex gap-2 p-2 text-black">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="black"
                    className="w-6 h-6"
                    >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                      />
                  </svg>
                    PSD</div>
                      </a>
                      </div>
                  </div>
                ))
            }
    </div>
    </div>
    </div>
    )
}