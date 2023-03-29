import calculate from '../Logic/Calculate';

describe('calculate operations', () => {
  it('calculate addition', () => {
    const operation = calculate({ total: 5, next: 5, operation: '+' }, '=');
    expect(operation.total).toBe('10');
  });
  it('calculate addition', () => {
    const operation = calculate({ total: 10, next: 5, operation: '-' }, '=');
    expect(operation.total).toBe('5');
  });
  it('calculate addition', () => {
    const operation = calculate({ total: 5, next: 5, operation: '+' }, 'AC');
    expect(operation.total).toBe(null);
  });
});
