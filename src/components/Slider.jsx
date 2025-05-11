import '../styles/slider.scss'
import React, { useState } from 'react'
import '../styles/slider.scss'
import Right from '../assets/chevron-right-solid.svg'
import Left from '../assets/chevron-left-solid.svg'

export default function Slider({ logement }) {
  const [index, setIndex] = useState(0)
  return (
    <div className="logement-slider-container">
      <img
        src={logement.pictures[index]}
        alt={logement.title}
        className="logement-slider"
      />
      <div className="slider-navigation">
        <img
          src={Right}
          alt=""
          className="slider-chevron-right"
          onClick={() => {
            setIndex(
              (index + 1 + logement.pictures.length) % logement.pictures.length,
            )
          }}
        />
        <img
          src={Left}
          alt=""
          className="slider-chevron-left"
          onClick={() => {
            setIndex(
              (index - 1 + logement.pictures.length) % logement.pictures.length,
            )
          }}
        />

        <span className="logement-slider-position">
          {index + 1}/{logement.pictures.length}
        </span>
      </div>
    </div>
  )
}
