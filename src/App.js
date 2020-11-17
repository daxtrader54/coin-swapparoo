import './App.css';
import Header from './components/Header'
import AccountBalance from './components/AccountBalance/AccountBalance';
import React from 'react';
import CoinList from './components/CoinList/CoinList';
import styled from 'styled-components'

const Div = styled.div `
  text-align: center;
  background-color: rgb(20, 56, 97 );
  color: #cccccc;
  font-size:1.4rem
`;

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      balance: 10000,
      coinData: [
        {
          name: 'Bitcoin',
          ticker: 'BTC',
          price: 17665
        },
        {
          name: 'Ethereum',
          ticker: 'ETH',
          price: 500
        },
        {
          name: 'Tether',
          ticker: 'USDT',
          price: 1
        }, 
        {
          name: 'Ripple',
          ticker: 'XRP',
          price: 0.3
        },    
        {
          name: 'Bitcoin Cash',
          ticker: 'BCH',
          price: 300
        }           
      ]
    }
  }
  render(){
    return (
      <Div>
        <Header />
        <AccountBalance amount={this.state.balance}/>
        <CoinList coinData={this.state.coinData} />
      </Div>
    );
  }
}

export default App;
