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

const StyledBU = styled.p`
    background-color: lightsalmon;
    width: 60%;
    margin: 10px auto;
    padding: 10px;
    border: 2px solid black;
    border-radius: 12px;
    text-align: center;
    font: bold calc(2px + 3vh) "Roboto Slab", sans-serif;
`;

const StyledDegree = styled.p`
    background-color: lightsalmon;
    width: 60%;
    margin: 10px auto;
    padding: 10px;
    border-radius: 12px;
    border: 2px solid black;
    text-align: center;
    font: bold calc(2px + 3vh) "Roboto Slab", sans-serif;
`;

const StyledEducationList = styled.ul`
    font: bold calc(2px + 2vh) "Roboto Slab", sans-serif;
    background-color: lightsalmon;
    border-radius: 15px;
    padding: 25px;
    margin: 25px auto;
    width: 85%;
    border: 2px solid black;
    list-style: none;
    text-align: center;
`;

const StyledListItem = styled.li`
    font: bold calc(2px + 3vh) "Roboto Slab", sans-serif;
    padding: 10px;
    border: 2px solid black;
    margin: 25px auto;
    border-radius: 10px;
`;

const StyledCoursework = styled.li`
    font: bold calc(2px + 3vh) "Roboto Slab", sans-serif;
    padding: 10px;
    border: 2px solid black;
    margin: 25px auto;
    border-radius: 10px;
    background-color: lightblue;
    font-weight: bold;
    text-align: center;
`;

const StyledCoursesList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 10px auto 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
    width: 90%;
`;

const StyledCourse = styled.li`
    background-color: white;
    color: black;
    padding: 10px 15px;
    border-radius: 20px;
    font-size: calc(12px + 0.4vw);
    text-align: center;
    font-family: "Roboto Slab", sans-serif;
    &:hover {
        background-color: lightcyan;
        cursor: pointer;
    }
`;

export default function Education() {
    return (
        <StyledMain>
            <StyledH1>Education</StyledH1>
            <StyledBU>Boston University</StyledBU>
            <StyledDegree>Bachelor of Computer Science</StyledDegree>
            <StyledEducationList>
                <StyledListItem style={{backgroundColor: "lightblue"}}>3.98 GPA</StyledListItem>
                <StyledListItem style={{backgroundColor: "lightblue"}}>Dean's List - Fall 2024, Spring 2025, Fall 2025</StyledListItem>
                <StyledCoursework>Relevant Coursework
                    <StyledCoursesList>
                        <StyledCourse>Data Structures</StyledCourse>
                        <StyledCourse>Computer Systems</StyledCourse>
                        <StyledCourse>Geometric Algorithms</StyledCourse>
                        <StyledCourse>Combinatoric Structures</StyledCourse>
                        <StyledCourse>Probability in Computing</StyledCourse>
                        <StyledCourse>Analysis of Algorithms</StyledCourse>
                        <StyledCourse>Web Application Development</StyledCourse>
                    </StyledCoursesList>
                </StyledCoursework>
            </StyledEducationList>
        </StyledMain>
    );
}