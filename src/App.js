import { Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import HomePage from './components/Home';
import Navlinks from './components/Navbar';
import Quotes from './components/Quote';

const App = () => (
  <>
    <Navlinks />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/quotes" element={<Quotes />} />
    </Routes>
  </>
);

export default App;
