import Logo from '../../Assets/Images/logo.png'
import "./Header.css"
const Header = () => {
  return (
    <header className='header'>
      <a href="/"><img src={Logo} alt="Logo de PokeTienda" className='header_logo'/></a>
    </header>
  )
}

export default Header
