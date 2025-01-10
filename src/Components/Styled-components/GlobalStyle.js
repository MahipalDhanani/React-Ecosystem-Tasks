import { createGlobalStyle } from "styled-components";

export const GlobaleStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.color.bgColor}; 
  }
`;
