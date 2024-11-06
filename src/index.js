import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListarUsuario from './components/ListarUsuario';
import CadastroUser from './CadastroUser';
import Atualizar from './components/Atualizar'
import Compra from './components/Compra';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}></Route>
        <Route path='/save' element={<CadastroUser/>}></Route>
        <Route path='/listar-user' element={<ListarUsuario/>}></Route>
        <Route path='/compra' element={<Compra/>}></Route>
        <Route path='/atualizar' element={<Atualizar/>}></Route>

      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);

reportWebVitals();