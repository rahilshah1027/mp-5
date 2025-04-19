'use client'

import styled from "styled-components";

const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    background: rgb(97, 97, 97);
    text-align: left;
    font-size: 15px;
    height: 10vh;
    padding: 5px;
`;

export default function Header() {
    return (
        <StyledHeader> 
            <h1>CS391 Mini Project 5 </h1>
        </StyledHeader>
    );
}