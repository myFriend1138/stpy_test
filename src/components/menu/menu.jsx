import './menu.css';
import logo from '../../assets/suntropy/logo-colour.png';


const Menu = () => {

  return (
    <div className='stpy__navbar'>
      <div className='stpy__navbar-links'>
        <div className='stpy__navbar-links_logo'>
          <img src={logo} alt='suntropy logo' />
        </div>
        <div className='stpy__navbar-links_contenedor'>
          <p><a href='#inicio'>Inicio</a></p>
          <p><a href='#equipo'>Equipo</a></p>
          <p><a href='#clientes'>Clientes</a></p>
          <p><a href='#features'>Suntropy Academy</a></p>
          <p><a href='#precios'>Precios 2023</a></p>
          <p><a href='#marcas'>Marcas</a></p>
          <p><a href='#mas'>Más...</a></p>
        </div>
      </div>
      <div className='stpy__navbar-sign'>
        <p>Empezar</p>
        <button type='button'>Empieza Gratis</button>
      </div>
    </div>
  )
}

export default Menu;
