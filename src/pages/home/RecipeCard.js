import React from 'react'
import {FoodCard} from "./style"
import {useNavigate} from "react-router-dom"

const RecipeCard = ({recipe}) => {
  let navigate = useNavigate()

  const handleClick = () => {
    navigate("/details", {state: {recipe}})
  }
  return (
    <FoodCard>
      <h1>{recipe.recipe.label}</h1>
      <img src={recipe.recipe.image} alt=""/>
      <button onClick={handleClick}>View More</button>
    </FoodCard>
  )
}

export default RecipeCard