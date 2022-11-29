import { FunctionComponent } from 'react';
import logo from './logo.svg';
import List from "./components/list";
import styled from "styled-components";

export const App: FunctionComponent = () => (
    <AppWrapper>
        <AppHeader>
            <AppLogo src={logo} alt="logo" />
        </AppHeader>
        <List />
    </AppWrapper>
);

const AppWrapper = styled.div`
    text-align: center;    
`;

const AppHeader = styled.div`
    background-color: #282c34;
    min-height: 40vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;    
`;

const AppLogo = styled.img`
    height: 20vmin;
    pointer-events: none;
`;

export default App;
