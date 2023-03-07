import React from 'react';
import './App.css';

import { Clientes, Empleado, Feature, Menu, Marcas } from './components';  // Truco importar en grupo
import { Features, Cabecera, Equipo } from './containers';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Menu />
        <Cabecera />
        <Features />
        <Equipo />
        <Clientes />
        <Marcas />
      </div>
    </div>
  )
}

export default App;
