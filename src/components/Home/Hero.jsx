import React from "react";
import Banner from "../../app/img/banner.jpg";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Hero() {
  return (
    <Carousel className="w-full  ">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <Image
            key={index}
            src={Banner}
            className="h-[30rem] w-full"
            height={1000}
            width={1000}
          />
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
