"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [state, setState] = useState(false);

  const menus = [
    { title: "Home", path: "/your-path" },
    { title: "Member List", path: "/your-path" },
    { title: "Program", path: "/your-path" },
    { title: "Gallery", path: "/your-path" },
    { title: "BCSKG Business List", path: "/your-path" },
  ];

  return (
    <nav
      className="bg-white 
    backdrop-saturate-200 backdrop-blur-2xl bg-opacity-80 border border-white/80 
    shadow-md w-full border-b md:border-0"
    >
      <div className=" container mx-auto px-4  md:flex items-center ">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
         
         
          <Link href="/">
            <h1 className="text-3xl font-bold text-purple-600">Logo</h1>
          </Link>

        
          <div className="md:hidden">
            <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
            >
              <Menu />
            </button>
          </div>


        </div>

        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {menus.map((item, idx) => (
              <li
                key={idx}
                className="text-gray-800 text-sm font-bold hover:text-indigo-600"
              >
                <Link href={item.path}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className=" hidden md:block">
          <Button className={"bg-[#ef004f] hover:bg-[#df044d]"}>
            Donate Now
          </Button>
        </div>
      </div>
    </nav>
  );
}
