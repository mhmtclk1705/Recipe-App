import axios from 'axios'
import React,{useState} from 'react'
import RecipeCard from './RecipeCard'
import {BgImg, FoodContainer, FormContainer} from "./style"
import homeSvg from '../../assets/home.svg'


const category = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"]
const APP_KEY = "279403225ae12fda57dbfc0e4880f23c"
const APP_ID = "fe7b9875"
const Home = () => {
  const [query, setQuery] = useState('')
  const [recipes, setRecipes] = useState([])
  const [loading, setLoading] = useState(true)
  const [meal ,setMeal] = useState(category[0].toLowerCase())
  const baseUrl = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`
  
  const getRecipes = async () => {
    if(query !== ""){
    const response = await axios.get(baseUrl)
    // console.log(response);
    setRecipes(response.data.hits)
    // console.log(recipes);
  }
  }



  const handleSubmit = (e) =>{
    e.preventDefault()
    getRecipes()
    setLoading(false)
    // setQuery('')
  }
  console.log(recipes?.recipe);

  return (
    <div>
        <h1>Food App</h1>
      <FormContainer>
        <form action="" onSubmit={handleSubmit}>
          <input type="text" placeholder="Search" value={query} onChange={(e) => setQuery(e.target.value)}/>
          <button type="submit" onClick={getRecipes}>Search</button>
          <select name="meal" id="meal" onChange={(e) => setMeal(e.target.value)}>
            {category.map((item, index) => {
              return <option value={item} key={index}>{item}</option>
            })}
          </select>
        </form>
      </FormContainer>
      {!loading ? (
      <FoodContainer>
        {recipes.map((recipe, index) => {
          return <RecipeCard key={index} recipe={recipe}/>
        })}
      </FoodContainer>

        ) : ( 
          <BgImg>
          <img src={homeSvg} alt="" />
          </BgImg>
        )}
        
    </div>
  )
}

export default Home