import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './AccountBalance.css';
import styled from 'styled-components';

const Section = styled.section`
    font-size: 2rem;
    text-align:left;
    padding: 1.5rem 0px 1.5rem 5rem;
`;

class AccountBalance extends Component {

    handleBalance = (event) => {
        event.preventDefault();
        this.props.handleBalanceToggle();
        this.props.handleBalanceColumn();
    };
       
    render() {
        const buttonText = this.props.showBalance ? 'Hide Balance' : 'Show Balance';
        let content = this.props.showBalance ? <>Balance: ${this.props.amount}</> : <></>;

        return (
            <Section>
                <form action="#" method="POST">
                    <button onClick={this.handleBalance}>{buttonText}</button>
                </form>
                {content}
            </Section>
        );
    }
}

export default AccountBalance;


AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}