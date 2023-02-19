import Lista from './lista/Lista';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navegacion from './navegacion/Navegacion';
import Home from './home/home';
import Juego from './juego/juego';
import Login from './login/Login';
import Error from './error/404';

function App() {
  return (
    <div className="navegacion">
      <BrowserRouter>
      <Navegacion />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Lista" element={<Lista />} />
        <Route path="/Juego" element={<Juego />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
