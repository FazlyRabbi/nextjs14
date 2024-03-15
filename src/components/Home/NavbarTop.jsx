import React from "react";
import { Input } from "@/components/ui/input";

import {
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";

function NavbarTop() {
  return (
    <nav className="bg-[#1f2a40] py-2">
      <div className="container mx-auto">
        <div className=" flex  justify-center md:justify-between items-center">
          {/* phone and email */}

          <div className="hidden md:block">
            <div className=" flex  space-x-8">
              <div className="flex space-x-2  items-center">
                <Phone size={17} className="  text-red-500 cursor-pointer" />
                <p className="text-white text-sm">1-888-123-4567</p>
              </div>
              <div className="flex  space-x-2    items-center">
                <Mail size={17} className="  text-red-500 cursor-pointer" />
                <p className="text-white text-sm">social@example.com</p>
              </div>
            </div>
          </div>

          {/* social icons */}
          <div className="flex items-center space-x-8">
            <Facebook size={17} className="text-white cursor-pointer" />
            <Twitter size={17} className="text-white cursor-pointer" />
            <Instagram size={17} className="text-white cursor-pointer" />
            <Youtube size={19} className="text-white cursor-pointer" />
          </div>
          {/* search bar */}
          <div className="  hidden lg:block">
            <Input
              type="search"
              placeholder="Search.."
              className="py-0 h-6 border-none  text-sm bg-transparent text-white"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavbarTop;
