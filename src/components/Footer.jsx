import '../styles/footer.scss'
import footerLogo from '../assets/logo-footer.svg'

export default function Footer() {
  return (
    <footer>
      <img src={footerLogo} alt="Kasa logo" />
      <span>© 2020 Kasa. All rights reserved</span>
    </footer>
  )
}
