import React from "react";

const TableRow = ({ coin }) => {

  return (
    <tr>
      <td>{coin.market_cap_rank}</td>
      <td>
        <img
          src={coin.image}
          alt=""
          className="img-fluid me-4"
          style={{ width: "6%" }}
        />
        <span>{coin.name}</span>
      </td>
      <td>{coin.name}</td>
      <td>{coin.current_price}</td>
      <td
        className={
          coin.price_change_percentage_24h > 0 ? "text-success" : "text-danger"
        }
      >
        {coin.price_change_percentage_24h}
      </td>
      <td>{coin.price_change_24h}</td>
      <td>{coin.market_cap}</td>
    </tr>
  );
};

export default TableRow;
