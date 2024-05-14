import React from "react";

const ProgressComponent = ({ smsCount, whatsappCount }) => {
  const totalSize = 1000;
  const remainingCount = totalSize - (smsCount + whatsappCount);
  // Calculate widths
  const smsWidth = `${(smsCount / totalSize) * 100}%`;
  const whatsappWidth = `${(whatsappCount / totalSize) * 100}%`;
  const remainingWidth = `${(remainingCount / totalSize) * 100}%`;

  return (
    <div className="w-full h-6 bg-gray-200 rounded-md overflow-hidden">
      <div className=" h-full flex">
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
    </div>
  );
};

export default ProgressComponent;
