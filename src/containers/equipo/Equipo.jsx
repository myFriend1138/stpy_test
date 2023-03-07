import React from 'react';
import './equipo.css';
import Empleado from '../../components/empleado/Empleado';
import equipo1 from '../../assets/suntropy/equipo-suntropy_58_1.jpg';
import equipo2 from '../../assets/suntropy/equipo-suntropy_58_2.jpg';
import equipo3 from '../../assets/suntropy/equipo-suntropy_58_3.jpg';
import equipo4 from '../../assets/suntropy/equipo-suntropy_58_4.jpg';
import equipo5 from '../../assets/suntropy/equipo-suntropy_58_5.jpg';
import equipo6 from '../../assets/suntropy/equipo-suntropy_58_6.jpg';
import equipo7 from '../../assets/suntropy/equipo-suntropy_58_7.jpg';
import equipo8 from '../../assets/suntropy/equipo-suntropy_58_7.jpg';


const Equipo = () => {
  return (
    <div className='stpy__equipo-main'>
      <div className='stpy__equipo section__margin' id='equipo'>

        <div className='stpy__equipo-cabecera'>
          <h1 className='gradient__text'>¿Quién forma Suntropy?</h1>
          <p>Saber más...</p>
        </div>
        
        <div className='stpy__equipo-contenedor'>
          <Empleado pic={equipo3} title='Pablo' text='Vestibulum nec cursus arcu. Maecenas vehicula convallis quam, rhoncus fringilla ligula bibendum sed. Donec ante libero, mollis non magna in, varius sollicitudin elit.'/>
          <Empleado pic={equipo5} title='Miguel' text='Vestibulum nec cursus arcu. Maecenas vehicula convallis quam, rhoncus fringilla ligula bibendum sed. Donec ante libero, mollis non magna in, varius sollicitudin elit.'/>
          <Empleado pic={equipo6} title='Javi' text='Vestibulum nec cursus arcu. Maecenas vehicula convallis quam, rhoncus fringilla ligula bibendum sed. Donec ante libero, mollis non magna in, varius sollicitudin elit.'/>
          <Empleado pic={equipo4} title='Isaac' text='Vestibulum nec cursus arcu. Maecenas vehicula convallis quam, rhoncus fringilla ligula bibendum sed. Donec ante libero, mollis non magna in, varius sollicitudin elit.'/>
        </div>
      </div>
      </div>
  )
}

export default Equipo;

