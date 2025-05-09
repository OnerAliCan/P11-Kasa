import DropdownAboutList from '../components/DropdownAboutList'
import AboutBanner from '../components/AboutBanner'
import '../styles/about.scss'

export default function About() {
  return (
    <div className="about-main">
      <AboutBanner />
      <DropdownAboutList />
    </div>
  )
}
