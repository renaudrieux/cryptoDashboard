import React from "react";
import Header from "../Components/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import TableCoins from "../Components/TableCoins";

const Home = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`
      )
      .then((res) => setCoins(res.data));
  }, []);

  return (
    <div className="container">
      <Header />
      <input
        type="text"
        placeholder="Search for a coin"
        className="form-control bg-dark text-light border-0 mt-4 text-center"
        autoFocus
        onChange={(e) => setSearch(e.target.value)}
      />
      <TableCoins coins={coins} search = {search} />
    </div>
  );
};

export default Home;
