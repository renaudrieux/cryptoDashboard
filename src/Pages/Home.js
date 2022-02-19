import Cards from "../Components.js/Cards";
import Header from "../Components.js/Navigation";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [search, setSearch] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`
      )
      .then((res) =>
        setCryptoData(
          res.data.map((crypto) => <Cards key={crypto.id} crypto={crypto} />)
        )
      );
  }, [search]);

  return (
    <div>
      <Header />

      <div className="home-component">
        <div className="home-container">{cryptoData}</div>
      </div>
    </div>
  );
};

export default Home;
