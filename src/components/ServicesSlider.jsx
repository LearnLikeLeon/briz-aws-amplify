"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";

import { RxArrowTopRight } from "react-icons/rx";
import { ServiceData } from "./services/listOfServices";
import Image from "next/image";

export default function ActiveSlider() {
  return (
    // h-[900px] or h-screen
    <div className="flex items-center justify-center flex-col h-[900px] lg:h-[1200px] bg-blue-300 rounded-3xl">
      <div className="container mx-auto  text-gray-500 ">
        <header className="text-center mx-auto mb-4 lg:px-20">
          <h1 className="font-semibold font-serif text-black text-4xl">
            {" "}
            Our Services{" "}
          </h1>
          <h2 className="text-2xl leading-normal m-4 font-bold italic font-serif text-black">
            Driving better business decisions
          </h2>

          <p className="text-black indent-8 leading-relaxed font-light font-serif text-2xl text-justify mx-auto">
            We are dedicated to helping our clients unlock the full potential of
            their subsurface data through our innovative suite of tools and
            services. Through the ES consulting Suite, we provide advanced data
            analytics, visualization, and workflow automation capabilities to
            help you make sense of your data and derive valuable insights. In
            addition, we offer consulting services to help you optimize your
            workflows and achieve your business objectives, as well as
            multi-client products to provide you with the data you need to drive
            your decision-making.
          </p>
        </header>
      </div>

      <p className="text-2xl leading-normal font-bold font-serif italic text-black pb-10">
        {" "}
        We provide a variety of services such as :{" "}
      </p>
      <Swiper
        breakpoints={{
          //  iPhone X screens 'sm': '375px'
          //  screens 'sm': '640px'
          520: {
            slidesPerView: 2,
            spaceBetween: 15,
          },

          //  screens 'md': '768px'
          768: {
            slidesPerView: 3,
            spaceBetween: 15,
          },

          //  screens 'lg': '1024px'
          1024: {
            slidesPerView: 3,
            spaceBetween: 5,
          },

          //  screens 'xl': '1280px'
          //   1280: {
          //     slidesPerView: 4,
          //     spaceBetween: 20,
          //   },

          //  screens '2xl': '1536px'
          //   1536: {
          //     slidesPerView: 5,
          //     spaceBetween: 20,
          //   },
        }}
        slidesPerView={1}
        loop={true}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="max-w-[90%] lg:max-w-[80%]"
      >
        {ServiceData.map((item) => (
          <SwiperSlide key={item.title}>
            <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[430px] lg:w-[450px] overflow-hidden cursor-pointer">
              <div
                className="absolute inset-0 bg-cover bg-center"
                // style={{ backgroundImage: `url(${item.backgroundImage})` }}
              />
              <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
              <div className="relative flex flex-col gap-3">
                <item.icon className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]" />
                <h1 className="text-xl lg:text-3xl font-serif">
                  {item.title}{" "}
                </h1>
                <p className="lg:text-[18px] indent-2 font-serif italic text-justify">
                  {item.content}{" "}
                </p>

                <a
                  href="https://www.researchgate.net/profile/Edwige-Feulefack-Songong-2"
                  className="block font-medium font-serif text-cyan-800 group-hover:text-white italic text-xl"
                >
                  Know more...
                </a>

                <div className="service-image">
                  <Image
                    src={item.image}
                    alt="service-illustration-image"
                    // w-36	means width: 9rem; or /* 144px */
                    width={240}
                    height={0}
                    className=" flex items-center justify-center mx-auto"
                  />
                </div>
              </div>

              <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
