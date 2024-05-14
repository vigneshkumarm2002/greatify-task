import React from "react";
import LineChart from "./lineChart";
import DoughnutDetails from "./DoughnutDetails";
import ProgressDetails from "./progressDetails";
import {
  AcademicCapIcon,
  ArrowTrendingUpIcon,
  BriefcaseIcon,
  CurrencyRupeeIcon,
} from "@heroicons/react/24/outline";
import Header from "./header";

// import {
//   AcademicCapIcon,
//   BriefcaseIcon,
//   CurrencyRupeeIcon,
//   TrendingUpIcon,
// } from "@heroicons/react/24/outline";
const Dashboard = () => {
  const unversityGraph = {
    xaxis: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    plots: [0, 0, 2, 1, 5, 7, 3, 5, 2, 6, 5, 7],
  };

  const employersGraph = {
    xaxis: [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
    plots: [1, 5, 7, 3, 4, 2, 3, 6, 5, 7],
  };
  const employerAnalytics = [
    {
      name: "Total Students",
      value: "134,877",
      icon: AcademicCapIcon,
      iconColor: "text-blue-500",
    },
    {
      name: "Total Teachers",
      value: "12,126",
      icon: AcademicCapIcon,
      iconColor: "text-orange-500",
    },
    {
      name: "Total Employers",
      value: "72,976",
      icon: BriefcaseIcon,
      iconColor: "text-green-500",
    },
    {
      name: "Total Earnings",
      value: "₹85c",
      icon: CurrencyRupeeIcon,
      iconColor: "text-yellow-500",
    },
    {
      name: "Total Expenses",
      value: "₹54c",
      icon: CurrencyRupeeIcon,
      iconColor: "text-red-600",
    },
    {
      name: "Total Profit",
      value: "₹54c",
      icon: ArrowTrendingUpIcon,
      iconColor: "text-green-600",
    },
  ];
  return (
    <div className="w-full h-full bg-[#F4F4F5] rounded-md flex flex-col gap-4 pb-4">
      {/* header section */}
      <Header />

      {/* 1st graph and cards */}
      <div className="px-4  w-full flex gap-4">
        <div className="h-auto w-[calc(100%-400px)] bg-white rounded-md border border-gray-200 p-4 flex flex-col ">
          {/* lineChart header */}
          <div className="flex justify-between items-center">
            <p className="text-[#00373A] text-lg font-medium">Universities</p>
            <div className="flex gap-4">
              <select className="  w-max bg-white border border-gray-300  px-1 py-1 rounded-lg outline-none">
                <option value="Onboard">Onboard</option>
              </select>

              <select className="  w-max bg-white border border-gray-300  px-1 py-1 rounded-lg outline-none">
                <option value="2024">2024</option>
              </select>
            </div>
          </div>

          {/* linechart component */}
          <div className="h-full pt-4">
            <LineChart
              data={unversityGraph}
              color={"#00DC46"}
              gradientStart={"rgba(0, 220, 70, 0.4)"}
              gradientStop={"rgba(0, 220, 70, 0  )"}
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 w-[400px]">
          <div className="bg-[#FF8A3B] w-full h-[150px] p-4 rounded-md text-white  border border-[#FF8A3B]   ">
            <h1 className="font-semibold">Manage Universities</h1>
            <p className="w-[50%] text-sm text-gray-100 mt-1 leading-[1.5]">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
          <div className="bg-[#00373A] w-full h-[250px] p-4 rounded-md text-white border border-[#00373A] flex justify-between flex-col ">
            <div>
              <h1 className="font-semibold">Configure curriculum</h1>
              <p className="w-[70%] text-sm text-gray-200 mt-1 leading-[1.5]">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
            <p className="text-[#00DC46] text-sm font-medium">
              TOTAL CURRICULAM: 18
            </p>
          </div>
        </div>
      </div>

      {/* 2nd graph */}

      <div className="h-[420px] w-full px-4">
        <div className="w-full h-full rounded-md flex ">
          <div className="h-full w-[45%]">
            <DoughnutDetails />
          </div>
          <div className="h-full w-[55%]">
            <ProgressDetails />
          </div>
        </div>
      </div>

      {/* 3rd graph */}
      <div className="px-4  w-full flex gap-4">
        <div className="h-auto w-[calc(100%-400px)] bg-white rounded-md border border-gray-200 p-4 flex flex-col ">
          <p className="text-[#00373A] text-lg font-medium">Employers</p>

          {/* linechart component */}
          <div className="h-full pt-4">
            <LineChart
              data={employersGraph}
              color={"#6240C8"}
              gradientStart={"rgba(98, 64, 200, 0.4)"}
              gradientStop={"rgba(98, 64, 200, 0)"}
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 w-[400px]">
          <div className="bg-[#6240C8] w-full h-[150px] p-4 rounded-md text-white  border border-[#6240C8]   ">
            <h1 className="font-semibold">Manage Employers</h1>
            <p className="w-[50%] text-sm text-gray-100 mt-1 leading-[1.5]">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
          <div className="bg-[#F9F7E8] w-full h-[260px] p-4 rounded-md text-white border border-[#F9F7E8] flex justify-between flex-col ">
            <div className="flex justify-between items-center pb-4">
              <h1 className="font-semibold text-[#00373A]">Analytics</h1>
              <select className="  w-max bg-[#F9F7E8] border text-[#00373A] text-sm border-gray-300  px-1 py-1 rounded-lg outline-none">
                <option value="2023-2024">2023-2024</option>
              </select>
            </div>
            <div className="grid grid-cols-3 gap-6">
              {employerAnalytics?.map((category) => (
                <div key={category.name} className="flex flex-col gap-2">
                  {
                    <category.icon
                      className={`h-5 w-5 ${
                        category?.iconColor
                          ? category?.iconColor
                          : "text-green-300"
                      }`}
                    />
                  }
                  <p className="text-xs text-gray-400">{category.name}</p>
                  <p className="text-base text-[#00373A] font-semibold">
                    {category.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
