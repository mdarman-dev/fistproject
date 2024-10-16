import React, { useState } from 'react';
import './App.css';
const Calculator = () => {
  const [display, setDisplay] = useState('0');
  
  const handleClick = (value) => {
    setDisplay((prev) => (prev === '0' ? value : prev + value));
  };
  const handleSign =(value)=>{
    setDisplay((prev) => (prev === '0' ? value : -1*prev));
  };
  const handleClear = () => {
    setDisplay('0');
  };

  const handleEqual = () => {
    try {
      setDisplay(eval(display).toString());
    } catch {
      setDisplay('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="keypad">
        <button className="button" onClick={handleClear}>AC</button>
        <button className="button" onClick={handleSign} >+/-</button>
        <button className="button" onClick={() => handleClick('%')}>%</button>
        <button className="button operator" onClick={() => handleClick('/')}>÷</button>

        <button className="button" onClick={() => handleClick('7')}>7</button>
        <button className="button" onClick={() => handleClick('8')}>8</button>
        <button className="button" onClick={() => handleClick('9')}>9</button>
        <button className="button operator" onClick={() => handleClick('*')}>×</button>

        <button className="button" onClick={() => handleClick('4')}>4</button>
        <button className="button" onClick={() => handleClick('5')}>5</button>
        <button className="button" onClick={() => handleClick('6')}>6</button>
        <button className="button operator" onClick={() => handleClick('-')}>-</button>

        <button className="button" onClick={() => handleClick('1')}>1</button>
        <button className="button" onClick={() => handleClick('2')}>2</button>
        <button className="button" onClick={() => handleClick('3')}>3</button>
        <button className="button operator" onClick={() => handleClick('+')}>+</button>

        <button className="button zero" onClick={() => handleClick('0')}>0</button>
        <button className="button" onClick={() => handleClick('.')}>.</button>
        <button className="button operator" onClick={handleEqual}>=</button>
      </div>
    </div>
  );
};

export default Calculator;