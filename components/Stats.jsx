import React, { useEffect, useState } from "react";
import axios from "axios";
import StatCard from "../components/StatCard";
const Stats = () => {
  const [stats, setStats] = useState();
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://coinranking1.p.rapidapi.com/stats",
      params: { referenceCurrencyUuid: "yhjMzLPhuIDl" },
      headers: {
        "X-RapidAPI-Key": "f10286d09amsha6d90da95c13d0cp1c68d9jsnc054ebf7df28",
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setStats(response.data.data);
        console.log(response.data.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  if (!stats) return <div>Loading</div>;
  return (
    <div className="p-8 md:p-32">
      <h1 className="text-3xl font-bold text-slate-700 mb-6">Global Stats</h1>
      <div className="flex flex-wrap gap-4 justify-center">
        <StatCard title="Total Market Cap" value={stats?.totalMarketCap} />
        <StatCard title="Total Coins" value={stats?.totalCoins} />
        <StatCard title="Total Markets" value={stats?.totalMarkets} />
        <StatCard title="Total Exchanges" value={stats?.totalExchanges} />
      </div>
    </div>
  );
};

export default Stats;
