import { render, screen } from '@testing-library/react';
import { Route, MemoryRouter } from 'react-router-dom';
import Calculator from '../components/Calculator';
import HomePage from '../components/Home';
import Navlinks from '../components/Navbar';
import Quotes from '../components/Quote';

describe('component test', () => {
  it('render home title', () => {
    render(<HomePage />);
    const header = screen.getByText(/Welcome to our page!/i);
    expect(header).toMatchSnapshot();
  });

  it('render calculator title', () => {
    render(<Calculator />);
    const header = screen.getByText(/Let's do some maths!/i);
    expect(header).toMatchSnapshot();
  });

  it('render Navlink title', () => {
    <Route>
      render(
      <Navlinks />
      ); const header = screen.getByText(/Maths Magician/i);
      expect(header).toMatchSnapshot();
    </Route>;
  });
  it('simulate user click event', () => {
    <MemoryRouter>
      render(
      <Navlinks />
      ) const linkEl = screen.getByText(/home/i);
      fireEvent.click(linkEl); expect(getByText(/Welcome to our
      page!/i)).toBeInTheDocument();
    </MemoryRouter>;
  });

  it('renders a div element with class name "quotes"', async () => {
    render(<Quotes />);
    const divElement = await screen.getByTestId('quotes');

    expect(divElement).toMatchSnapshot();
  });
});
