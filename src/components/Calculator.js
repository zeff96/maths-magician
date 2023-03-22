import './Calculator.scss';
import calculate from '../Logic/Calculate';

const Calculator = () => {
  
  const Digits = () => {
    const nums = [];
    for (let i = 9; i >= 1; i -= 1) {
      nums.push(
        <button type="button" key={i.toString()} onClick={calculate}>
          {i}
        </button>,
      );
    }
    return nums;
  };

  return (
    <div className="calculator">
      <div className="display">
        <span>0</span>
      </div>
      <div className="operators">
        <div className="top">
          <button type="button">AC</button>
          <button type="button">+/-</button>
          <button type="button">%</button>
        </div>
        <div className="side">
          <button type="button">+</button>
          <button type="button">*</button>
          <button type="button">-</button>
          <button type="button">+</button>
          <button type="button">=</button>
        </div>
        <div className="digits">
          <Digits />
          <button className="zero" type="button">
            0
          </button>
          <button type="button">.</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
