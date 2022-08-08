const lightTheme = {
  primary: '#9b283c',
  primaryHover: '#d2556b',
  text: '#1d0207',
  background: '#fffbf3',
  border: '#e5e1da',
};

const darkTheme: Theme = {
  primary: '#9b283c',
  primaryHover: '#d2556b',
  text: '#1d0207',
  background: '#fffbf3',
  border: '#e5e1da',
};

export type Theme = typeof lightTheme;

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};
