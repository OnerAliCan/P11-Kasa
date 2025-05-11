import { useParams, Navigate } from 'react-router'
import data from '../../logements.json'
import Dropdown from '../components/Dropdown'
import '../styles/logement.scss'
import Tag from '../components/Tag'
import Rating from '../components/Rating'
import Slider from '../components/Slider'

export default function Logement() {
  const { id } = useParams()
  const logement = data.find((item) => item.id === id)

  if (!logement) {
    return <Navigate to="/404" />
  }

  return (
    <div className="logement-main">
      <Slider logement={logement} />
      <div className="logement-informations">
        <div className="logement-title-location">
          <h1 className="logement-title">{logement.title}</h1>
          <h2 className="logement-location">{logement.location}</h2>
          <div className="logement-tag-container">
            {logement.tags.map((item, index) => (
              <Tag key={index} tags={item} />
            ))}
          </div>
        </div>

        <div className="logement-host-informations">
          <div className="logement-host">
            <p>{logement.host.name}</p>
            <img src={logement.host.picture} alt="" />
          </div>

          <Rating rating={logement.rating} />
        </div>
      </div>

      <div className="dropdown-list logement-dropdown-list">
        <Dropdown title={'Description'} description={logement.description} />
        <Dropdown
          title="Équipements"
          description={
            <ul className="dropdown-list-items">
              {logement.equipments.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          }
        />
      </div>
    </div>
  )
}
