import React from "react";
import Sidebar from "../Sidebar";
import Link from "next/link";
import Image from "next/image";
import insp_img from "../../app/img/insp_img.webp";
import { FaArrowRightLong } from "react-icons/fa6";



export default function Inspirations() {
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
                <h3 className=" text-[24px] ">A Sponsor</h3>
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

            <div className=" w-full    h-[1px] bg-border"></div>
            <div className="py-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              <Link
                href={"#"}
                className="border border-border rounded-lg p-3 flex flex-col gap-4 hover:bg-[#1C1715] transition-all duration-300 whop_main "
              >
                <div>
                  <Image src={insp_img} alt="image " className="rounded-lg" />
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-start gap-2">
                      <h4 className="text-[#ada89f] text-[16px] font-normal leading-[140%] tracking-[0.01em]">
                        Whop
                      </h4>
                      <div className="border border-[#ff620a] text-[#ff620a] rounded-full h-5 w-10 flex justify-center">
                        <p className="text-[12px]">NEW</p>
                      </div>
                    </div>
                    <div>
                      <FaArrowRightLong className="text-[#ada89f] text-[20px]  icon hidden" />
                    </div>
                  </div>
                  <p className="text-[#817b6f] text-[15px] leading-[140%] ">
                    Software
                  </p>
                </div>
              </Link>
              <Link
                href={"#"}
                className="border border-border rounded-lg p-3 flex flex-col gap-4 hover:bg-[#1C1715] transition-all duration-300 whop_main "
              >
                <div>
                  <Image src={insp_img} alt="image " className="rounded-lg" />
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-start gap-2">
                      <h4 className="text-[#ada89f] text-[16px] font-normal leading-[140%] tracking-[0.01em]">
                        Whop
                      </h4>
                      <div className="border border-[#ff620a] text-[#ff620a] rounded-full h-5 w-10 flex justify-center">
                        <p className="text-[12px]">NEW</p>
                      </div>
                    </div>
                    <div>
                      <FaArrowRightLong className="text-[#ada89f] text-[20px]  icon hidden" />
                    </div>
                  </div>
                  <p className="text-[#817b6f] text-[15px] leading-[140%] ">
                    Software
                  </p>
                </div>
              </Link>
              <Link
                href={"#"}
                className="border border-border rounded-lg p-3 flex flex-col gap-4 hover:bg-[#1C1715] transition-all duration-300 whop_main "
              >
                <div>
                  <Image src={insp_img} alt="image " className="rounded-lg" />
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-start gap-2">
                      <h4 className="text-[#ada89f] text-[16px] font-normal leading-[140%] tracking-[0.01em]">
                        Whop
                      </h4>
                      <div className="border border-[#ff620a] text-[#ff620a] rounded-full h-5 w-10 flex justify-center">
                        <p className="text-[12px]">NEW</p>
                      </div>
                    </div>
                    <div>
                      <FaArrowRightLong className="text-[#ada89f] text-[20px]  icon hidden" />
                    </div>
                  </div>
                  <p className="text-[#817b6f] text-[15px] leading-[140%] ">
                    Software
                  </p>
                </div>
              </Link>
              <Link
                href={"#"}
                className="border border-border rounded-lg p-3 flex flex-col gap-4 hover:bg-[#1C1715] transition-all duration-300 whop_main "
              >
                <div>
                  <Image src={insp_img} alt="image " className="rounded-lg" />
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-start gap-2">
                      <h4 className="text-[#ada89f] text-[16px] font-normal leading-[140%] tracking-[0.01em]">
                        Whop
                      </h4>
                      <div className="border border-[#ff620a] text-[#ff620a] rounded-full h-5 w-10 flex justify-center">
                        <p className="text-[12px]">NEW</p>
                      </div>
                    </div>
                    <div>
                      <FaArrowRightLong className="text-[#ada89f] text-[20px]  icon hidden" />
                    </div>
                  </div>
                  <p className="text-[#817b6f] text-[15px] leading-[140%] ">
                    Software
                  </p>
                </div>
              </Link>
              <Link
                href={"#"}
                className="border border-border rounded-lg p-3 flex flex-col gap-4 hover:bg-[#1C1715] transition-all duration-300 whop_main "
              >
                <div>
                  <Image src={insp_img} alt="image " className="rounded-lg" />
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-start gap-2">
                      <h4 className="text-[#ada89f] text-[16px] font-normal leading-[140%] tracking-[0.01em]">
                        Whop
                      </h4>
                      <div className="border border-[#ff620a] text-[#ff620a] rounded-full h-5 w-10 flex justify-center">
                        <p className="text-[12px]">NEW</p>
                      </div>
                    </div>
                    <div>
                      <FaArrowRightLong className="text-[#ada89f] text-[20px]  icon hidden" />
                    </div>
                  </div>
                  <p className="text-[#817b6f] text-[15px] leading-[140%] ">
                    Software
                  </p>
                </div>
              </Link>
              <Link
                href={"#"}
                className="border border-border rounded-lg p-3 flex flex-col gap-4 hover:bg-[#1C1715] transition-all duration-300 whop_main "
              >
                <div>
                  <Image src={insp_img} alt="image " className="rounded-lg" />
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-start gap-2">
                      <h4 className="text-[#ada89f] text-[16px] font-normal leading-[140%] tracking-[0.01em]">
                        Whop
                      </h4>
                      <div className="border border-[#ff620a] text-[#ff620a] rounded-full h-5 w-10 flex justify-center">
                        <p className="text-[12px]">NEW</p>
                      </div>
                    </div>
                    <div>
                      <FaArrowRightLong className="text-[#ada89f] text-[20px]  icon hidden" />
                    </div>
                  </div>
                  <p className="text-[#817b6f] text-[15px] leading-[140%] ">
                    Software
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </main>
        {/* main end */}
      </div>
    </section>
  );
}
