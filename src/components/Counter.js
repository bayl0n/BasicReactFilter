// This is going to be a button that increments when you click it 
import React, { useState } from 'react'
import './Counter.css';

function Counter() {

    const [num, numState] = useState(0);
    const [clickHighScore, clickHighScoreState] = useState(parseInt(localStorage.getItem('clickHighScore')) == 0 ? parseInt(localStorage.getItem('clickHighScore')) : parseInt(localStorage.getItem('clickHighScore')) + 1);


    return (
        <div className="counter">
            <h1>{num}</h1>
            <button onClick={() => {
                numState(num + 1);

                // First time using localStorage
                if(num + 1 > localStorage.getItem('clickHighScore')){
                    localStorage.setItem('clickHighScore', clickHighScore);
                    clickHighScoreState(num + 1);
                }
                
                }}>Click me</button>
            <br/>
            <br/>
            <button onClick={() => {
                numState(0)
                }}>Reset</button>
            <h1>Highscore:</h1>
            <h1>{clickHighScore}</h1>
            <button onClick={() => {
                clickHighScoreState(0);
                localStorage.setItem('clickHighScore', 0);
                }}>Reset Highscore</button>
        </div>
    )
}

export default Counter;