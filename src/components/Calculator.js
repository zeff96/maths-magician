import './Calculator.scss';

const Digits = () => {
  const nums = [];
  for (let i = 9; i >= 1; i -= 1) {
    nums.push(<button type="button" key={i.toString()}>{i}</button>);
  }
  return nums;
};

const Calculator = () => (
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
        <button className="zero" type="button">0</button>
        <button type="button">.</button>
      </div>
    </div>
  </div>
);

export default Calculator;
