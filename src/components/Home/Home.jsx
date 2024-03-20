import React from "react";
import Sidebar from "../Sidebar";
import Image from "next/image";
import card from "../../app/img/card.webp";
import card2 from "../../app/img/card2.webp";
import card3 from "../../app/img/card3.webp";
import { FaArrowRightLong } from "react-icons/fa6";



export default function Home() {
  return (
    <section className="  min-h-[100vh]    bg-secondary  ">
      <div className=" flex   items-center">
        {/* sidebar */}
        <Sidebar />
        {/* sidebar */}
        
        {/* main */}
        <main className="       m-2 lg:w-[84.6%] w-full  rounded-[8px] px-8     bg-secondary  border border-border   lg:ml-[15.4%]">
          <div>
            {/* header */}
            <div className=" flex justify-between  py-8     text-white">
              <div>
                <h3 className=" text-[24px] ">Discover</h3>
              </div>
              <div className=" flex  space-x-4 items-center">
                <p className=" btnShadow px-[16px]   py-[6px] cursor-pointer text-sm    rounded-full ">
                  Submit
                </p>

                <p className=" btnShadow bg-primary  py-[6px] cursor-pointer text-secondary px-[16px]  text-inherit   text-sm    rounded-full ">
                  Remix template
                </p>
              </div>
            </div>

            <div className=" w-full   h-[1px] bg-border"></div>
            <div className=" main wrapper   py-8">
              <div className=" grid lg:grid-cols-4  gap-6 grid-cols-1 md:grid-cols-2">
                <div>
                  <h1 className=" text-[16px] text-white">Font of the day</h1>
                  <div className=" rounded-[5px] mt-5  p-3 border border-border hover:bg-[#1C1715] transition-all duration-300 whop_main">
                    <Image
                      src={card}
                      alt="image"
                      className=" rounded-[5px]  border-border border"
                    />
                    <div className="flex items-center justify-between">
                    <p className=" text-[14px] text-[#ada89f] mt-2">Gilory</p>
                    <FaArrowRightLong className="text-[#ada89f] text-[20px]  icon hidden" />

                    </div>
                  </div>
                </div>
                <div>
                  <h1 className=" text-[16px] text-white">Font of the day</h1>
                  <div className=" rounded-[5px] mt-5  p-3 border border-border">
                    <Image
                      src={card}
                      alt="image"
                      className=" rounded-[5px]  border-border border"
                    />
                    <p className=" text-[14px] text-[#ada89f] mt-2">Gilory</p>
                  </div>
                </div>
                <div>
                  <h1 className=" text-[16px] text-white">Font of the day</h1>
                  <div className=" rounded-[5px] mt-5  p-3 border border-border">
                    <Image
                      src={card}
                      alt="image"
                      className=" rounded-[5px]  border-border border"
                    />
                    <p className=" text-[14px] text-[#ada89f] mt-2">Gilory</p>
                  </div>
                </div>
                <div>
                  <h1 className=" text-[16px] text-white">Font of the day</h1>
                  <div className=" rounded-[5px] mt-5  p-3 border border-border">
                    <Image
                      src={card}
                      alt="image"
                      className=" rounded-[5px]  border-border border"
                    />
                    <p className=" text-[14px] text-[#ada89f] mt-2">Gilory</p>
                  </div>
                </div>
              </div>

              {/* featured items */}

              <div>
                <div className=" flex space-x-3   items-center mt-12">
                  <span className=" block text-white text-[20px]">Icon</span>
                  <h1 className=" text-white text-[20px] ">Featured Gems</h1>
                </div>

                <div className=" grid lg:grid-cols-3  gap-6 grid-cols-1 ">
                  <div className=" rounded-[5px] mt-5  p-3 border border-border">
                    <Image
                      src={card2}
                      alt="image"
                      className=" rounded-[5px]  border-border border"
                    />
                    <p className=" text-[14px] text-[#ada89f] mt-2">Gilory</p>
                    <p className=" text-[14px]    font-semibold  text-third mt-1">
                      The internet is your canvas
                    </p>
                  </div>

                  <div className=" rounded-[5px] mt-5  p-3 border border-border">
                    <Image
                      src={card2}
                      alt="image"
                      className=" rounded-[5px]  border-border border"
                    />
                    <p className=" text-[14px] text-[#ada89f] mt-2">Gilory</p>
                    <p className=" text-[14px]    font-semibold  text-third mt-1">
                      The internet is your canvas
                    </p>
                  </div>

                  <div className=" rounded-[5px] mt-5  p-3 border border-border">
                    <Image
                      src={card2}
                      alt="image"
                      className=" rounded-[5px]  border-border border"
                    />
                    <p className=" text-[14px] text-[#ada89f] mt-2">Gilory</p>
                    <p className=" text-[14px]    font-semibold  text-third mt-1">
                      The internet is your canvas
                    </p>
                  </div>
                </div>
              </div>

              {/* Inspriotion  */}

              <div>
                <div className="    mt-12">
                  <h1 className=" text-white text-[20px] ">Framer Templates</h1>
                </div>

                <div className=" grid lg:grid-cols-4  gap-6 grid-cols-1 md:grid-cols-2">
                  <div className=" rounded-[5px] mt-5  p-3 border border-border">
                    <Image
                      src={card3}
                      alt="image"
                      className=" rounded-[5px]  border-border border"
                    />
                    <p className=" text-[14px] text-[#ada89f] mt-2">Gilory</p>
                    <p className=" text-[14px]    font-semibold  text-third mt-1">
                      The internet is your canvas
                    </p>
                  </div>
                  <div className=" rounded-[5px] mt-5  p-3 border border-border">
                    <Image
                      src={card3}
                      alt="image"
                      className=" rounded-[5px]  border-border border"
                    />
                    <p className=" text-[14px] text-[#ada89f] mt-2">Gilory</p>
                    <p className=" text-[14px]    font-semibold  text-third mt-1">
                      The internet is your canvas
                    </p>
                  </div>
                  <div className=" rounded-[5px] mt-5  p-3 border border-border">
                    <Image
                      src={card3}
                      alt="image"
                      className=" rounded-[5px]  border-border border"
                    />
                    <p className=" text-[14px] text-[#ada89f] mt-2">Gilory</p>
                    <p className=" text-[14px]    font-semibold  text-third mt-1">
                      The internet is your canvas
                    </p>
                  </div>
                  <div className=" rounded-[5px] mt-5  p-3 border border-border">
                    <Image
                      src={card3}
                      alt="image"
                      className=" rounded-[5px]  border-border border"
                    />
                    <p className=" text-[14px] text-[#ada89f] mt-2">Gilory</p>
                    <p className=" text-[14px]    font-semibold  text-third mt-1">
                      The internet is your canvas
                    </p>
                  </div>
                </div>
              </div>

              {/* Icons  */}

              <div>
                <div className="    mt-12">
                  <h1 className=" text-white text-[20px] ">Icons</h1>
                </div>

                <div className=" grid lg:grid-cols-4  gap-6 grid-cols-1 md:grid-cols-2">
                  <div className=" rounded-[5px] mt-5  p-3 border border-border">
                    <Image
                      src={card3}
                      alt="image"
                      className=" rounded-[5px]  border-border border"
                    />
                    <p className=" text-[14px] text-[#ada89f] mt-2">Gilory</p>
                    <p className=" text-[14px]    font-semibold  text-third mt-1">
                      The internet is your canvas
                    </p>
                  </div>
                  <div className=" rounded-[5px] mt-5  p-3 border border-border">
                    <Image
                      src={card3}
                      alt="image"
                      className=" rounded-[5px]  border-border border"
                    />
                    <p className=" text-[14px] text-[#ada89f] mt-2">Gilory</p>
                    <p className=" text-[14px]    font-semibold  text-third mt-1">
                      The internet is your canvas
                    </p>
                  </div>
                  <div className=" rounded-[5px] mt-5  p-3 border border-border">
                    <Image
                      src={card3}
                      alt="image"
                      className=" rounded-[5px]  border-border border"
                    />
                    <p className=" text-[14px] text-[#ada89f] mt-2">Gilory</p>
                    <p className=" text-[14px]    font-semibold  text-third mt-1">
                      The internet is your canvas
                    </p>
                  </div>
                  <div className=" rounded-[5px] mt-5  p-3 border border-border">
                    <Image
                      src={card3}
                      alt="image"
                      className=" rounded-[5px]  border-border border"
                    />
                    <p className=" text-[14px] text-[#ada89f] mt-2">Gilory</p>
                    <p className=" text-[14px]    font-semibold  text-third mt-1">
                      The internet is your canvas
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        {/* main end */}

        
      </div>
    </section>
  );
}
