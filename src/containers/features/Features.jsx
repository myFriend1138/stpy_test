import React from 'react';
import '../features/features.css';
import tick from '../../assets/suntropy/tick.png';
import { Feature } from '../../components';


const featuresData = [
  {
    title: 'Mejora tu capacidad de análisis',
    text: 'Curabitur non laoreet libero. Fusce et ex vitae urna luctus volutpat. Vivamus sed commodo sem.'
  },
  {
    title: 'Crea tendencia',
    text: 'Nullam sed tortor elit. Curabitur molestie vitae metus id consequat. Nam dignissim auctor dolor, ac tristique enim sollicitudin et.'
  },
  {
    title: 'Ordena tus prioridades',
    text: 'Fusce dictum nunc scelerisque tortor porta, viverra elementum felis tempus. Etiam ut fringilla diam. Duis vitae ex elit. Curabitur et risus dui.'
  },
  {
    title: 'Lidera en el sector',
    text: 'Mauris turpis neque, varius at quam a, ornare porttitor dui. Mauris lobortis cursus dui, eu consectetur lorem sodales non. Etiam tempus porta ex non viverra. '
  }
]

const Features = () => {
  return (
    <div className='stpy__features section__padding' id='features'>
      <div className='stpy__features-cabecera'>
        <h1 className='gradient__text'>
        Suntropy es la herramienta perfecta para las empresas de energía solar que quieren optimizar el proceso de ofertas de autoconsumo sin perder la capacidad de que sus propuestas sean únicas y no pasen desapercibidas.
        </h1>
      </div>
      <div className='stpy__features-contenedor'>
        {featuresData.map(( item, index ) => (
          <Feature pic={tick} title={item.title} text={item.text} key={item.title + index}/>
        ))}
      </div>
    </div>
  )
}

export default Features;
