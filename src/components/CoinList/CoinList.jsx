import React from 'react';
import Coin from '../Coin/Coin'
import styled from 'styled-components'

const Table = styled.table `
    margin: 50px auto 50px auto;
    display:inline-block;
`;

function CoinList (props) {
    return (
        <Table>
        <thead id='thead'>
          <tr>
            <th id='name'>Name</th>
            <th id='ticker'>Ticker</th>
            <th id='Price'> Price</th>
            {props.showBalance ? <th>Balance</th> : null}
            <th id='Actions'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            props.coinData.map( ({...values}) => 
                <Coin 
                  key = {values.key} 
                  handleRefresh = {props.handleRefresh}
                  name = {values.name} 
                  ticker = {values.ticker}
                  showBalance = {props.showBalance}
                  balance = {values.balance}
                  price = {parseFloat(values.price).toFixed(2)}
                  tickerID = {values.key}
                />
              )       
          }
        </tbody>
      </Table>
    );
}

export default CoinList;