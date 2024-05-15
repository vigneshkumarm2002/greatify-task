import React from "react";
import { Tooltip } from "react-tooltip";

const ProgressComponent = ({ smsCount, whatsappCount }) => {
  const totalSize = 1000;
  const remainingCount = totalSize - (smsCount + whatsappCount);
  // Calculate widths
  const smsWidth = `${(smsCount / totalSize) * 100}%`;
  const whatsappWidth = `${(whatsappCount / totalSize) * 100}%`;
  const remainingWidth = `${(remainingCount / totalSize) * 100}%`;

  const varients = [
    { name: "SMS", color: "#00DC46", count: smsCount },
    { name: "Whatsapp", color: "#00373A", count: whatsappCount },
  ];

  const tooltipRender = () => {
    return varients?.map((item, index) => (
      <div className="flex gap-2 items-center justify-center">
        <div className={`w-4 h-4 rounded-sm bg-[${item?.color}] `}></div>
        <div className="text-base text-[#00373A] font-medium">
          {item?.name} : {item?.count}
        </div>
      </div>
    ));
  };

  return (
    <div className="w-full h-6 bg-gray-200 rounded-md overflow-hidden">
      <div
        data-tooltip-id={`tooltip+ ${smsCount + whatsappCount}`}
        data-tooltip-html={`
    ${varients
      ?.map(
        (item, index) =>
          `<div class="flex gap-2 items-center ">
        <div class="w-2 h-2 rounded-sm  bg-[${item?.color}]"></div>
        <div class="text-xs text-gray-500 font-medium">
          ${item?.name} : <span class="text-[#00373A] font-medium">${item?.count}</span>
        </div>
      </div>`
      )
      .join("")}
  `}
        className=" h-full flex"
      >
        <div
          className="h-full  flex items-center justify-end px-2 text-sm font-semibold rounded-s-md text-[#00373A] bg-[#00DC46]"
          style={{ width: `${smsWidth}` }}
        >
          {smsCount}
        </div>
        <div
          className={`h-full  flex items-center justify-end px-2 text-sm font-semibold rounded-e-md bg-[#00373A] text-[#00DC46]`}
          style={{ width: `${whatsappWidth}` }}
        >
          {whatsappCount}
        </div>
        <div
          style={{ width: `${remainingWidth}` }}
          className={`h-full   rounded-e-md  text-sm font-semibold text-gray-400 flex items-center justify-end px-2 `}
        >
          CREDITS : 1000
        </div>
      </div>
      <Tooltip
        id={`tooltip+ ${smsCount + whatsappCount}`}
        place="top"
        style={{
          backgroundColor: "rgb(244, 244, 245)",
          fontWeight: "400",
          color: "#222",
        }}
      />
    </div>
  );
};

export default ProgressComponent;
