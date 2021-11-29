import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *
  {
    margin: 0;
    padding: 0;

    box-sizing: border-box;

    transition: all 0.2s;
  }

  *:focus
  {
    outline: 0;
  }

  HTML,
  body, 
  #root
  {
    width: 100%;

    scroll-behavior: smooth;

    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
  }

  body
  {
    font: 14px 'Sora', sans-serif;
  }

  button
  {
    cursor: pointer;
  }

  button:hover
  {
    opacity: 0.65;
  }

  a
  {
    text-decoration: none;
  }

  p, h1, h2, h3, span
  {
    cursor: default;
  }
`;