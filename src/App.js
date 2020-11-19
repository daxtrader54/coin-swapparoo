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
  state = {
    balance: 10000,
    showBalance: true,
    showBalanceColumn: false,
    coinData: [
      {
        name: 'Bitcoin',
        ticker: 'BTC',
        balance: 0.5,
        price: 17665,
      },
      {
        name: 'Ethereum',
        ticker: 'ETH',
        balance: 32,
        price: 500,
      },
      {
        name: 'Tether',
        ticker: 'USDT',
        balance: 0,
        price: 1,
      }, 
      {
        name: 'Ripple',
        ticker: 'XRP',
        balance: 1000,
        price: 0.3,
      },    
      {
        name: 'Bitcoin Cash',
        ticker: 'BCH',
        balance: 0,
        price: 300,
      }           
    ]
  }



  handleRefresh = (valueChangeTicker) => {
    const newCoinData = this.state.coinData.map(function( values ) {
      let newValues = { ...values };
      if( valueChangeTicker === values.ticker ) {
        const randomPercentage = 0.995 + Math.random() * 0.01;
        newValues.price *= randomPercentage;
        }
      return newValues;
    });

    this.setState({ coinData: newCoinData })
  }

  handleBalanceToggle = () => {
    let x = this.state.showBalance;
    this.setState({showBalance: !x});

  }

  handleBalanceColumn = () => {
    let x = this.state.showBalanceColumn;
    this.setState({showBalanceColumn: !x});

  }

  render(){
    return (
      <Div>
        <Header />
        <AccountBalance amount={this.state.balance} 
                        showBalance = {this.state.showBalance} 
                        handleBalanceToggle={this.handleBalanceToggle} 
                        handleBalanceColumn = {this.handleBalanceColumn}/>
        <CoinList 
                        coinData={this.state.coinData} 
                        handleRefresh={this.handleRefresh} 
                        handleBalanceColumn = {this.handleBalanceColumn} 
                        showBalance = {this.state.showBalance}/>
      </Div>
    );
  }
}

export default App;

