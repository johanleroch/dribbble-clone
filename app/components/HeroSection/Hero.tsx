import React from "react";
import Header from "../Header";
import clsx from "clsx";
import Carousel from "./Carousel";

export default function Hero() {
  return (
    <div className="bg-[#F8F7F4] overflow-x-clip">
      <Header />
      <div className="flex flex-col justify-center pt-20">
        <div className="flex justify-center">
          <span className="bg-[#ffda79] rounded-full px-5 py-2 font-serif">
            Over 3 million ready-to-work creatives!
          </span>
        </div>
        <h1
          className={clsx(
            "font-serif md:text-7xl text-center max-w-[870px] mx-auto mt-10 mb-6",
            "text-4xl px-4 md:px-5"
          )}
        >
          The world’s destination for design
        </h1>
        <p className="text-xl leading-9 mx-auto">
          Get inspired by the work of millions of top-rated designers & agencies
          around the world.
        </p>
        <div className="flex justify-center mt-8 -mb-10">
          <button
            className={clsx(
              "text-sm font-semibold text-white bg-custom-black",
              "px-6 py-4 rounded-full"
            )}
          >
            Get started
          </button>
        </div>
        <Carousel className="translate-y-1/3" />
      </div>
    </div>
  );
}
