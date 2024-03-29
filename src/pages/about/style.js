import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 80px);
  line-height: 2;
  span {
    color: white;
    font-family: "Girassol", sans-serif;
    font-size: 3rem;
  }
  img {
    width: 500px;
    margin-bottom: 2rem;
  }
  main{
    font-size: 1rem;
    text-align: right;
    margin: 0 10px;
    max-width: 1000px;
    border: 1px solid white;
    padding: 25px;
    border-radius: 5px;
    
    a {
      color: white;
      text-decoration: none;
      font-size: 1.5rem;
    }
    span{
        font-size: 1.5rem;
    }
  }

`;
