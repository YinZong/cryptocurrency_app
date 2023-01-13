import React, { useState } from "react";
import ShowCoinResult from "./components/ShowCoinResult";
import "./components/weather.css";

const Cryptocurrency = () => {
  const [form, setFrom] = useState({
    currency: "",
  });

  const [coin, setCoin] = useState([]);

  async function cryptoData(e) {
    e.preventDefault();
    if (form.currency == "") {
      alert("Enter the currency");
    } else {
      const data = await fetch(
        `https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=${form.currency}`
      )
        .then((res) => res.json())
        .then((data) => data);

      setCoin({
        data: data,
      });
    }
  }

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name == "currency") {
      setFrom({ ...form, currency: value });
    }
    console.log(form.currency);
  };

  return (
    <div className="weather">
      <span className="title">Cryptocurrency App</span>
      <br />
      <form>
        <input
          type="text"
          name="currency"
          placeholder="currency"
          onChange={(e) => handleChange(e)}
        />
        &nbsp; &nbsp; &nbsp;
        <button className="getweather" onClick={(e) => cryptoData(e)}>
          Submit
        </button>
      </form>

      {coin.data != undefined ? (
        <div>
          <ShowCoinResult data={coin.data} />
        </div>
      ) : null}
    </div>
  );
};

export default Cryptocurrency;
