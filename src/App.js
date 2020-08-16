import React from 'react';
import logo from './logo.svg';
import './App.css';

import Interval from './components/Interval'
import Card from './components/Card'

function App() {
    return (
        <div className="App">
            <h1>React-Redux (Simple)</h1>
            <div className="line">
                <Interval></Interval>
            </div>
            <div className="line">
                <Card title='Card 2' blue>X</Card>
                <Card title='Card 2' green>Y</Card>
                <Card title='Card 4' purple>Y</Card>
            </div>
        </div>
    );
}

export default App;
