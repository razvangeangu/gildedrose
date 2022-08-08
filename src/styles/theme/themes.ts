const lightTheme = {
  primary: '#c00',
  text: '#000',
  background: '#fff',
  border: '#ccc',
};

const darkTheme: Theme = {
  primary: '#c00',
  text: '#000',
  background: '#fff',
  border: '#ccc',
};

export type Theme = typeof lightTheme;

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};
