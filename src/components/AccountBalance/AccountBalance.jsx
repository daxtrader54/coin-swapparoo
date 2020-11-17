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
    render() {
        return (
            <Section>
                Balance: ${this.props.amount}
            </Section>
        );
    }
}

export default AccountBalance;


AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}