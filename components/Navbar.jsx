import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="flex items-center justify-between border-b px-8 md:px-32 py-4 border-gray-300 ">
      <h1 className=" text-xl md:text-2xl font-semibold text-slate-900">
        Cryptoverse
      </h1>
      <div className="flex gap-4 items-center">
        {/* <p className=" cursor-pointer flex items-center">
          <div className="bg-white py-1 px-2 rounded-sm border border-gray-200 focus:ring-1 focus:ring-red-500">
            <input
              type={"text"}
              placeholder="search"
              className="outline-none bg-transparent text-sm"
            />
            <SearchIcon className="text-gray-600" />
          </div>
        </p> */}
        <Link href="https://github.com/santhosh-cloud/crypto-tracker">
          <p className="cursor-pointer flex items-center">
            <GitHubIcon className="text-slate-900" />
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
