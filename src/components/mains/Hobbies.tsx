import styled from "styled-components";

const StyledMain = styled.main`
    background-color: lightgray;
    width: 70%;
    padding: 20px 0;
    @media screen and (max-width: 750px){
        width: 100%;
    }
`;

const StyledH1 = styled.h1`
    text-align: center;
    font-family: "Roboto Slab", sans-serif;
`;

const StyledHobbyList = styled.ul`
    font: bold calc(2px + 2.5vh) "Roboto Slab", sans-serif;
    padding: 1%;
    margin: 5%;
    list-style: none;
    justify-items: center;
    text-align: center;
`;

const StyledType = styled.li`
    border: 2px solid black;
    width: 80%;
    border-radius: 10px;
    background-color: lightsalmon;
    margin: 5%;
`;

const StyledSubList = styled.ul`
    padding: 1%;
    margin: 5%;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
`;

const StyledSubItem = styled.li`
    background-color: lightblue;
    border-radius: 10px;
    border: 2px solid black;
    width: 75%;
    padding: 1%;
`;

export default function Hobbies() {
    return (
        <StyledMain>
            <StyledH1>Hobbies</StyledH1>
            <StyledHobbyList>
                <StyledType>Technological Hobbies
                    <StyledSubList>
                        <StyledSubItem>Coding</StyledSubItem>
                        <StyledSubItem>Gaming</StyledSubItem>
                        <StyledSubItem>Full-Stack Dev</StyledSubItem>
                    </StyledSubList>
                </StyledType>
                <StyledType>Fitness
                    <StyledSubList>
                        <StyledSubItem>Weight Lifting</StyledSubItem>
                        <StyledSubItem>Boxing</StyledSubItem>
                        <StyledSubItem>Hiking</StyledSubItem>
                    </StyledSubList>
                </StyledType>
                <StyledType>Sports
                    <StyledSubList>
                        <StyledSubItem>Soccer</StyledSubItem>
                        <StyledSubItem>Cricket</StyledSubItem>
                        <StyledSubItem>Ping-Pong</StyledSubItem>
                        <StyledSubItem>MMA</StyledSubItem>
                    </StyledSubList>
                </StyledType>
                <StyledType>Miscellaneous
                    <StyledSubList>
                        <StyledSubItem>Cooking</StyledSubItem>
                        <StyledSubItem>Music</StyledSubItem>
                        <StyledSubItem>Long Walks</StyledSubItem>
                    </StyledSubList>
                </StyledType>
            </StyledHobbyList>
        </StyledMain>
    );
}