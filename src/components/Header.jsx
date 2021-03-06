import React, { Component } from 'react';
import logo from '../logo.svg'
import styled from 'styled-components'


class Header extends Component {
    
    render() {

        const NewHeader = styled.header`
            background-color: #282c34;
            min-height: 20vh;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            color: white;
        `;

        const Img = styled.img `
            height: 8rem;
            pointer-events: none;
        `;

        const H1 = styled.h1 `
            font-size: 3.5rem;
        `;
        return (
            <NewHeader>
                <Img src={logo} alt="React logo" />
                <H1>Coin Swapparoo</H1>
            </NewHeader>
        );
    }
}



export default Header;

