import '../styles/header.scss'
import headerLogo from '../assets/logo.svg'

export default function Header() {
  return (
    <header className="header">
      <img src={headerLogo} alt="Kasa logo" />
      <nav className="navbar">
        <a href="/" className="navbar-link">
          Accueil
        </a>
        <a href="/about" className="navbar-link">
          À propos
        </a>
      </nav>
    </header>
  )
}
