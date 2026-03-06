import styled from "styled-components";

const StyledHeader = styled.header`
    padding: 2%;
    background-color: crimson;
    text-align: left;
    @media screen and (max-width: 750px){
        text-align: center;
    }
`;

const StyledName = styled.h1`
    font: bold calc(2px + 5vh) "Roboto Slab", sans-serif;
`;

const StyledTagline = styled.p`
    font: bold calc(2px + 4vh) "Roboto Slab", sans-serif;
`;

export default function Header() {
    return (
        <StyledHeader>
            <StyledName>Anay Sharma</StyledName>
            <StyledTagline>My latest online resume</StyledTagline>
        </StyledHeader>
    );
}