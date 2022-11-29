import React, { FunctionComponent } from 'react';
import logo from './logo.svg';
import './App.css';
import List from "./components/list";

export const App: FunctionComponent = () => (
    <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
        </header>
        <List />
    </div>
);

export default App;
