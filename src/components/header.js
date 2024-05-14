import React from "react";

const Header = () => {
  return (
    <div className="h-20 border-b border-gray-200 flex items-center justify-between px-4">
      <p className="text-[#00373A] font-medium text-base">
        Welcome, Super Admin
      </p>

      <div className="flex gap-4">
        <div class="relative w-[500px] ">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              class="w-4 h-4 text-[#00373A]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            class="block w-full px-4 py-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-md outline-none"
            placeholder="Search "
            required
          />
        </div>
        <img
          class="w-10 h-10 rounded-full shadow-sm cursor-pointer"
          src="https://vigneshkumarm2002.github.io/Los-Angeles/assets/mount-logo.png"
          alt="Rounded avatar"
        />
        <img
          class="w-10 h-10 rounded-full shadow-sm cursor-pointer"
          src="https://mvigneshkumar-portfolio.web.app/static/media/avatar.4a13566bbb5298ab0e63.png"
          alt="Rounded avatar"
        />
      </div>
    </div>
  );
};

export default Header;
