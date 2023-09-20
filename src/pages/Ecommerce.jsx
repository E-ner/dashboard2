import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoDot } from "react-icons/go";

import { Stacked, Pie, Button, SparkLine } from "../components";
import {
  earningData,
  SparklineAreaData,
  ecomPieChartData,
} from "../data/dummy";
import { useStateContext } from "../context/ContextProvider";

const Ecommerce = () => {
  const {currentColor} = useStateContext()
  return (
    <div className="mt-12">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Earnings</p>
              <p className="text-2xl">$63, 448.78</p>
            </div>
          </div>
          <div className="mt-6">
            <Button
              color="white"
              bgColor={currentColor}
              text="Dowload"
              borderRadius="10px"
            />
          </div>
        </div>

        <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
          {earningData.map((items) => (
            <div
              key={items.title}
              className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-36 p-4 pt-9 rounded-2xl"
            >
              <button
                style={{
                  color: items.iconColor,
                  backgroundColor: items.iconBg,
                }}
                className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
              >
                {items.icon}
              </button>

              <p className="mt-3">
                <span className="text-lg font-semibold">{items.amount}</span>
                <span className={`text-sm text-${items.pcColor} ml-2`}>
                  {items.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400 mt-1">{items.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-10 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780 sm:w-[600px]">
          <div className="flex justify-between">
            <p className="font-semibold text-md">Revenue Updates</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span>
                  {" "}
                  <GoDot />
                </span>
                <span>Expense</span>
              </p>
              <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                <span>
                  {" "}
                  <GoDot />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className="mt-10 flex gap-4 flex-wrap justify-center ">
            <div className="border-r-1 border-color m-4 pr-10">
              <div>
                <p>
                  <span className="text-xl font-semibold">$67,454</span>
                  <span className="p-1 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
                    20%
                  </span>
                </p>
                <p className="text-gray-500 mt-1 text-sm">Budget</p>
              </div>
              <div className="mt-8">
                <p>
                  <span className="text-xl font-semibold">$97,454</span>
                </p>
                <p className="text-gray-500 mt-1 text-sm">Expences</p>
              </div>
              <div className="mt-5">
                <SparkLine
                  currentColor={currentColor}
                  id="line-sparkline"
                  type="Line"
                  height="80px"
                  width="200"
                  data={SparklineAreaData}
                  color={currentColor}
                />
              </div>
              <div className="mt-10">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="Dowload Report"
                  borderRadius="10px"
                />
              </div>
            </div>
            <Stacked width="300px" height="320px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
