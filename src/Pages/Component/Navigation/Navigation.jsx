import React from "react";
import growMediaLogo from "/grow-logo.PNG";
const Navigation = () => {
  return (
    <>
      <header className="h-16 py-12 mx-12 bg-white mt-8 flex items-center justify-between rounded-full shadow-lg">
        <div className="w-1/5 rounded-lg flex items-center justify-center">
          <img
            src={growMediaLogo}
            alt="Grow Media Logo"
            className="w-100 rounded-xl pl-8"
          />
        </div>
        <nav className="w-1/2">
          <ul className="flex items-center justify-between flex-wrap gap-4">
            <li className="text-lg font-medium">
              <a href="#" className="text-black hover:text-blue-700">
                Video Editing
              </a>
            </li>
            <li className="text-lg font-medium">
              <a href="#" className="text-black hover:text-blue-700">
                Reels / TikTok
              </a>
            </li>
            <li className="text-lg font-medium">
              <a href="#" className="text-black hover:text-blue-700">
                Video Promotion
              </a>
            </li>
            <li className="text-lg font-medium">
              <a href="#" className="text-black hover:text-blue-700">
                Pricing
              </a>
            </li>
            <li className="text-lg font-medium">
              <a href="#" className="text-black hover:text-blue-700">
                Career
              </a>
            </li>
          </ul>
        </nav>
        <div className="w-1/6 text-center">
          <button className="border-1 cursor-pointer border-black text-white shadow-2xl bg-black py-4 px-6 rounded-full">
            Book an intro &#8594;
          </button>
        </div>
      </header>
    </>
  );
};

export default Navigation;
