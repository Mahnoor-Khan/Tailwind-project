import React from "react";
import laptop from "../assets/laptop.jpg";
import { colors } from "../styles/colors";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid  md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={laptop} alt="_laptop" />
        <div className="flex flex-col justify-center">
          <p className={`text-[${colors?.mainColor}] font-bold `}>
            DATA ANALYTICS DASHBOARD
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Carefully
          </h1>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
            facere quo voluptates ratione aperiam. Blanditiis eaque natus nulla
            sequi quod libero nostrum molestias perferendis eius assumenda,
            dicta voluptas reprehenderit atque!
          </p>
          <button
            className={`text-[${colors?.mainColor}] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 bg-black`}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
