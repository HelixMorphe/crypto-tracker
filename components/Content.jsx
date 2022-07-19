import React, { useState, useEffect } from "react";
import Table from "../components/Table";
import axios from "axios";

const Content = () => {
  const [stats, setStats] = useState();

  return (
    <div className="px-8 mt-8 md:px-32 ">
      <h1 className="font-bold text-slate-800 text-2xl text-center">
        Top 100 Coins
      </h1>
      <Table />
    </div>
  );
};

export default Content;
