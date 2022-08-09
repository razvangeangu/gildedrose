const lightTheme = {
  primary: '#9b283c',
  primaryHover: '#d2556b',
  text: '#1d0207',
  background: '#fffbf3',
  border: '#e5e1da',
  surface: {
    background: '#fff',
  },
};

const darkTheme: Theme = {
  primary: '#651a27',
  primaryHover: '#862334',
  text: '#fffafb',
  background: '#100c08',
  border: '#15130f',
  surface: {
    background: '#000',
  },
};

export type Theme = typeof lightTheme;

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};
