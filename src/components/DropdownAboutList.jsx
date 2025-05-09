import React from 'react'
import Dropdown from './Dropdown'
import '../styles/dropdown.scss'

const dropdownData = [
  {
    title: 'Fiabilité',
    description:
      'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.',
  },
  {
    title: 'Respect',
    description:
      'Les hôtes et les voyageurs doivent respecter les règles de la maison et de la communauté.',
  },
  {
    title: 'Service',
    description:
      'Nous offrons un service client 24/7 pour résoudre tout problème pendant votre séjour.',
  },
  {
    title: 'Sécurité',
    description:
      "Kasa s'engage à offrir une sécurité maximale pour les hôtes et les voyageurs.",
  },
]

const DropdownList = () => {
  return (
    <div className="dropdown-list">
      {dropdownData.map((item, index) => (
        <Dropdown
          key={index}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  )
}

export default DropdownList
