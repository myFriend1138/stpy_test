import React from 'react';
import '../empleado/empleado.css';

const Empleado = ({ pic, title, text }) => {
  return (
    <div className='stpy__features-container__feature'>

      <div className='stpy__features-container__feature-image'>
        <img src={pic} alt='equipo'/>
      </div>

      <div className='stpy__features-container__feature-title'>
        <div />
        <h1>{title}</h1>
      </div>

      <div className='stpy__features-container__feature-text'>
        <p>{text}</p>
      </div>

    </div>
  )
}

export default Empleado;
