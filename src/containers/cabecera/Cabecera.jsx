import React from 'react';
import './cabecera.css';
import people from '../../assets/people.png';
import suntropy_logo from '../../assets/suntropy/Asset 6pg-principal-min.png';

const Cabecera = () => {
  return (
    <div className='stpy__cabecera section__padding' id='inicio'>
      
      <div className='stpy__cabecera-contenido'>

        <h1 className='gradient__text'>
          Calcula la Instalación Fotovoltaica de tu Cliente con Suntropy
        </h1>

        <p>Genera Presupuestos en Minutos.<br />Simplifica tu Trabajo ✔</p>
        
        <div className='stpy__cabecera-contenido__input'>
          <input type='email' placeholder='Tu correo electrónico'></input>
          <button type='button'>Registrarme</button>
        </div>

        <div className='stpy__cabecera-contenido__people'>
          <img src={people} alt='people' />
          <p>1620 personas se han registrado en los últimos 30 días</p>
        </div>

      </div>
        
      <div className='stpy__cabecera-image'>
        <img src={suntropy_logo} alt='suntropy logo' />
      </div>
    
    </div>
  )
}

export default Cabecera;
