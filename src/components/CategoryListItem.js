import React from 'react'
import { Link } from 'react-router-dom'

export default function CategoryListItem({
  idCategory, strCategory, strCategoryThumb, strCategoryDescription
}) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={strCategoryThumb} alt={idCategory} />
      </div>
      <div className="card-content">
        <h3 className="card-title"><b>{strCategory}</b></h3>
        <p className='card-dscr'>{strCategoryDescription}</p>
      </div>
      <div className="card-action">
        <Link to={`/category/${strCategory}`} className='btn btnWatch blue lighten-1'>Watch category</Link>
      </div>
    </div>
  )
}
