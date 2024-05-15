import React, { useState } from "react";
import Header from "./header";
import SlideOvers from "./slideOver";

const ManageUniversity = () => {
  const [open, setOpen] = useState(false);
  const tableData = [
    {
      sno: 1,
      universityName: "Bangalore University",
      emailAddress: "info@bangaloreuniversity.ac.in",
      invitedDate: "2024-05-14",
      smsCredits: 500,
      whatsCredits: 300,
    },
    {
      sno: 2,
      universityName: "Tamil Nadu Agricultural University",
      emailAddress: "info@tnau.ac.in",
      invitedDate: "2024-05-15",
      smsCredits: 700,
      whatsCredits: 400,
    },
    {
      sno: 3,
      universityName: "Visvesvaraya Technological University",
      emailAddress: "info@vtu.ac.in",
      invitedDate: "2024-05-16",
      smsCredits: 600,
      whatsCredits: 200,
    },
    {
      sno: 4,
      universityName: "Anna University",
      emailAddress: "info@annauniv.ac.in",
      invitedDate: "2024-05-17",
      smsCredits: 800,
      whatsCredits: 500,
    },
    {
      sno: 5,
      universityName: "University of Madras",
      emailAddress: "info@unom.ac.in",
      invitedDate: "2024-05-18",
      smsCredits: 400,
      whatsCredits: 100,
    },
    {
      sno: 6,
      universityName: "Madurai Kamaraj University",
      emailAddress: "info@mkuniv.ac.in",
      invitedDate: "2024-05-19",
      smsCredits: 900,
      whatsCredits: 600,
    },
  ];

  return (
    <div className="w-full min-h-[calc(100vh-32px)] bg-[#F4F4F5] rounded-md flex flex-col gap-4 pb-4">
      {/* header section */}
      <Header />
      <div className="px-4 flex flex-col gap-4">
        <div className="flex justify-between">
          <h1 className="text-[#00373A] text-2xl font-medium">
            Manage Universities
          </h1>
          <button
            onClick={() => setOpen(true)}
            className="cursor-pointer bg-[#00DC46] py-2  px-3 rounded-md text-white font-medium"
          >
            Invite University
          </button>
        </div>
        {tableData && (
          <div className="min-w-full divide-y divide-gray-200">
            <div className="bg-[#E6FCED] border-[#00DC46] border rounded-md flex items-center justify-center w-full h-[50px]">
              <div className="w-[5%] px-6 py-3 text-left text-xs font-medium text-[#00DC46] uppercase tracking-wider">
                Sno
              </div>
              <div className="w-[20%] px-6 py-3 text-left text-xs font-medium text-[#00DC46] uppercase tracking-wider">
                University Name
              </div>
              <div className="w-[30%] px-6 py-3 text-left text-xs font-medium text-[#00DC46] uppercase tracking-wider">
                Email Address
              </div>
              <div className="w-[15%] px-6 py-3 text-left text-xs font-medium text-[#00DC46] uppercase tracking-wider">
                Invited Date
              </div>
              <div className="w-[15%] px-6 py-3 text-left text-xs font-medium text-[#00DC46] uppercase tracking-wider">
                SMS Credits
              </div>
              <div className=" w-[15%] px-6 py-3 text-left text-xs font-medium text-[#00DC46] uppercase tracking-wider">
                WhatsApp Credits
              </div>
            </div>
            <div className=" w-full flex flex-col gap-2 pt-2 ">
              {tableData?.map((university) => (
                <div
                  key={university.sno}
                  className="bg-white rounded-md flex items-center justify-center w-full h-[50px]"
                >
                  <div className="w-[5%]  text-sm px-6 py-4 ">
                    {university.sno}
                  </div>
                  <div className=" w-[20%] text-sm px-6 py-4 ">
                    {university.universityName}
                  </div>
                  <div className="w-[30%] text-sm px-6 py-4 ">
                    {university.emailAddress}
                  </div>
                  <div className="w-[15%] text-sm px-6 py-4 ">
                    {university.invitedDate}
                  </div>
                  <div className="w-[15%] text-sm px-6 py-4 ">
                    {university.smsCredits}
                  </div>
                  <div className="w-[15%] text-sm px-6 py-4 ">
                    {university.whatsCredits}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <SlideOvers open={open} close={() => setOpen(false)} />
    </div>
  );
};

export default ManageUniversity;
