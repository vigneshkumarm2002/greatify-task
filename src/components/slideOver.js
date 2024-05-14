import { Fragment, useState } from "react";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";

import { XMarkIcon } from "@heroicons/react/16/solid";

const SlideOvers = ({ open, close }) => {
  const [checklistItems, setChecklistItems] = useState({
    "School configuration": false,
    Library: false,
    "Alumni management": false,
    "Job profiles": false,
    "Manage PTA": false,
    "Placed students": false,
    "Notification management": false,
    "Visitor log entry": false,
    Placement: false,
    "Manage to do": false,
    "Teacher settlement": false,
    "Manage notes": false,
    "Manage transport": false,
    "Daily trips": false,
    Service: false,
    "Employees settlement": false,
    "Content management": false,
    "My dashboard": false,
    "Class management": false,
    "Student management": false,
    "Teacher management": false,
    "Admission management": false,
    "Parent management": false,
    "User management": false,
    "Student attendance": false,
    "Examination management": false,
    "Hostel management": false,
    "Fees management": false,
    "Library management": false,
    "Event management": false,
    "Curriculum management": false,
    "Time table management": false,
    "Staff attendance": false,
    "Inventory management": false,
  });

  const handleCheckboxChange = (itemName) => {
    setChecklistItems((prevItems) => ({
      ...prevItems,
      [itemName]: !prevItems[itemName],
    }));
  };

  return (
    <Transition show={open} as={Fragment}>
      <Dialog className="relative z-10" onClose={close}>
        <TransitionChild
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 transition-opacity" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-hidden  ">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <TransitionChild
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <DialogPanel className="relative pointer-events-auto overflow-y-auto w-[650px] bg-white progressScroll shadow-md">
                  <DialogTitle className=" flex justify-between sticky h-[60px] w-full top-0 left-0 bg-white z-10 p-4 border-b border-gray-300">
                    <p className="text-lg font-medium text-[#00373A]">
                      Invite University
                    </p>

                    <XMarkIcon
                      onClick={close}
                      className="  w-5 h-5 p-[2px] cursor-pointer text-white bg-[#00DC46] rounded-full"
                    />
                  </DialogTitle>

                  <div className=" flex-1 px-4 py-6 sm:px-6 flex flex-col gap-4">
                    <div>
                      <p className="text-[#00373A] text-lg font-medium">
                        College details
                      </p>

                      <div className="pt-4 grid grid-cols-2 gap-4">
                        <div className="sm:col-span-1">
                          <label
                            htmlFor="universityName"
                            className="block text-xs font-medium text-gray-700 pb-1"
                          >
                            University Name
                          </label>
                          <input
                            type="text"
                            name="universityName"
                            id="universityName"
                            autoComplete="university-name"
                            class="block w-full px-2 py-2  text-xs h-[35px] text-gray-900 border border-gray-300 rounded-md outline-none"
                            placeholder="University Name"
                          />
                        </div>
                        <div className="sm:col-span-1">
                          <label
                            htmlFor="curriculum"
                            className="block text-xs font-medium text-gray-700 pb-1"
                          >
                            Select Curriculum
                          </label>
                          <select
                            id="curriculum"
                            name="curriculum"
                            autoComplete="curriculum"
                            class="block w-full px-2 py-2  text-xs h-[35px] text-gray-900 border border-gray-300 rounded-md outline-none"
                          >
                            <option>Select </option>
                            {/* Add curriculum options here */}
                          </select>
                        </div>
                        <div className="sm:col-span-1">
                          <label
                            htmlFor="universitySite"
                            className="block text-xs font-medium text-gray-700 pb-1"
                          >
                            University Site
                          </label>
                          <input
                            type="text"
                            name="universitySite"
                            id="universitySite"
                            autoComplete="university-site"
                            placeholder="Website link"
                            class="block w-full px-2 py-2  text-xs h-[35px] text-gray-900 border border-gray-300 rounded-md outline-none"
                          />
                        </div>
                        <div className="sm:col-span-1">
                          <label
                            htmlFor="emailAddress"
                            className="block text-xs font-medium text-gray-700 pb-1"
                          >
                            Email Address
                          </label>
                          <input
                            type="email"
                            name="emailAddress"
                            id="emailAddress"
                            autoComplete="email"
                            placeholder="Email address"
                            class="block w-full px-2 py-2  text-xs h-[35px] text-gray-900 border border-gray-300 rounded-md outline-none"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between">
                        <p className="text-[#00373A] text-lg font-medium">
                          Activate Modules
                        </p>
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id="Select all"
                            checked={false}
                            className="mr-2"
                          />
                          <label
                            htmlFor="Select all"
                            className="text-sm font-medium text-gray-700"
                          >
                            Select all
                          </label>
                        </div>
                      </div>
                      <div className="mt-4 grid grid-cols-3 gap-4 border border-gray-300 p-4 rounded-md h-[285px] overflow-y-auto progressScroll">
                        {Object.entries(checklistItems).map(
                          ([itemName, checked]) => (
                            <div key={itemName} className="flex items-center">
                              <input
                                type="checkbox"
                                id={itemName}
                                checked={checked}
                                onChange={() => handleCheckboxChange(itemName)}
                                className="mr-2"
                              />
                              <label
                                htmlFor={itemName}
                                className="text-xs font-normal text-gray-700"
                              >
                                {itemName}
                              </label>
                            </div>
                          )
                        )}
                      </div>
                    </div>

                    <div className="pt-4 grid grid-cols-2 gap-4">
                      <div className="sm:col-span-1">
                        <label
                          htmlFor="SMSCredits"
                          className="block text-xs font-medium text-gray-700 pb-1"
                        >
                          SMS Credits
                        </label>
                        <input
                          type="text"
                          name="SMSCredits"
                          id="SMSCredits"
                          autoComplete="SMSCredits"
                          class="block w-full px-2 py-2  text-xs h-[35px] text-gray-900 border border-gray-300 rounded-md outline-none"
                          placeholder="Credits"
                        />
                      </div>
                      <div className="sm:col-span-1">
                        <label
                          htmlFor="universitySite"
                          className="block text-xs font-medium text-gray-700 pb-1"
                        >
                          Whatsapp Credits
                        </label>
                        <input
                          type="text"
                          name="WhatsappCredits"
                          id="WhatsappCredits"
                          autoComplete="WhatsappCredits"
                          placeholder="Credits"
                          class="block w-full px-2 py-2  text-xs h-[35px] text-gray-900 border border-gray-300 rounded-md outline-none"
                        />
                      </div>
                      <div className="sm:col-span-1">
                        <label
                          htmlFor="emailAddress"
                          className="block text-xs font-medium text-gray-700 pb-1"
                        >
                          Marketplace Commision
                        </label>
                        <input
                          type="text"
                          name="MarketplaceCommision"
                          id="MarketplaceCommision"
                          autoComplete="MarketplaceCommision"
                          placeholder="Commision"
                          class="block w-full px-2 py-2  text-xs h-[35px] text-gray-900 border border-gray-300 rounded-md outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div className=" flex justify-between sticky h-[70px] w-full bottom-0 left-0 bg-white z-10 p-4 border-t border-gray-300">
                    <button
                      onClick={close}
                      className="cursor-pointer h-[35px] bg-white text-[#00373A] border border-gray-300  px-3 rounded-md text- font-medium"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={close}
                      className="cursor-pointer bg-[#00DC46] h-[35px]  px-3 rounded-md text-white font-medium"
                    >
                      Send Invite
                    </button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default SlideOvers;
