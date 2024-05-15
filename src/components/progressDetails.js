import React from "react";

import ProgressChart from "./progressChart";
import { Tooltip } from "react-tooltip";

const ProgressDetails = () => {
  const varients = [
    { name: "SMS", color: "#00DC46" },
    { name: "Whatsapp", color: "#00373A" },
  ];

  const universityDetails = [
    { name: "Amity University", sms: 138, WhatsApp: 124, ID: "HCCOOLEGE0001" },
    {
      name: "Chitkara University",
      sms: 94,
      WhatsApp: 116,
      ID: "HCCOOLEGE0002",
    },
    { name: "Delhi University", sms: 156, WhatsApp: 324, ID: "HCCOOLEGE0003" },
    {
      name: "Stanford University",
      sms: 200,
      WhatsApp: 150,
      ID: "HCCOOLEGE0004",
    },
    {
      name: "Harvard University",
      sms: 180,
      WhatsApp: 200,
      ID: "HCCOOLEGE0005",
    },
    {
      name: "Massachusetts Institute of Technology (MIT)",
      sms: 250,
      WhatsApp: 180,
      ID: "HCCOOLEGE0006",
    },
    {
      name: "University of Cambridge",
      sms: 220,
      WhatsApp: 210,
      ID: "HCCOOLEGE0007",
    },
    { name: "Oxford University", sms: 180, WhatsApp: 190, ID: "HCCOOLEGE0008" },
    {
      name: "Princeton University",
      sms: 190,
      WhatsApp: 170,
      ID: "HCCOOLEGE0009",
    },
    { name: "Yale University", sms: 210, WhatsApp: 160, ID: "HCCOOLEGE0010" },
  ];

  return (
    <div className="bg-white h-full w-full border-y border-r rounded-e-md border-gray-200  overflow-y-auto progressScroll ">
      <div className="flex h-[60px] pt-4 w-full top-0 right-0 bg-white  sticky justify-between items-center px-6">
        <h4 className="text-base font-medium text-gray-500">
          Top SMS/Whatsapp consumed university
        </h4>

        <div className="flex gap-4">
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
      <div className="flex   flex-col divide-y divide-y-gray-900   px-6  ">
        {universityDetails?.map((item, index) => (
          <div className="flex flex-col gap-[10px]  py-6  ">
            <div className="flex justify-between items-center w-full gap-4">
              <p className="text-lg font-medium text-[#00373A]">{item?.name}</p>
              <p className="text-sm text-gray-400 ">ID: {item?.ID}</p>
            </div>

            <ProgressChart
              smsCount={item?.sms}
              whatsappCount={item?.WhatsApp}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressDetails;
