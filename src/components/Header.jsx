import '../styles/header.scss'

export default function Header() {
  return (
    <header className='header'>
      <img src="src/assets/logo.svg" alt="Kasa logo"/>
      <nav className='navbar'>
        <a href="/">Accueil</a>
        <a href="/about">À propos</a>
      </nav>
    </header>
  );
}
