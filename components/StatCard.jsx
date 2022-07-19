import React from "react";
import millify from "millify";
const StatCard = ({ title, value }) => {
  return (
    <div className="flex flex-col justify-around items-start w-[200px] p-6 rounded-lg bg-green-400 min-h-[150px]">
      <h1 className="text-xl font-bold text-green-900">{title}</h1>
      <p className="font-semibold text-3xl text-white">{millify(value)}</p>
    </div>
  );
};

export default StatCard;
