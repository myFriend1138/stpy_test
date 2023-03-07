import React from 'react';
import './marcas.css';
import { pontio, datadis, esave } from './imports';

const Marcas = () => {
  return (
    <div className='stpy__marcas section__padding' id='marcas'>

      <div className='stpy__marcas-cabecera'>
        <h1 className='gradient__text'>Estamos Integrados con:</h1>
      </div>

      <div className='stpy__marcas-marcas'>

        <div>
          <img src={pontio} alt='pontio'/>
        </div>

        <div>
          <img src={datadis} alt='datadis'/>
        </div>

        <div>
          <img src={esave} alt='esave'/>
        </div>

        <div>
          <h1>PVGIS</h1>
        </div>

      </div>

    </div>
  )
}

export default Marcas;
