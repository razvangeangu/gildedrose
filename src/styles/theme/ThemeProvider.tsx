import React from 'react';
// eslint-disable-next-line no-restricted-imports
import { ThemeProvider as OriginalThemeProvider } from 'styled-components';
import { themes } from './themes';
import { isSystemDark } from './utils';

export const ThemeProvider = (props: { children: React.ReactChild }) => {
  const theme = isSystemDark ? themes.dark : themes.light;

  const { children } = props;

  return (
    <OriginalThemeProvider theme={theme}>
      {React.Children.only(children)}
    </OriginalThemeProvider>
  );
};
