import React from "react";
import { images } from "../../../constant";

import Search from "../../../components/Search";




const Hero = () => {
  return (
    <section className=" container flex flex-col mx-auto px-5 py-5 lg:flex-row">
      <div className="mt-10 lg:w-1/2">
        <h1 className="font-roboto text-3xl text-center font-bold text-dark-soft lg:text-5xl xl:text-5xl md:text-5xl lg:text-left lg:max-w-[540px]">
          {/* Read the most interesting articles */}
          Human stories & ideas
        </h1>
        <p className="text-dark-light mt-4 text-center md:text-xl lg:text-base xl:text-xl lg:text-left ">
          {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua */}
          A place to read, write, and deepen your understanding
        </p>
        <Search className="mt-10 lg:mt-6 xl:mt-10" />
        <div className="flex flex-col mt-4 lg:items-start lg:flex-row lg:flex-nowrap lg:gap-x-4 lg:mt-7">
          <span className="text-dark-light mt-2 lg:text-sm xl:text-base font-semibold lg:mt-4 italic">
            Popular Tags:
          </span>
          <ul className="flex flex-wrap gap-x-2.5 gap-y-2.5 mt-3 lg:text-sm xl:text-base">
            <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
              Design
            </li>
            <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
              User Experience
            </li>
            <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
              User Interfaces
            </li>
          </ul>
        </div>
      </div>
      <div className="hidden lg:block lg:w-1/2">
        <img
          className="w-full"
          src={images.HeroImage}
          alt="user are reading articles"
        />
      </div>
    </section>
  );
};

export default Hero;
