import React, { useState } from 'react'
import '../styles/dropdown.scss'
import chevronIcon from '../assets/chevron-up-solid.svg'

const Dropdown = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => setIsOpen((prev) => !prev)

  return (
    <div className="dropdown-container">
      <div className="dropdown">
        <span className="dropdown-title">{title}</span>
        <img
          src={chevronIcon}
          alt="dropdown chevron"
          onClick={toggleDropdown}
          className={`dropdown-arrow ${isOpen ? 'rotate' : ''}`}
        />
      </div>

      <div className={`dropdown-description ${isOpen ? 'visible' : ''}`}>
        <div className="dropdown-content">{description}</div>
      </div>
    </div>
  )
}

export default Dropdown
