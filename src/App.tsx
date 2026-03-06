import Footer from "./components/footer.tsx";
import Header from "./components/header.tsx";
import Nav from "./components/nav.tsx";
import {Route, Routes, createBrowserRouter, RouterProvider} from "react-router";
import Home from "./components/mains/Home.tsx"
import Education from "./components/mains/Education.tsx"
import Experience from "./components/mains/Experience.tsx"
import Hobbies from "./components/mains/Hobbies.tsx"
import Projects from "./components/mains/Projects.tsx"
import Skills from "./components/mains/Skills.tsx"
import styled from "styled-components"

const StyledPageWrapper = styled.div`
    width: 90vw;
    margin: 0 auto;
`;

const StyledNavMain = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    @media screen and (max-width: 750px){
        flex-direction: column;
    }
`;

function Root() {
    return(
        <>
            <StyledPageWrapper>
                <Header/>
                <StyledNavMain>
                    <Nav/>
                    <Routes>
                        <Route path={"/"}
                               element={<Home/>}
                        />
                        <Route
                            path={'/index.html'}
                            element = {<Home/>}
                        />
                        <Route
                            path={'/education.html'}
                            element = {<Education/>}
                        />
                        <Route
                            path={'/experience.html'}
                            element = {<Experience/>}
                        />
                        <Route
                            path={'/hobbies.html'}
                            element = {<Hobbies/>}
                        />
                        <Route
                            path={'/skills.html'}
                            element = {<Skills/>}
                        />
                        <Route
                            path={'/projects.html'}
                            element = {<Projects/>}
                        />
                    </Routes>
                </StyledNavMain>
                <Footer/>
            </StyledPageWrapper>
        </>
    )
}

const router=createBrowserRouter(
    [{path:"*",Component:Root}]
)

export default function App() {
    return (
        <>
            <RouterProvider router={router}/>
        </>
    )
}