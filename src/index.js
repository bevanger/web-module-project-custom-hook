import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import useDarkMode from "./hooks/useDarkMode"; //2. useDarkMode is a hook (function)
import Charts from "./components/Charts";
import Navbar from "./components/Navbar";


import "./styles.scss";

const App = () => {
  const [coinData, setCoinData] = useState([]);
  //1. calling useDarkMode with the arguments "darkMode", false
  const [darkMode, setDarkMode] = useDarkMode("darkMode", false); //18. const [darkMode, setDarkMode] === [darkMode we returned (item or false), setDarkMode (a function to update darkMode)]

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => setCoinData(res.data))
      .catch(err => console.log(err));
  }, []);
  return (
    <div className={darkMode ? "dark-mode App" : "App"}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Charts coinData={coinData} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
