import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TD = styled.td`
    border: 1px solid #cccccc;
    width: 290px!important;
`;

function Coin (props) {


    const handleClick = (event) => {
        //Prevent resubmitting of form
        event.preventDefault();
        props.handleRefresh(props.tickerID);       
    }

    return(
    <tr>
        <TD>{props.name}</TD>
        <TD>{props.ticker}</TD>
        <TD>${props.price}</TD>
        {props.showBalance ? <TD>${props.balance}</TD> : null}
        <TD>
            <form action="#" method="POST">
                <button id={props.tickerID} onClick={handleClick}>Refresh</button>
            </form>
        </TD>
    </tr>
);

}

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired
} 

export default Coin;

