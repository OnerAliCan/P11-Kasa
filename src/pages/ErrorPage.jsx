import { Link } from 'react-router'
import '../styles/errorpage.scss'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function ErrorPage() {
  return (
    <div className="error-page">
      <h1>404</h1>
      <h2>Oups ! La page que vous demandez n'existe pas.</h2>
      <Link to="/" className="home-link">
        Retourner sur la page d'accueil
      </Link>
    </div>
  )
}
