import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TD = styled.td`
    border: 1px solid #cccccc;
    width: 290px!important;

`;



class Coin extends Component {
    constructor(props){
        super(props);
        this.state = {
            price: this.props.price
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event){
        //Prevent resubmitting of form
        event.preventDefault();
        
        const randomPercentage = 0.995 + Math.random() * 0.01;
        this.setState( function(oldState) {
            return{
                price: oldState.price * randomPercentage
            };
        });
    }

    render(){
        return(
        <tr>
            <TD>{this.props.name}</TD>
            <TD>{this.props.ticker}</TD>
            <TD>${this.state.price}</TD>
            <TD><form action="#" method="POST"><button onClick={this.handleClick}>Refresh</button>
                </form></TD>
        </tr>
    );
}
}

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
} 

export default Coin;