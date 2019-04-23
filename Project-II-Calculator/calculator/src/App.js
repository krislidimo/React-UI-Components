import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'
import ActionButton from './components/ButtonComponents/ActionButton'
import NumberButton from './components/ButtonComponents/NumberButton'

const App = () => {
  return (
    <div className="App">
      <CalculatorDisplay />
      <div className="buttons">
        <div>
          <ActionButton value="clear"/>
          <div className="number-buttons">
            <NumberButton value="9" buttonStyle='number-button' />
            <NumberButton value="8" buttonStyle='number-button' />
            <NumberButton value="7" buttonStyle='number-button' />
            <NumberButton value="6" buttonStyle='number-button' />
            <NumberButton value="5" buttonStyle='number-button' />
            <NumberButton value="4" buttonStyle='number-button' />
            <NumberButton value="3" buttonStyle='number-button' />
            <NumberButton value="2" buttonStyle='number-button' />
            <NumberButton value="1" buttonStyle='number-button' />
            <ActionButton value="0" buttonStyle='number-button' />
          </div>
        </div>
        <div className="arithmatic-buttons">
          <NumberButton value="/" buttonStyle="arithmatic-button" />
          <NumberButton value="*" buttonStyle="arithmatic-button" />
          <NumberButton value="-" buttonStyle="arithmatic-button" />
          <NumberButton value="+" buttonStyle="arithmatic-button" />
          <NumberButton value="=" buttonStyle="arithmatic-button" />
        </div>
      </div>
    </div>
  );
};

export default App;
