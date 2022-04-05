import styled from "styled-components";

export const FoodCard = styled.div`
  height: 300px;
  background: #e1f1dd;
  padding: 5px;
  border-radius: 3px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin: 10px;
  box-shadow: 8px 8px 5px black;
  &:hover {
    box-shadow: none;
    transition: all 0.3s ease-in;
  }
  h1 {
    font-size: 1.5rem;
    text-align: center;
  }
  img {
    height: 150px;
    border-radius: 10px;
  }

  button {
    background-color: #00adb5;
    padding: 5px;
    outline: none;
    height: 2rem;
    border: none;
    margin: 10px;
    border-radius: 3px;
    cursor: pointer;
  }
`;

export const FoodContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  height: fit-content;
`;
export const BgImg = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px;
  img {
    width: 80%;
    max-width: 750px;
  }
`;
export const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  
  form {
    border: 2px solid white;
    border-radius: 3px;
    padding: 0.3rem;
  }
  input {
    height: 3rem;
    width: 15rem;
    border: none;
    border-radius: 3px;
    outline: none;
    text-indent: 10px;
    margin: 5px;
    font-size: 2rem;
  }
  button {
    background-color: #e1f1dd;
    padding: 5px;
    outline: none;
    height: 3rem;
    border: none;
    margin: 5px;
    border-radius: 3px;
    cursor: pointer;
    font-size: 2rem;
    &:hover {
      background-color: #00adb5;
      transition: all 0.3s ease-in;
      border: 1px solid white;
    }
  }

  select {
    border-radius: 3px;
    margin: 5px;
    padding: 5px;
    height: 3rem;
    border: none;
    font-size: 2rem;
  }
`;
