import React from 'react'
import MealItem from './MealItem'

export default function MealList({meals = []}) {
  return (
    <div className='card-list'>
        {meals.map(el => <MealItem key={el.idMeal} {...el} />)}
    </div>
  )
}
