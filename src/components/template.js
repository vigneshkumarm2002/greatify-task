import React from "react";
import LineChart from "./lineChart";
import DoughnutDetails from "./DoughnutDetails";
import ProgressDetails from "./progressDetails";
import Header from "./header";
const Template = ({ title }) => {
  return (
    <div className="w-full min-h-[calc(100vh-32px)] bg-[#F4F4F5] rounded-md flex flex-col gap-4 pb-4">
      {/* header section */}
      <Header />
      <div className="px-4">
        <h1 className="text-[#00373A] text-2xl font-medium">{title}</h1>
      </div>
    </div>
  );
};

export default Template;
