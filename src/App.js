import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Interval from './components/Interval'
import Average from './components/Average'
import Sum from './components/Sum'
import Random from './components/Random'

function App() {

    const [min, setMin] = useState(10)
    const [max, setMax] = useState(99)

    return (
        <div className="App">
            <h1>React-Redux (Simple)</h1>
            <div className="line">
                <Interval
                    min={min}
                    max={max}
                    onMinChanged={setMin}
                    onMaxChanged={setMax} />
            </div>
            <div className="line">
                <Average min={min} max={max}></Average>
                <Sum min={min} max={max}></Sum>
                <Random min={min} max={max}></Random>
            </div>
        </div>
    );
}

export default App;
