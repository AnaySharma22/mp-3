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

const StyledImg = styled.img`
    height: calc(2px + 50vh);
    width: calc(2px + 25vw);
    margin: 2% auto;
    display: block;
    border: 10px solid black;
    @media screen and (max-width: 750px){
        height: calc(2px + 40vh);
        width: calc(2px + 50vw);
    }
`;

const StyledDesc = styled.p`
    font: bold calc(2px + 3vh) "Roboto Slab", sans-serif;
    padding: 10px;
    border: 2px solid black;
    background-color: lightsalmon;
    width: 80%;
    margin: 2% auto;
    text-align: center;
`;

export default function Home() {
    return (
        <StyledMain>
            <StyledH1>Home</StyledH1>
            <StyledImg src="img_Resume.jpeg" alt="Anay Sharma"/>
            <StyledDesc>
                My name is Anay Sharma. I am a Computer Science Sophomore at Boston University. I
                am an aspiring Software Engineer with experience in Python and Django. This website
                contains all of my relevant information.
            </StyledDesc>
        </StyledMain>
    );
}