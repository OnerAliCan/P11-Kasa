import '../styles/thumbnail.scss'
import data from '../../logements.json'
import { Link } from 'react-router'

export default function Thumbnail() {
  return (
    <div className="thumbnail-section">
      {data.map((item) => (
        <Link to={`/logement/${item.id}`} className="thumbnail" key={item.id}>
          <img src={item.cover} alt={item.title} />
          <span className="thumbnail-title">{item.title}</span>
        </Link>
      ))}
    </div>
  )
}
