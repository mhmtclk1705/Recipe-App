import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: "Girassol", sans-serif;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 2rem;
  background-color: #e1f1dd;
  height: 75px;
  font-size: 2rem;
  font-weight: 800;
  span {
    color: #00adb5;
    font-weight: 400;
    font-size: 1.7rem;
  }
  a {
    text-decoration: none;
  }

  .navbar-right {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #02475e;
    // flex-wrap: wrap;
    a {
      word-spacing: 1rem;
      // margin:1rem;
      padding: 1rem 2rem;
      transition: all 0.3s ease-in;

      &:hover {
        color: #00adb5;
        font-weight: bold;
      }
    }
  }
`;
