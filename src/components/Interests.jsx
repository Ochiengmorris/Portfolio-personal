import React from "react";
import { FaCoffee, FaRunning, FaTableTennis } from "react-icons/fa";
import { FaBookOpenReader, FaMusic } from "react-icons/fa6";
import { GiPalmTree } from "react-icons/gi";

const Interests = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      <div className="flex flex-col gap-1  justify-center">
        <FaTableTennis size={28} className="text-[#76c7c0]" />
        <p className="font-semibold text-gray-400">Sports</p>
      </div>
      <div className="flex flex-col gap-1  justify-center">
        <FaMusic size={28} className="text-[#76c7c0]" />
        <p className="font-semibold text-gray-400">Music</p>
      </div>
      <div className="flex flex-col gap-1  justify-center">
        <GiPalmTree size={28} className="text-[#76c7c0]" />
        <p className="font-semibold text-gray-400">Travel</p>
      </div>
      <div className="flex flex-col gap-1  justify-center">
        <FaBookOpenReader size={28} className="text-[#76c7c0]" />
        <p className="font-semibold text-gray-400">Learn</p>
      </div>
      <div className="flex flex-col gap-1  justify-center">
        <FaCoffee size={28} className="text-[#76c7c0]" />
        <p className="font-semibold text-gray-400">Coffee</p>
      </div>
      <div className="flex flex-col gap-1  justify-center">
        <FaRunning size={28} className="text-[#76c7c0]" />
        <p className="font-semibold text-gray-400">Work-Out</p>
      </div>
    </div>
  );
};

export default Interests;
