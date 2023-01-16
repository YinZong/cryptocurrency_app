import React from "react";
import "./displayweather.css";

const ShowCoinResult = (props) => {
  const { data } = props;
  const coin_array = ["BTC", "ETH"];
  console.log("=====");
  console.log(data);
  return (
    <div className="displayweather">
      <div className="maincard">
        <span className="cardtitle">當前價格</span>
        <span className="cardsubtitle">
          As of {new Date().toLocaleTimeString()}
        </span>
        <br />
        <div className="weatherdetails">
          <div className="section1">
            <table>
              <tr>
                <th></th>
                <th>
                  <h4>Coin Name</h4>
                </th>
                <th>
                  <h4>USD</h4>
                </th>
                <th>
                  <h4>NTD</h4>
                </th>
              </tr>
              <tr>
                <td>
                  <img src="public/btc-logo.svg" className="coin-icon" />
                </td>
                <td>
                  <h4>BTC</h4>
                </td>
                <td>{Math.floor(data.BTC.USD).toLocaleString()}</td>
                <td>{Math.floor(data.BTC.TWD).toLocaleString()}</td>
              </tr>
              <tr>
                <td>
                  <img src="public/eth-logo.svg" className="coin-icon" />
                </td>
                <td>
                  <h4>ETH</h4>
                </td>
                <td>{Math.floor(data.ETH.USD).toLocaleString()}</td>
                <td>{Math.floor(data.ETH.TWD).toLocaleString()}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCoinResult;
