import styled from "styled-components";

export const DetailContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  background: #00adb5;
  min-height: calc(100vh - 75px);
  padding: 5px;
  span{
      text-weight:800;
  }

  header {
    display: flex;
    justify-content: space-evenly;
    margin: 25px;
    font-size: 3rem;
    h1 {
      font-size: 3rem;
    }
    img {
      width: 200px;
    }
  }
  main{
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    align-items: start;
    margin: 1rem;
    border: 1px solid white;
    border-radius: 5px;
    background-color: #e1f1dd;
    padding:1rem;
    
    }
  }
  .total-nutrients{
    display: flex;
    flex-wrap: wrap;
    border: 1px solid #00adb5;
    margin:1rem;
    h3{
        width:10rem
    }
  }
`;
