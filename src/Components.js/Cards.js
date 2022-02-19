import React from "react";

const Cards = ({ crypto }) => {
  return (
    <div className="content">
      <table className="table align-left table-dark table-striped">
        <tbody>
          <tr>
            <td>
              <img
                src={crypto.image}
                style={{ width: "18px", height: "18px" }}
              />
            </td>
            <td>
              <h4>{crypto.name}</h4>
            </td>
            <td>
              <h4>{crypto.symbol}</h4>
            </td>
            <td>
              <h4>{crypto.current_price}</h4>
            </td>
            <td>
              <h4>{crypto.market_cap}</h4>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Cards;
