/* eslint-disable no-unused-vars */
import React from "react";

const Sidebar = () => {
  return (
    <div className="h-screen w-[250px] flex flex-col items-center border-r-2 border-gray-100">
      <div className="h-[8rem] flex w-full items-center justify-center  border-b-2 border-gray-100">
        <h1 className="text-3xl font-bold cursor-pointer tracking-wide">
          iCoder
        </h1>
      </div>

      <nav className="pt-[2rem] pb-[2rem] w-full">
        <ul className="flex flex-col gap-3">
          <li className="w-full cursor-pointer pt-2 pb-2 pl-3 hover:bg-cyan-700 transition-colors duration-300 text-xl font-semibold hover:text-cyan-50">
            Dashboard
          </li>
          <li className="w-full cursor-pointer pt-2 pb-2 pl-3 bg-cyan-700 transition-colors duration-300 text-xl font-semibold text-cyan-50">
            Admin Panel
          </li>
          <li className="w-full cursor-pointer pt-2 pb-2 pl-3 hover:bg-cyan-700 transition-colors duration-300 text-xl font-semibold hover:text-cyan-50">
            Statistics
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
