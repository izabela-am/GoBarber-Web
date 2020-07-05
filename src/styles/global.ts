import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #312E38;
    -webkit-font-smoothing: antialiased;
    color: #fff;
  }

  button {
    cursor: pointer;
  }

  body, input, button {
    font: 16px 'Roboto Slab', serif;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }
`;
