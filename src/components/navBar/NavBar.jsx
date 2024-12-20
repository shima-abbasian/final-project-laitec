import React from "react";

function NavBar() {
  return (
    <>
      <nav className="flex flex-row bg-gray-100 justify-between px-20 py-5">
        <div>
          <span className="text-[18px] font-medium text-black">Ace Store</span>
        </div>
        <div className="flex flex-row gap-8">
          <ul className="text-[18px] font-medium text-black">Home</ul>
          <ul className="text-[18px] font-medium text-black">Men</ul>
          <ul className="text-[18px] font-medium text-black">Women</ul>
          <ul className="text-[18px] font-medium text-black">Explore All</ul>
        </div>
        <div>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <rect width="256" height="256" fill="none"></rect>
              <path
                d="M184,184H69.8L41.9,30.6A8,8,0,0,0,34.1,24H16"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
              ></path>
              <circle
                cx="80"
                cy="204"
                r="20"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
              ></circle>
              <circle
                cx="184"
                cy="204"
                r="20"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
              ></circle>
              <path
                d="M62.5,144H188.1a15.9,15.9,0,0,0,15.7-13.1L216,64H48"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
              ></path>
            </svg>
          </span>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
