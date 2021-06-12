import styled, { createGlobalStyle } from "styled-components";
import Poppins from "./assets/fonts/Poppins-Regular.ttf";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family:"Poppins-Regular" ;
    src:local('Poppins-Regular'), local('Poppins-Regular'),
      url(${Poppins}) format("truetype");;
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html{
    font-family: "Poppins-Regular";
    font-size: 62.5%;
    box-sizing: border-box;
  }
  body {
    font-size: 1.6rem;
    width: 100%;
    height: 100vh;
    max-height: 100vh;
    padding-top: 6rem;
    padding-bottom: 6rem;
    background-image: linear-gradient(to right, #b0c3fe, #9eb5ff, #8ca7ff, #7a99ff, #688bff, #6d8dff, #7290ff, #7692ff, #90a6ff, #a9baff, #c2ceff, #dbe2fe);
    box-sizing: inherit;
  }
`;
export const Wrapper = styled.div`
  border: 1px solid rgb(234, 234, 238);
  box-shadow: 2px 2px 8px 2px rgba(234, 234, 238, 0.7);
  background-color: #fff;
  max-width: 114rem;
  margin: 0 auto;
  box-sizing: border-box;
`;
export const Container = styled.div`
  width: 100%;
  max-width: 114rem;
  margin: 0 auto;
  @media only screen and (max-width: 960px) {
    padding: 3rem 0;
  }
`;

export default GlobalStyle;
