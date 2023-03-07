import React from 'react';
import './clientes.css';
import { barter, elencor, solfy } from './imports';

const Clientes = () => {
  return (
    <div className='stpy__clientes section__padding' id='clientes'>

      <div className='stpy__clientes-cabecera'>
        <h1 className='gradient__text'>Clientes que Confían en Nosotros</h1>
      </div>

      <div className='stpy__clientes-clientes'>

        <div>
          <img src={barter} alt='barter'/>
        </div>

        <div>
          <img src={elencor} alt='elencor'/>
        </div>

        <div>
          <img src={solfy} alt='solfy'/>
        </div>

      </div>

    </div>
  )
}

export default Clientes;
