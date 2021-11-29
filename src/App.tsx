import { Routes } from "./routes";

import dark from "./global/styles/dark";
import light from "./global/styles/light";

import sunIMG from './assets/sun.svg';
import moonIMG from './assets/moon.svg';

import GlobalStyle from "./global/styles/GlobalStyle";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { ThemeContainer } from "./global/styles/styles";

export function App() {
  const [themes, setThemes] = useState(dark);

  return (
    <ThemeProvider theme={themes}>
      <ThemeContainer onClick={() => setThemes(themes.title === "dark" ? light : dark)}>
        {
          themes.title === 'dark' && (
            <img src={sunIMG} alt="Light mode" />
          ) || (
            <img src={moonIMG} alt="Light mode" />
          )
        }
      </ThemeContainer>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  )
}