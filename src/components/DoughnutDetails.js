import React from "react";
import { Doughnut } from "react-chartjs-2";
import DoughnutChart from "./doughnutChart";

const PieChart = () => {
  const varients = [
    { name: "Remaining credits", color: "#00373A" },
    { name: "Consumed credits", color: "#00DC46" },
  ];
  return (
    <div className="bg-[#E6FCED] h-full w-full border-y border-l rounded-s-md border-[#00DC46] p-4 flex flex-col">
      <div className="flex h-[50px]  justify-between items-center ">
        <div>
          <h4 className="text-lg font-medium text-[#00373A]">
            SMS and Whatsapp
          </h4>
          <p className="text-sm text-gray-500">Total purchased: 17260</p>
        </div>

        <div className="flex gap-4">
          <select className="  w-max h-max bg-[#E6FCED] border border-[#00DC46]  px-1 py-1 rounded-lg outline-none">
            <option value="all">All</option>
          </select>
        </div>
      </div>
      <div className="h-[270px] w-full pt-4  flex justify-center items-center">
        <DoughnutChart />
      </div>
      <div className="flex gap-4 pt-6  items-end justify-center">
        {varients?.map((item, index) => (
          <div className="flex gap-2 items-center justify-center">
            <div className={`w-4 h-4 rounded-sm bg-[${item?.color}] `}></div>
            <div className="text-base text-[#00373A] font-medium">
              {item?.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChart;
