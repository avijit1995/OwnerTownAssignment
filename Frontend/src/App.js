

import React, { useState } from 'react';
import './App.css';

function App() {
    const [output, setOutput] = useState('');
    const [code, setCode] = useState('');
    let getHero = () => {
        let cod = code.split(' ');
        if (cod[0] !== '0') {
            setOutput('Invalid Code Entered');
        }

        let apiUrl = `http://localhost:8000/api/superhero?code=${cod[1]}`;
        fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((r) => {
            return r.json();
        }).then(response => {
            setOutput(response.hero)
        })
    }

    return (
        <div className="app">
            <input placeholder='Input Code' value={code} onChange={e => setCode(e.target.value)} readOnly />
            <div className="keypad">
                <div className="row">
                    <div className="num-key" onClick={() => setCode(code + '1')}>
                        <div>1</div>
                        <div>@.?</div>
                    </div>
                    <div className="num-key" onClick={() => setCode(code + '2')}>
                        <div>2</div>
                        <div>ABC</div>
                    </div>
                    <div className="num-key" onClick={() => setCode(code + '3')}>
                        <div>3</div>
                        <div>DEF</div>
                    </div>
                </div>
                <div className="row">
                    <div className="num-key" onClick={() => setCode(code + '4')}>
                        <div>4</div>
                        <div>GHI</div>
                    </div>
                    <div className="num-key" onClick={() => setCode(code + '5')}>
                        <div>5</div>
                        <div>JKL</div>
                    </div>
                    <div className="num-key" onClick={() => setCode(code + '6')}>
                        <div>6</div>
                        <div>MNO</div>
                    </div>
                </div>
                <div className="row">
                    <div className="num-key" onClick={() => setCode(code + '7')}>
                        <div>7</div>
                        <div>PQRS</div>
                    </div>
                    <div className="num-key" onClick={() => setCode(code + '8')}>
                        <div>8</div>
                        <div>TUV</div>
                    </div>
                    <div className="num-key" onClick={() => setCode(code + '9')}>
                        <div>9</div>
                        <div>XYZ</div>
                    </div>
                </div>
                <div className="row">
                    <div className="num-key" onClick={() => getHero()}>
                        <div>*</div>
                    </div>
                    <div className="num-key" onClick={() => setCode(code + '0')}>
                        <div>0</div>
                        <div>Zero</div>
                    </div>
                    <div className="num-key" onClick={() => setCode(code + ' ')}>
                        <div>#</div>
                        <div>Space</div>
                    </div>
                </div>
            </div>
            <div style={{margin: '1rem'}}>
                <button onClick={() => getHero()}>Send</button>
                <button onClick={() => setCode('')}>Delete</button>
            </div>
            
            <input placeholder='Hero' value={output} readOnly />
        </div>
    );
}

export default App;
