import React from "react";
import Sidebar from "../Sidebar";
import Image from "next/image";
import info_img from "../../app/img/info_img.webp";

export default function Info() {
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
                <h3 className=" text-[24px] ">Info</h3>
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
            <div className="py-10 grid gap-10 lg:grid-cols-2 lg:gap-x-20">
              <div className="flex justify-center lg:justify-end lg:order-2">
                <Image
                  src={info_img}
                  alt="info"
                  height={500}
                  width={500}
                  className="lg:w-[35rem]"
                />
              </div>
              <div className="flex flex-col gap-[48px]">
                <div className="flex flex-col gap-[12px]">
                  <h2 className="text-[#faf9f7] text-[22px] font-normal tracking-[0.01em] leading-[28px]">
                    About us
                  </h2>
                  <p className="text-[16px] leading-[21.6px] text-[#ada89f] font-medium">
                    At DailyHub, we curate a diverse collection of uplifting
                    content to fuel your creativity and spark new ideas every
                    day. Whether you&rsquo; re a seasoned designer, a budding
                    artist, or someone seeking daily motivation, we&rsquo; ve
                    got you covered.
                  </p>
                  <p className="text-[16px] leading-[21.6px] text-[#ada89f] font-medium">
                    Explore our curated selection of inspiring stories, design
                    trends, and thought-provoking content that aims to elevate
                    your daily experiences. Join our community of creative minds
                    and embark on a journey of continuous inspiration.
                  </p>
                  <p className="text-[16px] leading-[21.6px] text-[#ada89f] font-medium">
                    DailyHub is more than just a website, it&rsquo;s a hub for
                    those who seek to infuse their daily lives with creativity,
                    innovation, and positive vibes. Let&rsquo;s inspire and be
                    inspired together!
                  </p>
                </div>
                <div className="flex flex-col gap-[12px]">
                  <h2 className="text-[#faf9f7] text-[22px] font-normal tracking-[0.01em] leading-[28px]">
                    A Sponsor
                  </h2>
                  <p className="text-[16px] leading-[21.6px] text-[#ada89f] font-medium">
                    Open for New Sponsorships!
                  </p>
                  <div className="pt-2">
                    <button className="text-[#faf9f7] text-[18px] font-medium tracking-[0.01em] leading-[22.5px] border-border border py-[6px] px-[16px] rounded-full btnShadow">
                      A Sponsor
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[12px] lg:order-last">
                <h2 className="text-[#faf9f7] text-[22px] font-normal tracking-[0.01em] leading-[28px]">
                  Submit
                </h2>
                <p className="text-[16px] leading-[21.6px] text-[#ada89f] font-medium">
                  Seeking top-notch tools for designers! Submit your
                  recommendations via our form, each is manually approved for
                  the highest standards. Join us in shaping design excellence!
                </p>
                <div className="pt-2">
                  <button className="text-[#faf9f7] text-[18px] font-medium tracking-[0.01em] leading-[22.5px] border-border border py-[6px] px-[20px] rounded-full btnShadow">
                    Submit
                  </button>
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
