import React, { useEffect, useState } from "react";
import Logo from "./../assets/greatifyLogo.png";
import SmallLogo from "./../assets/logo.png";
import {
  AcademicCapIcon,
  AdjustmentsHorizontalIcon,
  ArrowRightStartOnRectangleIcon,
  ClipboardDocumentListIcon,
  NewspaperIcon,
  RectangleGroupIcon,
} from "@heroicons/react/24/outline";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import { useLocation } from "react-router-dom";

export const Sidebar = ({ sideBarResize, setSideBarResize }) => {
  const menuItems = [
    {
      name: "Dashboard",
      icon: RectangleGroupIcon,
      href: "/dashboard",
    },
    {
      name: "Manage University",
      icon: AcademicCapIcon,
      href: "/manage-university",
    },
    {
      name: "Manage Course Plan",
      icon: ClipboardDocumentListIcon, // Assuming there's no specific icon for this
      href: "/manage-course-plan",
    },
    {
      name: "Configure Curricular ",
      icon: AdjustmentsHorizontalIcon,
      href: "/configure-curricular",
    },

    {
      name: "Manage Employeess",
      icon: NewspaperIcon,
      href: "/manage-employeess",
    },
  ];

  const location = useLocation();
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    if (location?.pathname == "/") {
      setCurrentLocation("/dashboard");
    } else {
      setCurrentLocation(location?.pathname);
    }
  }, [location]);

  const handleSideBar = () => {
    setSideBarResize(!sideBarResize);
    localStorage.setItem("sideBarResize", !sideBarResize);
  };

  return (
    <div
      className={`text-lg text-black h-[calc(100vh-32px)]  bg-[#00373A] ${
        sideBarResize ? "w-[70px]" : "w-[240px]"
      } fixed rounded-lg flex flex-col justify-between `}
    >
      <div
        onClick={handleSideBar}
        className="cursor-pointer absolute top-7 -right-2 bg-[#00373A] rounded-full h-6 w-6 flex items-center justify-center"
      >
        {!sideBarResize ? (
          <ChevronLeftIcon className="absolute right-[3px] w-4 h-4 text-[#00373A] bg-[#00DC46] rounded-full" />
        ) : (
          <ChevronRightIcon className="absolute right-[3px] w-4 h-4 text-[#00373A] bg-[#00DC46] rounded-full" />
        )}
      </div>

      <div>
        <div className="h-20 border-b border-[#00DC46] flex items-center justify-center">
          <img
            src={!sideBarResize ? Logo : SmallLogo}
            alt="logo"
            className="h-7 w-auto"
          />
        </div>

        <div className="flex flex-col w-full  gap-4  pt-8 overflow-hidden">
          {menuItems?.map((item, index) => (
            <div className=" flex w-full justify-between pl-4 items-center">
              <a
                href={item?.href}
                className={`flex ${
                  currentLocation == item?.href
                    ? "text-white"
                    : "hover:text-white text-gray-300 "
                }  items-center text-sm p-2 whitespace-nowrap`}
              >
                {item.icon && (
                  <item.icon
                    className={`h-6 w-6 mr-2 inline-block ${
                      currentLocation == item?.href
                        ? "text-[#00DC46]"
                        : " hover:text-white text-gray-300"
                    } `}
                  />
                )}
                {!sideBarResize && item?.name}
              </a>
              {!sideBarResize && currentLocation == item?.href && (
                <div className="h-10 w-[10px] bg-[#00DC46] rounded-s-md "></div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="h-[150px] ">
        <div className=" border-t border-[#00DC46] flex pl-4 text-white">
          <p className="flex items-center text-sm px-2 py-4 text-gray-300 hover:text-white cursor-pointer">
            <ArrowRightStartOnRectangleIcon className="h-6 w-6 mr-2 inline-block" />{" "}
            {!sideBarResize && "Logout"}
          </p>
        </div>
      </div>
    </div>
  );
};
