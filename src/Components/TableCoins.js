import React from "react";
import TableRow from "./TableRow";

const titles = [
  "#",
  "Coin",
  "Name",
  "Price",
  "Price Change",
  "24h Volume",
  "market cap",
];

const TableCoins = ({ coins, search }) => {
  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  if (!coins) return <div>No coins</div>;

  return (
    <table className="table table-dark table-hover">
      <thead>
        <tr>
          {titles.map((title, i) => (
            <td key={i}>{title}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {filteredCoins.map((coin) => (
          <TableRow key={coin.id} coin={coin} />
        ))}
      </tbody>
    </table>
  );
};

export default TableCoins;
