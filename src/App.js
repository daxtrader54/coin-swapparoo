import './App.css';
import Header from './components/Header'
import AccountBalance from './components/AccountBalance/AccountBalance';
import React, {useState, useEffect} from 'react';
import CoinList from './components/CoinList/CoinList';
import styled from 'styled-components';
import axios from 'axios';
import NewTest from './components/NewTest';

const Div = styled.div `
  text-align: center;
  background-color: rgb(20, 56, 97 );
  color: #cccccc;
  font-size:1.4rem
`;

const COIN_COUNT = 10;

function App (props) {

  const [balance, setBalance] = useState(10000);
  const [showBalance, setShowBalance] = useState(true);
  const [coinData, setCoinData] = useState([]);

  useEffect(function() {
    if (coinData.length === 0) {
      componentDidMount();
    } else {
      // component did mount
    }
  })
  const componentDidMount = async () => {
   
    const response = await axios.get('https://api.coinpaprika.com/v1/coins');
    const coinIDs = response.data.slice(0, COIN_COUNT).map(coin => coin.id);
    const tickerUrl = 'https://api.coinpaprika.com/v1/tickers/';
    const promises = coinIDs.map(id => axios.get(tickerUrl + id));
    const coinData = await Promise.all(promises);
    const coinPriceData = coinData.map( function(res){
      const coin = res.data;
      return{
        key: coin.id,
        name: coin.name,
        ticker: coin.symbol,
        balance: 0,
        price: parseFloat(coin.quotes.USD.price).toFixed(2),
      };
    });
    
    setCoinData(coinPriceData);
    
    
    // Retrieve the prices
  }
  
  const handleBalanceToggle = () => {
    setShowBalance(oldValue =>!oldValue);
  }
  
  const handleRefresh = async (theID) => {
    const apiURL = `https://api.coinpaprika.com/v1/tickers/${theID}`;
    const res = await axios.get(apiURL);
    console.log(res);
    const newPrice = res.data.quotes.USD.price;
    console.log(newPrice);
    const newCoinData = coinData.map( function( values ){
      let newValues = {...values};
      if( theID === newValues.key ){
        newValues.price = newPrice;
      }
      return newValues;
    });

    setCoinData(newCoinData);
  }


    return (
      <Div>
        <Header />
        <AccountBalance amount={balance} 
                        showBalance = {showBalance} 
                        handleBalanceToggle={handleBalanceToggle} 
                        />

        <CoinList 
                        coinData={coinData} 
                        handleRefresh={handleRefresh} 
                        showBalance = {showBalance}
                        />
        <NewTest />
      </Div>
    );
}

export default App;

