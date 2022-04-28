import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getMealById } from '../api'
import { useNavigate } from 'react-router-dom'
import './recipe.css'

export default function Resipe() {
    const navigate = useNavigate()
    const [recipe, setRecipe] = useState([])
    const [showRecipe, setShowRecipe] = useState(false)

    const { id } = useParams()
    useEffect(() => {
        getMealById(id).then(data => setRecipe(data.meals[0]))
    }, [id])

    return (
        <div className='container'>

            <div className='youtube'>
                <button style={{ margin: '0 15px' }} className='btn' onClick={() => navigate(-1)}>Go Back</button>
                {
                    recipe.strYoutube ? (
                        <iframe
                            width="700"
                            height="390"
                            src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`}
                            title="YouTube video player"
                            allowFullScreen
                        >
                        </iframe>
                    ) : null
                }
            </div>


            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            <h1 style={{
                marginTop: 5 + 'rem',
                marginBottom: -30

            }}>
                {recipe.strMeal}
            </h1>
            <div id="container">
                <div className="product-details">
                    <h1>{recipe.strMeal}</h1>
                    <span className="hint-star star">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star-o" aria-hidden="true"></i>
                    </span>
                    <p className="information">
                        {recipe.strInstructions}
                    </p>
                    <div className="control">
                        <button onClick={() => setShowRecipe(!showRecipe)} className="btn-recipe">
                            {!showRecipe ? <span className="price"><i style={{ padding: 0, margin: 0 }} className='material-icons'>add</i></span>
                                : <span className="price"><i className='material-icons'>remove</i></span>
                            }
                            <span className="buy">Recipe</span>
                        </button>
                    </div>
                </div>

                <div className="product-image">
                    <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                    <div className="info">
                        <h2> {recipe.strMeal} </h2>
                        <ul>
                            <li><strong>Country : </strong>{recipe.strArea} </li>
                            <li><strong>Category : </strong>{recipe.strCategory}</li>
                        </ul>
                    </div>
                </div>
            </div>

            {showRecipe ?
                <table className='centered'>
                    <thead>
                        <tr>
                            <th>Ingredient</th>
                            <th>Measure</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Object.keys(recipe).map((key) => (
                                key.includes('Ingredient') && recipe[key] ? (
                                    <tr>
                                        <td>
                                            {recipe[key]}
                                        </td>
                                        <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                                    </tr>
                                ) : null
                            ))
                        }
                    </tbody>
                </table>
                : null
            }
        </div>
    )
}