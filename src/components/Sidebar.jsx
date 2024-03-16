import React from "react";
import Image from "next/image";
import { MagnifyingGlassIcon, ClockIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className=" hidden   overflow-hidden  fixed top-0 left-0 lg:block w-[15.4%]  bg-secondary   h-full   ">
      <div className="wrapper  p-3 space-y-6">
        {/* logo box */}
        <div className=" py-2 text-white">
          logo
          {/* <Image src={""} alt="logo" /> */}
        </div>

        <div className=" space-y-7">
          {/* search box */}
          <div className="  hover:bg-[#1c1715] text-third rounded-[5px] [&>*]:hover:text-white [&>input]:hover:placeholder:text-white cursor-pointer px-[12px]   py-[10px]  flex items-center space-x-2  hover:text-white">
            <MagnifyingGlassIcon className="h-5 w-5   left-0 top-0" />

            <span className=" block text-sm">Search</span>
          </div>

          {/* top menu */}
          <div className="   space-y-2 transition-all duration-300">
            <div className="  bg-[#1c1715]  overflow-hidden relative border border-border text-third rounded-[5px] [&>*]:text-white cursor-pointer px-[12px]    h-[40px]  flex items-center space-x-[10px]  hovertext-white">
              <ClockIcon className="h-5 w-5   text-third  left-0 top-0" />
              <span className=" block text-sm">Discover</span>

              <div className="  bg-primary  overflow-hidden absolute blur-[24px] top-[calc(47.50000000000002% - 8px / 2)] left-0 w-[24px] h-[8px]"></div>
              <div className="   leftBorder left-0  absolute"></div>
            </div>

            <div className="  hover:bg-[#1c1715]  overflow-hidden relative border border-transparent hover:border-border text-third rounded-[5px] [&>*]:text-white cursor-pointer px-[12px]    h-[40px]  flex items-center space-x-[10px]  hovertext-white">
              <ClockIcon className="h-5 w-5   text-third  left-0 top-0" />

              <span className=" block text-sm">Info</span>
            </div>

            <div className="  hover:bg-[#1c1715]  overflow-hidden relative border border-transparent hover:border-border text-third rounded-[5px] [&>*]:text-white cursor-pointer px-[12px]    h-[40px]  flex items-center space-x-[10px]  hovertext-white">
              <ClockIcon className="h-5 w-5   text-third  left-0 top-0" />

              <span className=" block text-sm">A Sponser</span>
            </div>
          </div>

          <div className=" flex space-x-2  ml-[12px] items-center">
            <p className=" text-third text-[12px]"> SOURCE</p>
            <div className="  h-[1px] bg-border  w-full"></div>
          </div>
          {/* top menu end */}

          {/* middle menu */}
          <div className="   space-y-2 transition-all duration-300">
            <div className="  hover:bg-[#1c1715]  overflow-hidden relative border border-transparent hover:border-border text-third rounded-[5px] [&>*]:text-[#ada89f] cursor-pointer px-[12px]    h-[40px]  flex items-center space-x-[10px]  hovertext-white">
              <ClockIcon className="h-5 w-5   text-third  left-0 top-0" />

              <span className=" block text-sm">Inspirations</span>
            </div>

            <div className="  hover:bg-[#1c1715]  overflow-hidden relative border border-transparent hover:border-border text-third rounded-[5px] [&>*]:text-[#ada89f] cursor-pointer px-[12px]    h-[40px]  flex items-center space-x-[10px]  hovertext-white">
              <ClockIcon className="h-5 w-5   text-third  left-0 top-0" />

              <span className=" block text-sm">Templates</span>
            </div>
            <div className="  hover:bg-[#1c1715]  overflow-hidden relative border border-transparent hover:border-border text-third rounded-[5px] [&>*]:text-[#ada89f] cursor-pointer px-[12px]    h-[40px]  flex items-center space-x-[10px]  hovertext-white">
              <ClockIcon className="h-5 w-5   text-third  left-0 top-0" />

              <span className=" block text-sm">Desing Systems</span>
            </div>
            <div className="  hover:bg-[#1c1715]  overflow-hidden relative border border-transparent hover:border-border text-third rounded-[5px] [&>*]:text-[#ada89f] cursor-pointer px-[12px]    h-[40px]  flex items-center space-x-[10px]  hovertext-white">
              <ClockIcon className="h-5 w-5   text-third  left-0 top-0" />

              <span className=" block text-sm">Premium UI Kits</span>
            </div>
            <div className="  hover:bg-[#1c1715]  overflow-hidden relative border border-transparent hover:border-border text-third rounded-[5px] [&>*]:text-[#ada89f] cursor-pointer px-[12px]    h-[40px]  flex items-center space-x-[10px]  hovertext-white">
              <ClockIcon className="h-5 w-5   text-third  left-0 top-0" />

              <span className=" block text-sm">icons</span>
            </div>
            <div className="  hover:bg-[#1c1715]  overflow-hidden relative border border-transparent hover:border-border text-third rounded-[5px] [&>*]:text-[#ada89f] cursor-pointer px-[12px]    h-[40px]  flex items-center space-x-[10px]  hovertext-white">
              <ClockIcon className="h-5 w-5   text-third  left-0 top-0" />

              <span className=" block text-sm">Typography</span>
            </div>

            <div className="  hover:bg-[#1c1715]  overflow-hidden relative border border-transparent hover:border-border text-third rounded-[5px] [&>*]:text-[#ada89f] cursor-pointer px-[12px]    h-[40px]  flex items-center space-x-[10px]  hovertext-white">
              <ClockIcon className="h-5 w-5   text-third  left-0 top-0" />

              <span className=" block text-sm">Desing tools</span>
            </div>
          </div>

          <div className=" absolute bottom-0 py-2 w-full">
            <div className="  h-[1px] bg-border  w-full"></div>
            <p className=" text-[12px] text-third mt-4">
              © 2024 MADE BY FAZLUL KARIM
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
