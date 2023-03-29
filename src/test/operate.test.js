import operate from '../Logic/Operate';

describe('operations logic', () => {
  it('add operator', () => {
    const operation = operate('5', '5', '+');
    expect(operation).toBe('10');
  });
  it('subtract operator', () => {
    const operation = operate('10', '5', '-');
    expect(operation).toBe('5');
  });
  it('modulus operator', () => {
    const operation = operate('5', '5', '%');
    expect(operation).toBe('0');
  });
  it('multiply operator', () => {
    const operation = operate('5', '5', 'x');
    expect(operation).toBe('25');
  });
  it('divide operator', () => {
    const operation = operate('25', '5', '÷');
    expect(operation).toBe('5');
  });
});
