import BlankStar from '../assets/star-solid-blank.svg'
import RedStar from '../assets/star-solid-red.svg'
import '../styles/rating.scss'

export default function Rating({ rating }) {
  const totalStars = 5
  const redStars = Array.from({ length: rating })
  const blankStars = Array.from({ length: totalStars - rating })

  return (
    <span className="rating-container">
      {redStars.map((_, index) => (
        <img
          key={`red-${index}`}
          src={RedStar}
          alt="red star"
          className="rating-star"
        />
      ))}
      {blankStars.map((_, index) => (
        <img
          key={`blank-${index}`}
          src={BlankStar}
          alt="blank star"
          className="rating-star"
        />
      ))}
    </span>
  )
}
