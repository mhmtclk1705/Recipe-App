import React from 'react'
import { useNavigate } from 'react-router-dom';
import meal from '../../assets/meal.svg'
import { LoginContainer } from './style';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit= (e) => {
      e.preventDefault();
      navigate('/home')
  }
  return (
    <LoginContainer>
      <main>
      <img src={meal} alt="" />
      <h3>{"<CLARUSWAY>"}<span>Recipe</span></h3>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder='USERNAME' required minLength={3}/>
        <input type="password" placeholder='PASSWORD' required minLength={3}/>
        <button type='submit'>LOGIN</button>
      </form>
      </main>
    </LoginContainer>
  )
}

export default Login