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
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event){
        //Prevent resubmitting of form
        event.preventDefault(); // This stops the form from refreshing

        this.props.handleRefresh(this.props.ticker);
    }

    render(){
        return(
        <tr>
            <TD>{this.props.name}</TD>
            <TD>{this.props.ticker}</TD>
            <TD>${this.props.price}</TD>
            {this.props.showBalance ? <TD>${this.props.balance}</TD> : null}
            <TD><form action="#" method="POST">
                    <button onClick={this.handleClick}>Refresh</button>
                </form>
            </TD>
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

