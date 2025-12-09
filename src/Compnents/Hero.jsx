import { useEffect, useRef } from "react";
import { logo } from "../Data/data";
import { RestaurantName } from "../Data/data";
import { catchyExpression } from "../Data/data";

export default function Hero() {
  const expressionFeatures = {
    1: "pt-15 sm:pt-5 sm:pl-5",
    2: "border-green-600 text-4xl font-bold w-full pt-10 sm:pt-5 sm:pl-5",
    3: "sm:w-[90%] w-full pt-10 sm:pt-5 sm:pl-5",
    4: "border-yellow-600 bg-[rgb(252,216,73)] sm:w-fit font-bold italic text-black w-full mt-10 sm:mt-1 sm:ml-5",
  };

  return (
    <div
      id="Hero"
      className="flex relative text-white bg-[url(/images/heroImage.jpg)] bg-center bg-no-repeat bg-cover sm:bg-none sm:bg-black text-center sm:text-left sm:p-0 h-[calc(100vh-64px)] scroll-mt-17 hero"
    >
      <div className="mt-[calc(0.15*100vh)] w-full lg:pl-35">
        <h1 className="flex text-5xl font-name sm:pt-10">
          <span className="flex mx-auto sm:mx-0 sm:pl-5">
            <img src={logo} alt="logo" className="w-13" />
            {RestaurantName}
          </span>
        </h1>
        <div>
          {catchyExpression.map((expression) => (
            <p
              key={expression.id}
              className={` p-2 ${expressionFeatures[expression.id] || ""} `}
            >
              {expression.id === 3 && (
                <span className="mr-1">{RestaurantName}</span>
              )}
              {expression.id === 4 && (
                <span className="mr-1">{RestaurantName}</span>
              )}
              {expression.title}
            </p>
          ))}
        </div>
      </div>
      <div className=" hidden sm:block mt-[calc(0.15*100vh)]  w-full lg:w-[90%] ">
        <img
          src="/images/heroImage.jpg"
          alt="hero Image"
          className="lg:w-[60%] mx-auto"
        />
      </div>
    </div>
  );
}
