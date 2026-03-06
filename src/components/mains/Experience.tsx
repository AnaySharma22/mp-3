import styled from "styled-components";

const StyledMain = styled.main`
    background-color: lightgray;
    width: 70%;
    padding: 20px 0;
    justify-items: center;
    @media screen and (max-width: 750px){
        width: 100%;
    }
`;

const StyledH1 = styled.h1`
    text-align: center;
    font-family: "Roboto Slab", sans-serif;
`;

const StyledTitle = styled.h2`
    padding: 2%;
    font: bold calc(2px + 3.2vh) "Roboto Slab", sans-serif;
    text-align: center;
    border: 5px solid black;
    background-color: lightsalmon;
    margin-top: 2%;
    margin-bottom: 2%;
    border-radius: 10px;
    width: 80%;
`;

const StyledPost = styled.h3`
    font: bold calc(2px + 2.7vh) "Roboto Slab", sans-serif;
    border: 5px solid black;
    border-radius: 8px;
    background-color: lightskyblue;
    margin: 2%;
    width: 50%;
    padding: 0;
    text-align: center;
`;

const StyledPoints = styled.ul`
    margin: 1%;
    font: bold calc(2px + 2.2vh) "Roboto Slab", sans-serif;
    text-align: center;
    list-style: none;
    padding: 1%;
`;

const StyledPoint = styled.li`
    color: black;
    padding: 1%;
    margin: 1%;
`;

export default function Experience() {
    return (
        <StyledMain>
            <StyledH1>Experience</StyledH1>

            <StyledTitle>Boston University Computer Science Club</StyledTitle>
            <StyledPost>Vice - President</StyledPost>
            <StyledPoints>
                <StyledPoint>Hosted weekly meetings and educated club members about topics in computer science</StyledPoint>
                <StyledPoint>Played an active role in E-board meetings, assisting with major club decisions</StyledPoint>
                <StyledPoint>Undertook secondary position as club treasurer and managed club funds while also coordinating with student activities organization for funding requests</StyledPoint>
            </StyledPoints>

            <StyledTitle>Boston Youth Symphony Orchestra</StyledTitle>
            <StyledPost>Lesson Manager</StyledPost>
            <StyledPoints>
                <StyledPoint>Supervised student check-in and coordinated drop-off and pickup</StyledPoint>
                <StyledPoint>Facilitated smooth execution of events, including concerts and student evaluations</StyledPoint>
            </StyledPoints>

            <StyledTitle>School Competitive Programming Team</StyledTitle>
            <StyledPost>Team Lead</StyledPost>
            <StyledPoints>
                <StyledPoint>Led school team at interschool national hackathons with 200+ participating schools and various coding competitions</StyledPoint>
            </StyledPoints>

            <StyledTitle>School Student Executive Body</StyledTitle>
            <StyledPost>Head-Boy</StyledPost>
            <StyledPoints>
                <StyledPoint>Led student executive body and acted as a link between students and school authorities</StyledPoint>
                <StyledPoint>Managed over 20 prefects, assigning weekly duties during school assemblies and recess and creating specialized duty charts for school events</StyledPoint>
            </StyledPoints>
        </StyledMain>
    );
}