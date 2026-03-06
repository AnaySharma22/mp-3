import {Link} from "react-router";
import styled from "styled-components";

const StyledNav = styled.nav`
    background-color: black;
    width: 30%;
    @media screen and (max-width: 750px){
        width: 100%;
    }
`;

const StyledList = styled.ul`
    list-style: none;
    padding: 0;
    @media screen and (max-width: 750px){
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }
`;

const StyledListItem = styled.li`
    border: calc(2px + 1vh) solid lightsalmon;
    display: flex;
    height: 17vh;
    @media screen and (max-width: 750px){
        border: 10px solid maroon;
        height: 6vh;
        flex-direction: column;
        align-items: center;
    }
`;

const StyledLink = styled(Link)`
    color: lightgray;
    text-decoration: none;
    text-align: center;
    padding: 10%;
    font: bold calc(5px + 2vw) "Roboto Slab", sans-serif;
    @media screen and (max-width: 750px){
        font-size: calc(2px + 2vw);
    }
`;

export default function Nav() {
    return (
        <StyledNav>
            <StyledList>
                <StyledListItem><StyledLink to="/index.html">Home</StyledLink></StyledListItem>
                <StyledListItem><StyledLink to="/education.html">Education</StyledLink></StyledListItem>
                <StyledListItem><StyledLink to="/experience.html">Experience</StyledLink></StyledListItem>
                <StyledListItem><StyledLink to="/projects.html">Projects</StyledLink></StyledListItem>
                <StyledListItem><StyledLink to="/skills.html">Skills</StyledLink></StyledListItem>
                <StyledListItem><StyledLink to="/hobbies.html">Hobbies</StyledLink></StyledListItem>
            </StyledList>
        </StyledNav>
    );
}