import React, { useEffect, useState } from "react";
import axios from "axios";
import millify from "millify";
const Table = () => {
  const [coins, setCoins] = useState();
  const [filter, setFilter] = useState("");
  const [filteredCoins, setFilteredCoins] = useState();
  const [limit, setLimit] = useState(100);
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://coinranking1.p.rapidapi.com/coins",
      params: {
        referenceCurrencyUuid: "yhjMzLPhuIDl",
        timePeriod: "24h",
        "tiers[0]": "1",
        orderBy: "marketCap",
        orderDirection: "desc",
        limit: limit,
        offset: "0",
      },
      headers: {
        "X-RapidAPI-Key": "f10286d09amsha6d90da95c13d0cp1c68d9jsnc054ebf7df28",
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setCoins(response.data.data.coins);
        setFilteredCoins(response.data.data.coins);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [limit]);
  useEffect(() => {
    if (coins) {
      const newData = coins.filter((item) =>
        item.name.toLowerCase().includes(filter.toLowerCase())
      );
      setFilteredCoins(newData);
    }
  }, [filter]);
  const handleOnChange = (e) => {
    setFilter(e.target.value);
  };
  if (!filteredCoins) return <div>Loading</div>;
  return (
    <div className="w-full mt-10">
      <div className="w-full flex justify-end mb-8">
        <input
          className="outline-none border px-4 py-2 text-sm w-2/5 md:w-1/5"
          type={"text"}
          placeholder="Search for a Coin"
          onChange={(e) => {
            handleOnChange(e);
          }}
        />
      </div>
      <table className="table-fixed w-full">
        <thead className="text-slate-500">
          <tr className="">
            <th>Rank</th>
            <th>Coin</th>
            <th>Price</th>
            <th>Change</th>
          </tr>
        </thead>
        <tbody>
          {filteredCoins?.map((item, index) => (
            <tr
              className="text-center border-t text-sm text-slate-700"
              key={item.uuid}
            >
              <td className="py-2">{item.rank}</td>
              <td className="py-2">
                <p className=" font-semibold">{item.name}</p>
                <p className="text-xs text-gray-600">{item.symbol}</p>
              </td>
              <td className="py-2 text-sm font-bold">
                {millify(item.price, { precision: 3 })}
              </td>
              <td
                className={`py-2 font-semibold ${
                  item.change >= 0 ? "text-green-700" : "text-red-700"
                }`}
              >
                {item.change}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
