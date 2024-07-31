import Image from "next/image";
import { designs } from "@/data";

export default function Home() {
  return (
    <>
      <div className="w-[100%] text-center p-2 bg-white h-fit md:h-screen">
        <div className="w-[100%] flex flex-col justify-center items-center mt-3 mb-3 gap-8">
          <div className="w-[100%] flex flex-wrap justify-center items-center gap-x-10">
            {designs
            .sort((a, b) => b.id - a.id)
            .map((product) => (
              <div className="card w-80 h-80 bg-white relative mb-10" key={product.id}>
                  <Image src={product.image} alt="car!" className="object-contain w-80 h-80"/>
                  <div className="w-fit right-0 flex justify-end cursor-pointer absolute bg-white">
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
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
