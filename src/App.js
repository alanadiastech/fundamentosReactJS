import './App.css';
import React from 'react';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import List from './components/List';
import Evento from './components/evento/Evento';
import Form from './components/Form';
import Condicional from './components/Condicional';
import RendList from './components/RendList';
import { useState } from 'react';
import SeuNome from './components/SeuNome';
import Saudacao from './components/Saudacao';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/baseRouter/pages/Home';
import Contato from './components/baseRouter/pages/Contato';
import Empresa from './components/baseRouter/pages/Empresa';
import Footer from './components/baseRouter/layout/Footer';
import Navbar from './components/baseRouter/layout/Navbar';

function App() {
  const name = "Alana"
  const sobrenome = "Dias"
  const newSobrenome = sobrenome.toUpperCase()

  const meusItens = ['React', 'Vue', 'Angular']

  const [nome, setNome] = useState()

  const url = 'https://via.placeholder.com/150'
 
  function sum(a, b) {
    return a + b
  }

  return (
    <div className="App">
      <h1>Iniciando React!</h1>
      <h2>Alterando o JSX</h2>
      <p>Olá, {name} {newSobrenome}</p>
      <p>Soma: {sum(30,3)}</p>
      <img src={url} alt="Imagem dinâmica" />
      <HelloWorld />
      <h3>Usando o props</h3>
      <SayMyName nome = "Ana"/>
      <SayMyName nome = "Rafaela"/>
      <SayMyName nome = {name}/>
      <Pessoa nome="Alana" idade="33" profissao="Programadora" foto="https://via.placeholder.com/150"/>
      <List />
      <h4>Testado Eventos</h4>
      <Evento numero = "1" />
      {/* <Evento numero = "2" /> */}
      <h5>Enviando Formulário</h5>
      <Form />
      <h6>Renderização Condicional</h6>
      <Condicional />
      <h6>Renderização de listas</h6>
      <RendList itens={meusItens} />
      <RendList itens={[]} />
      <h6>State Lift</h6>
      <SeuNome setNome={setNome} />
      <Saudacao nome={nome}/>
    <br />
  
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/empresa' element={<Empresa/>}></Route>
        <Route path='/contato' element={<Contato/>}></Route>
      </Routes>
      <Footer />
    </Router>    
    </div>
  );
}

export default App
