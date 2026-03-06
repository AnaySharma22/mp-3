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

const StyledSkillsList = styled.ul`
    font: bold calc(2px + 2.5vh) "Roboto Slab", sans-serif;
    padding: 1%;
    margin: 5%;
    list-style: none;
    justify-items: center;
    text-align: center;
`;

const StyledArea = styled.li`
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

export default function Skills() {
    return (
        <StyledMain>
            <StyledH1>Skills</StyledH1>
            <StyledSkillsList>
                <StyledArea>Coding Languages
                    <StyledSubList>
                        <StyledSubItem>Python</StyledSubItem>
                        <StyledSubItem>Java</StyledSubItem>
                        <StyledSubItem>HTML</StyledSubItem>
                        <StyledSubItem>CSS</StyledSubItem>
                        <StyledSubItem>Javascript</StyledSubItem>
                        <StyledSubItem>C</StyledSubItem>
                        <StyledSubItem>MySQL</StyledSubItem>
                    </StyledSubList>
                </StyledArea>
                <StyledArea>Tools
                    <StyledSubList>
                        <StyledSubItem>Git</StyledSubItem>
                        <StyledSubItem>Vercel</StyledSubItem>
                    </StyledSubList>
                </StyledArea>
                <StyledArea>Frameworks and Libraries
                    <StyledSubList>
                        <StyledSubItem>Django</StyledSubItem>
                        <StyledSubItem>React.js</StyledSubItem>
                        <StyledSubItem>Next.js</StyledSubItem>
                        <StyledSubItem>NumPy</StyledSubItem>
                        <StyledSubItem>SciPy</StyledSubItem>
                        <StyledSubItem>Matplotlib</StyledSubItem>
                        <StyledSubItem>Tkinter</StyledSubItem>
                    </StyledSubList>
                </StyledArea>
                <StyledArea>Databases
                    <StyledSubList>
                        <StyledSubItem>PostgreSQL</StyledSubItem>
                        <StyledSubItem>MongoDB</StyledSubItem>
                    </StyledSubList>
                </StyledArea>
                <StyledArea>Languages
                    <StyledSubList>
                        <StyledSubItem>English</StyledSubItem>
                        <StyledSubItem>Hindi</StyledSubItem>
                        <StyledSubItem>Japanese</StyledSubItem>
                    </StyledSubList>
                </StyledArea>
            </StyledSkillsList>
        </StyledMain>
    );
}