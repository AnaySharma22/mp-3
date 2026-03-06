import {Link} from "react-router";
import styled from "styled-components";

const StyledFooter = styled.footer`
    background-color: crimson;
    color: black;
    text-align: center;
    padding: 1%;
`;

const StyledText = styled.h3`
    font: bold calc(2px + 2.5vh) "Roboto Slab", sans-serif;
`;

const StyledLink = styled(Link)`
    color: blue;
    text-decoration: underline;
`;

export default function Footer() {
    return (
        <StyledFooter>
            <StyledText>
                All Rights Reserved By Anay Sharma <StyledLink to="">Credits</StyledLink> &#169;
            </StyledText>
        </StyledFooter>
    );
}