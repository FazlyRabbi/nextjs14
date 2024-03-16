import React from "react";
import Sidebar from "../Sidebar";
import Image from "next/image";
import info_img from "../../app/img/info_img.webp";

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

            <div className=" w-full    h-[1px] bg-border">

            </div>
            <div className="py-10">
                <div className="flex flex-col gap-[14px] items-center">
            <h1 className=" text-[#faf9f7] font-bold text-[36px] leading-[39.6px] tracking-[0.4px]">Sponsorship</h1>
            <p className="text-[16px] leading-[24px] text-[#ada89f] font-medium text-center">DailyHub empowers designers with the latest tools and resources, <br /> optimizing workflows for thousands each month.!</p>
                </div>

            </div>
          </div>
        </main>
        {/* main end */}
      </div>
    </section>
  );
}
