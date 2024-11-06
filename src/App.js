// import logo from './logo.svg';
import './App.css';

function onclick(){            
  window.location.href = "http://localhost:3000/save"
}

function App() {
  return (
    <div className="App">
      <h1>Bem Vindo -Atacadinho</h1>
      <h2>CLique aqui para se cadastrar</h2>
      <input className='botao-cad' type='button' value="Fazer Cadastro" onClick={onclick}/>
      
    </div>
  );
}

export default App;
