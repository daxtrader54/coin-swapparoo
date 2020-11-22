import React from 'react';
import PropTypes from 'prop-types';
import './AccountBalance.css';
import styled from 'styled-components';

const Section = styled.section`
    font-size: 2rem;
    text-align:left;
    padding: 1.5rem 0px 1.5rem 5rem;
`;

function AccountBalance (props) {

    const handleBalance = (event) => {
        event.preventDefault();
        props.handleBalanceToggle();
    };
       
    const buttonText = props.showBalance ? 'Hide Balance' : 'Show Balance';
    let content = props.showBalance ? <>Balance: ${props.amount}</> : <></>;

    return (
        <Section>
            <form action="#" method="POST">
                <button onClick={handleBalance}>{buttonText}</button>
            </form>
            {content}
        </Section>
    );
}

export default AccountBalance;


AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}