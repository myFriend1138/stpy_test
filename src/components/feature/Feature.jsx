import React from 'react';
import './feature.css';

const Feature = ({ pic, title, text }) => {
  return (
    <div className='stpy__features-contenedor__feature'>

      <div className='stpy__features-contenedor__feature-image'>
        <img src={pic} alt='equipo'/>
      </div>

      <div className='stpy__features-contenedor__feature-title'>
        <div />
        <h1>{title}</h1>
      </div>

      <div className='stpy__features-contenedor__feature-text'>
        <p>{text}</p>
      </div>

    </div>
  )
}

export default Feature;
