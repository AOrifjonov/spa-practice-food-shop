import React from 'react'
import CategoryListItem from './CategoryListItem'
import ContentsItem from './ContentsItem'

export default function CategoryList({catalog = []}) {
  return (
    <div className='my-container'>
      <div className='first-card-list'>
        <div className='contents'>
          {catalog.map(el => <ContentsItem key={el.idCategory} {...el} />)}
        </div>
      </div>
      <div className='card-list'>
        {
            catalog.map(el => (
                <CategoryListItem key={el.idCategory} {...el}  />
            ))
        }
      </div>
    </div>
  )
}
