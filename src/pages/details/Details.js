import React from 'react'
import {useLocation} from "react-router-dom"
import diet from '../../assets/diet.svg'
import { DetailContainer } from './style';


const Details = () => {
  let location = useLocation()
  console.log(location);
  const recipe = location.state.recipe.recipe
  console.log(recipe);
  console.log(recipe.totalNutrients);
  return (
    <DetailContainer>
      <header>
        <h1>{recipe.label}</h1>
        <img src={diet} alt=""/>
      </header>
      <main>
      <img src={recipe.image} alt=""/>
      <div>
        <h1>Ingredient</h1>
        {
          recipe.ingredientLines.map((ingredient, index) => {
            return <p key={index}>{index+1} >>> {ingredient}</p>
          })
        }
          <h1>Nutrients</h1>
        <div className="total-nutrients">
        {
          Object.keys(recipe.totalNutrients).map((nutrient, index) => {
            return <div key={index}>
              <h3>{recipe.totalNutrients[nutrient].label}</h3>
              {/* {console.log(nutrient)} */}
              <p>{Math.round(recipe.totalNutrients[nutrient].quantity)} {recipe.totalNutrients[nutrient].unit}</p>
            </div>
          }
          )
        }
      </div>
      </div>
      </main>

    </DetailContainer>
  )
}

export default Details