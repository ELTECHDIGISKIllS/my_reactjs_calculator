import React, { useState } from 'react';
import Button from './Button';
import Display from './Display';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input)); // Note: eval should be used with caution
        setInput('');
      } catch {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <Display result={result} input={input} />
      <div className="buttons">
        {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+', 'C'].map((btn) => (
          <Button
            key={btn}
            value={btn}
            onClick={() => handleButtonClick(btn)}
            className={['/', '*', '-', '+'].includes(btn) ? 'operator' : ''}
          />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
