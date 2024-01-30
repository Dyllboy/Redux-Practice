import logo from './logo.svg';
import './App.css';
import MainPage from './Components/MainPage/main';
import { Route } from 'react-router-dom';
import Cart from './Components/Cart/cart';
import { Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default App;
