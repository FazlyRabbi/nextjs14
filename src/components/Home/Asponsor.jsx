import React from "react";
import Sidebar from "../Sidebar";
import Image from "next/image";
import info_img from "../../app/img/info_img.webp";
import { LuDot } from "react-icons/lu";

export default function Asponsor() {
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
            <div className="py-10">
              <div className="flex flex-col gap-[14px] items-center">
                <h1 className=" text-[#faf9f7] font-bold text-[36px] leading-[39.6px] tracking-[0.4px]">
                  Sponsorship
                </h1>
                <p className="text-[16px] leading-[24px] text-[#ada89f] font-medium text-center">
                  DailyHub empowers designers with the latest tools and
                  resources, <br /> optimizing workflows for thousands each
                  month.!
                </p>
                <div className="bg-[#1C1715] p-[2px] rounded-full  my-10">
                  <div className="flex items-center">
                    <button
                      type="button"
                      className="text-[#FAF9F7] font-medium text-[16px] leading-[19px] focus:bg-[#332F2D] py-3 px-8 rounded-full"
                    >
                      Monthly{" "}
                    </button>
                    <button
                      type="button"
                      className="text-[#FAF9F7] font-medium text-[16px] leading-[19px] focus:bg-[#332F2D] py-3 px-8 rounded-full"
                    >
                      Yearly <span className="text-[#FF620A]">(Save 45%)</span>{" "}
                    </button>
                  </div>
                </div>
                <div className="grid gap-6 w-full md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                  {/* card 1 start  */}
                  <div className="p-7 border-border border flex flex-col gap-10 rounded-xl ">
                    <div className="flex items-center gap-4">
                      <div className="bg-[#14100F] border-border border h-14 w-14 rounded-full flex items-center justify-center">
                        <p className="text-white text-sm">icon</p>
                      </div>
                      <div className="space-y-1">
                        <h2 className="text-[#FAF9F7] font-medium text-[20px] leading-[24px]">
                          Pro Tier
                        </h2>
                        <p className="text-[#ADA89F] text-[16px] leading-[19px]">
                          Premium Access
                        </p>
                      </div>
                    </div>
                    <div className="text-white">
                      <h1 className="text-[36px] font-medium leading-[110%] ">
                        $19{" "}
                        <span className="text-[20px] font-normal tracking-[0.01em] leading-[140%] text-[#817b6f]">
                          /month
                        </span>
                      </h1>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-1 text-[#ADA89F]">
                        <LuDot className="text-[16px]" />
                        <p className="text-[16px] font-normal leading-[140%] tracking-[0.01em] ">
                          Priority Support
                        </p>
                      </div>
                      <div className="flex items-center gap-1 text-[#ADA89F]">
                        <LuDot className="text-[16px]" />
                        <p className="text-[16px] font-normal leading-[140%] tracking-[0.01em] ">
                          Exclusive Content
                        </p>
                      </div>
                      <div className="flex items-center gap-1 text-[#ADA89F]">
                        <LuDot className="text-[16px]" />
                        <p className="text-[16px] font-normal leading-[140%] tracking-[0.01em] ">
                          Early Access
                        </p>
                      </div>
                      <div className="flex items-center gap-1 text-[#ADA89F]">
                        <LuDot className="text-[16px]" />
                        <p className="text-[16px] font-normal leading-[140%] tracking-[0.01em] ">
                          VIP Events
                        </p>
                      </div>
                      <div className="flex items-center gap-1 text-[#ADA89F]">
                        <LuDot className="text-[16px]" />
                        <p className="text-[16px] font-normal leading-[140%] tracking-[0.01em] ">
                          Pro Features
                        </p>
                      </div>
                    </div>
                    <div className="">
                      <button className=" btnShadow w-full  text-white  py-3 cursor-pointer text-[16px] leading-[140%] tracking-[0.01em]    rounded-full hover:bg-[#1B1817] transition-all duration-300 font-medium">
                        Choose Month
                      </button>
                    </div>
                  </div>
                  {/* card 2 start  */}
                  <div className="p-7 border-border border flex flex-col gap-10 rounded-xl bg-[#1C1715]">
                    <div className="flex items-center gap-4">
                      <div className="bg-[#14100F] border-border border h-14 w-14 rounded-full flex items-center justify-center">
                        <p className="text-white text-sm">icon</p>
                      </div>
                      <div className="space-y-1">
                        <h2 className="text-[#FAF9F7] font-medium text-[20px] leading-[24px]">
                          Elite Tier
                        </h2>
                        <p className="text-[#ADA89F] text-[16px] leading-[19px]">
                          Premium Access
                        </p>
                      </div>
                    </div>
                    <div className="text-white">
                      <h1 className="text-[36px] font-medium leading-[110%] ">
                        $29{" "}
                        <span className="text-[20px] font-normal tracking-[0.01em] leading-[140%] text-[#817b6f]">
                          /month
                        </span>
                      </h1>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-1 text-[#ADA89F]">
                        <LuDot className="text-[16px]" />
                        <p className="text-[16px] font-normal leading-[140%] tracking-[0.01em] ">
                          Priority Support
                        </p>
                      </div>
                      <div className="flex items-center gap-1 text-[#ADA89F]">
                        <LuDot className="text-[16px]" />
                        <p className="text-[16px] font-normal leading-[140%] tracking-[0.01em] ">
                          Exclusive Content
                        </p>
                      </div>
                      <div className="flex items-center gap-1 text-[#ADA89F]">
                        <LuDot className="text-[16px]" />
                        <p className="text-[16px] font-normal leading-[140%] tracking-[0.01em] ">
                          Early Access
                        </p>
                      </div>
                      <div className="flex items-center gap-1 text-[#ADA89F]">
                        <LuDot className="text-[16px]" />
                        <p className="text-[16px] font-normal leading-[140%] tracking-[0.01em] ">
                          VIP Events
                        </p>
                      </div>
                      <div className="flex items-center gap-1 text-[#ADA89F]">
                        <LuDot className="text-[16px]" />
                        <p className="text-[16px] font-normal leading-[140%] tracking-[0.01em] ">
                          Pro Features
                        </p>
                      </div>
                    </div>
                    <div className="">
                      <button className=" btnShadow w-full  text-white  py-3 cursor-pointer text-[16px] leading-[140%] tracking-[0.01em]    rounded-full bg-[#ff4800] hover:bg-[#FF620A] transition-all duration-300 font-medium">
                        Choose Month
                      </button>
                    </div>
                  </div>
                  {/* card 3 start  */}
                  <div className="p-7 border-border border flex flex-col gap-10 rounded-xl bg-[#FF4800]">
                    <div className="flex items-center gap-4">
                      <div className="bg-[#14100F] border-border border h-14 w-14 rounded-full flex items-center justify-center">
                        <p className="text-white text-sm">icon</p>
                      </div>
                      <div className="space-y-1">
                        <h2 className="text-black font-medium text-[20px] leading-[24px]">
                        Diamond Tier
                        </h2>
                        <p className="text-black text-[16px] leading-[19px]">
                          Premium Access
                        </p>
                      </div>
                    </div>
                    <div className="text-black">
                      <h1 className="text-[36px] font-semibold leading-[110%] ">
                        $99{" "}
                        <span className="text-[20px] font-normal tracking-[0.01em] leading-[140%] text-black">
                          /month
                        </span>
                      </h1>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-1 text-black">
                        <LuDot className="text-[16px]" />
                        <p className="text-[16px] font-normal leading-[140%] tracking-[0.01em] ">
                          Priority Support
                        </p>
                      </div>
                      <div className="flex items-center gap-1 text-black">
                        <LuDot className="text-[16px]" />
                        <p className="text-[16px] font-normal leading-[140%] tracking-[0.01em] ">
                          Exclusive Content
                        </p>
                      </div>
                      <div className="flex items-center gap-1 text-black">
                        <LuDot className="text-[16px]" />
                        <p className="text-[16px] font-normal leading-[140%] tracking-[0.01em] ">
                          Early Access
                        </p>
                      </div>
                      <div className="flex items-center gap-1 text-black">
                        <LuDot className="text-[16px]" />
                        <p className="text-[16px] font-normal leading-[140%] tracking-[0.01em] ">
                          VIP Events
                        </p>
                      </div>
                      <div className="flex items-center gap-1 text-black">
                        <LuDot className="text-[16px]" />
                        <p className="text-[16px] font-normal leading-[140%] tracking-[0.01em] ">
                          Pro Features
                        </p>
                      </div>
                    </div>
                    <div className="">
                      <button className=" btnShadow w-full  text-white  py-3 cursor-pointer text-[16px] leading-[140%] tracking-[0.01em]    rounded-full bg-[#0f0c0b] hover:bg-[#1B1817] transition-all duration-300 font-medium">
                        Choose Month
                      </button>
                    </div>
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
