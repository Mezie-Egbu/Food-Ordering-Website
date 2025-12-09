import { useEffect, useRef } from "react";
import { AboutInfo } from "../Data/data";
import { aboutImages } from "../Data/data";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  return (
    <div
      className=" bg-[url(/images/about-background-image.jpg)]  bg-center bg-no-repeat bg-cover text-white py-10 md:h-lvh scroll-mt-10"
      id="About"
    >
      <div className="p-8 sm:w-[90%] md:w-[90%] mx-auto backdrop-blur-md pt-10 border-t-2 border-b-2 border-[rgb(252,216,73)] rounded-4xl">
        <div>
          <h1 className="pt-2 text-3xl font-bold font-name">
            {AboutInfo.title}
          </h1>
          <p className="py-4 font-name-others">{AboutInfo.description}</p>
        </div>
        <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {aboutImages.map((image) => (
            <img
              className="border border-[rgb(252,216,73)] rounded-xl"
              key={image.id}
              src={image.src}
              alt={image.alt}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
