// get huobi's real time crypto price
import React, {useEffect, useState} from "react";
import propTypes from 'prop-types';
import axios from "axios";
import useInterval from "./useInterval";

function Upbit({token}){

  const [price, setPrice] = useState(0);

  const getPrice = async (token) =>{
    const url = `https://api.upbit.com/v1/ticker?markets=krw-${token}`;//lower case
    const {data : {0 : {trade_price, opening_price}}} = await axios.get(url); 
    setPrice(trade_price);
  }
  
  setInterval(() => {
    getPrice(token);
  }, 3000);

  return (
  <>
    <div>
      <span>{price}</span>
    </div>
  </>
  )
    };

Upbit.propTypes = {
    token : propTypes.string.isRequired,
}

  
export default Upbit;
