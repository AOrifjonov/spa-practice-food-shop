import React from 'react'
import {Link} from 'react-router-dom'

export default function MealItem({
    strMeal, strMealThumb, idMeal
}) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={strMealThumb} alt={idMeal} />
      </div>
      <div className="card-content cart">
        <span className="card-title">{strMeal.slice(0, 10).replace('\n', ' ')}...</span>
      </div>
      <div className="card-action">
        <Link to={`/meal/${idMeal}`} className='btn btnWatch blue lighten-1'>Watch recipe </Link>
      </div>
    </div>
  )
}
