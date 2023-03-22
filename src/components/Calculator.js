import './Calculator.scss';
import { useState } from 'react';
import calculate from '../Logic/Calculate';

const Calculator = () => {
  const [total, setTotal] = useState('');
  const [next, setNext] = useState('');
  const [operation, setOperation] = useState('');

  const handleClick = (e) => {
    const results = calculate({ total, next, operation }, e.target.textContent);
    setTotal(results.total);
    setNext(results.next);
    setOperation(results.operation);
  };
  const Digits = () => {
    const nums = [];
    for (let i = 9; i >= 1; i -= 1) {
      nums.push(
        <button type="button" key={i.toString()} onClick={handleClick}>
          {i}
        </button>,
      );
    }
    return nums;
  };

  return (
    <div className="calculator">
      <div className="display">
        {total || 0}
        {operation}
        {next}
      </div>
      <div className="operators">
        <div className="top">
          <button type="button" onClick={handleClick}>
            AC
          </button>
          <button type="button" onClick={handleClick}>
            +/-
          </button>
          <button type="button" onClick={handleClick}>
            %
          </button>
        </div>
        <div className="side">
          <button type="button" onClick={handleClick}>
            ÷
          </button>
          <button type="button" onClick={handleClick}>
            x
          </button>
          <button type="button" onClick={handleClick}>
            -
          </button>
          <button type="button" onClick={handleClick}>
            +
          </button>
          <button type="button" onClick={handleClick}>
            =
          </button>
        </div>
        <div className="digits">
          <Digits />
          <button className="zero" type="button" onClick={handleClick}>
            0
          </button>
          <button type="button" onClick={handleClick}>
            .
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
