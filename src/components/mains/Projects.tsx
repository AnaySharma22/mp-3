import {useState} from "react";
import styled from "styled-components";

const StyledMain = styled.main`
    background-color: lightgray;
    width: 70%;
    padding: 20px 0;
    text-align: center;
    font-family: "Orbitron", sans-serif;
    @media screen and (max-width: 750px){
        width: 100%;
    }
`;

const StyledH1 = styled.h1`
    text-align: center;
    font-family: "Roboto Slab", sans-serif;
`;

const StyledLabel = styled.label`
    font-family: "Orbitron", sans-serif;
    font-weight: bold;
`;

const StyledInputs = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;
    margin-top: 20px;
`;

const StyledInput = styled.input`
    padding: 10px;
    border-radius: 8px;
    border: solid 2px black;
    font-size: calc(12px + 0.5vw);
    font-family: "Orbitron", sans-serif;
    text-align: center;
    height: calc(10px + 2vw);
    width: 60%;
    margin: 0 auto;
    @media screen and (max-width: 750px){
        height: calc(12px + 7vh);
        font-size: calc(12px + 1vh);
    }
`;

const StyledButtons = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    width: 60%;
    margin: 0 auto 20px auto;
    @media screen and (max-width: 750px){
        margin-top: calc(10px + 7vh);
        margin-bottom: calc(10px + 7vh);
    }
`;

const StyledButton = styled.button`
    flex: 40%;
    padding: 12px;
    border: none;
    border-radius: 10px;
    font-size: calc(14px + 0.5vw);
    cursor: pointer;
    background: royalblue;
    color: white;
    font-family: "Orbitron", sans-serif;
    &:hover {
        background: dodgerblue;
    }
    @media screen and (max-width: 750px){
        flex: 45%;
        font-size: calc(12px + 1vh);
        height: calc(10px + 15vh);
    }
`;

const StyledClearButton = styled(StyledButton)`
    background: dimgray;
    &:hover {
        background: red;
    }
`;

const StyledOutput = styled.h3`
    font-family: "Orbitron", sans-serif;
    font-weight: bold;
    min-height: calc(10px + 3vw);
    font-size: calc(12px + 1vw);
    padding: 10px;
    border: 2px solid black;
    border-radius: 8px;
    background: white;
    text-align: center;
    width: 60%;
    margin: 0 auto;
    @media screen and (max-width: 750px){
        min-height: calc(12px + 10vh);
        font-size: calc(12px + 2vh);
    }
`;

export default function Projects(){
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");
    const [output, setOutput] = useState<number | string>(0);
    const [outputColor, setOutputColor] = useState("black");

    function displayResult(result : number | string){
        setOutput(result);
        if(typeof result === "string" || (typeof result === "number" && result < 0)){
            setOutputColor("red");
        } else {
            setOutputColor("black");
        }
    }

    function doAdd(){ displayResult(Number(input1)+Number(input2)); }
    function doSub(){ displayResult(Number(input1)-Number(input2)); }
    function doMul(){ displayResult(Number(input1)*Number(input2)); }
    function doDiv(){
        if(Number(input2) === 0){
            displayResult("ERROR! Cannot divide by zero, clear and try again.");
        } else {
            displayResult(Number(input1)/Number(input2));
        }
    }
    function doPow(){
        let result = 1;
        for(let i = 0; i < Number(input2); i++){ result *= Number(input1); }
        displayResult(result);
    }
    function doClear(){
        setInput1("");
        setInput2("");
        setOutput(0);
        setOutputColor("black");
    }

    return(
        <StyledMain>
            <StyledH1>Calculator</StyledH1>
            <StyledInputs>
                <StyledLabel htmlFor="first">First number:</StyledLabel>
                <StyledInput type="number" id="first" value={input1} placeholder="Enter a number" onChange={(e)=>setInput1(e.target.value)}/>
                <StyledLabel htmlFor="second">Second number:</StyledLabel>
                <StyledInput type = "number" id="second" value={input2} placeholder="Enter a number" onChange={(e)=>setInput2(e.target.value)}/>
            </StyledInputs>
            <StyledButtons>
                <StyledButton onClick={doAdd}>+</StyledButton>
                <StyledButton onClick={doSub}>-</StyledButton>
                <StyledButton onClick={doMul}>*</StyledButton>
                <StyledButton onClick={doDiv}>/</StyledButton>
                <StyledButton onClick={doPow}>**</StyledButton>
                <StyledClearButton onClick={doClear}>Clear</StyledClearButton>
            </StyledButtons>
            <StyledOutput style={{color: outputColor}}>{output}</StyledOutput>
        </StyledMain>
    );
}