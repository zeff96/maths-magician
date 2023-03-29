import { render, screen } from '@testing-library/react';
import { Route } from 'react-router-dom';
import Calculator from '../components/Calculator';
import HomePage from '../components/Home';
import Navlinks from '../components/Navbar';
import Quotes from '../components/Quote';

describe('component test', () => {
  it('render home title', () => {
    render(<HomePage />);
    const header = screen.getByText(/Welcome to our page!/i);
    expect(header).toBeInTheDocument;
  });

  it('render calculator title', () => {
    render(<Calculator />);
    const header = screen.getByText(/Let's do some maths!/i);
    expect(header).toBeInTheDocument;
  });

  it('render Navlink title', () => {
    <Route>
      render(
      <Navlinks />
      ); const header = screen.getByText(/Maths Magician/i);
      expect(header).toBeInTheDocument;
    </Route>;
  });

  it('renders a div element with class name "quotes"', () => {
    const { getByTestId } = render(<Quotes />);
    const divElement = getByTestId('quotes');

    expect(divElement).toBeInTheDocument();
    expect(divElement).toHaveClass('quotes');
  });
});
