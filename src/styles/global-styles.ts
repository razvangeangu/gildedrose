import { createGlobalStyle } from 'styled-components/macro';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    background-color: ${p => p.theme.background};
    color: ${p => p.theme.text};
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    transition: background-color 0.17s ease-in-out;
  }

  /* stylelint-disable-next-line selector-max-id */
  #root {
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: inherit;
    line-height: 1.5em;
  }

  input,
  textarea,
  select {
    font-family: inherit;
    font-size: inherit;
  }

  ul {
    margin: 0;
    padding-left: 1.25rem;
  }

  a {
    color: ${p => p.theme.primary};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }

    &:visited {
      color: ${p => p.theme.primary};
    }
  }
`;
