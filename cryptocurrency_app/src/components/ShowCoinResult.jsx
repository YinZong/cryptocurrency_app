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
          As of {new Date().toLocaleDateString()}
        </span>
        <div className="weatherdetails">
          <div className="section1">
            <table>
              <tr>
                <td>
                  <h4>Coin Name</h4>
                  <tr>
                    <h4>BTC</h4>
                  </tr>
                  <tr>
                    <h4>ETH</h4>
                  </tr>
                </td>
                <td>
                  <h4>USD</h4>
                  <tr>
                    <span>{Math.floor(data.BTC.USD)}</span>
                  </tr>
                  <tr>
                    <span>{Math.floor(data.ETH.USD)}</span>
                  </tr>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCoinResult;
