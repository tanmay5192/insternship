import logo from './logo.svg';
import './App.css';
import Search from './components/search';
import { toBeChecked } from '@testing-library/jest-dom/matchers';

function App() {
  return (
  <div>
    <Search/>
  </div>
  );
}

export default App;
// this is test toBeChecked