import logoSpotify from '../src/assets/logo/spotify-logo.png'
import '../src/assets/css/header.css'

const Header = () => {
  return (
    <div className='header'>
      <img src={logoSpotify} alt="Spotify Logo" />

      <a className='header__link' href="#">
        <h1>Spotify</h1>
      </a>
    </div>
  )
}

export default Header