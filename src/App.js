import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios'
import Coins from "./components/Coins";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import CoinInfo from "./components/Routes/CoinInfo";

function App() {
  const [coins, setCoins] = useState([])
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=99&page=1&sparkline=false'

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data)
      console.log(response.data[0])
    }).catch((error) => {
      console.log(error)
    })
        // ? Only do this when necessary

        // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={ <Coins coins={coins}/>} />
      <Route path="/coin/:coinId" element={<CoinInfo />}/>
    </Routes>
   
    </>

  );
}

export default App;




