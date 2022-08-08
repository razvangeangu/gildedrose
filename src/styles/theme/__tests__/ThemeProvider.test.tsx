import React from 'react';
import { render } from '@testing-library/react';
import { useTheme } from 'styled-components/macro';
import { ThemeProvider } from '../ThemeProvider';
import { themes } from '../themes';

describe('<ThemeProvider />', () => {
  it('should render its children', () => {
    const text = 'Test';

    const { queryByText } = render(
      <ThemeProvider>
        <h1>{text}</h1>
      </ThemeProvider>,
    );

    expect(queryByText(text)).toBeInTheDocument();
  });

  it('should render selected theme', () => {
    let theme: any;

    const Children = () => {
      theme = useTheme();
      return <h1>Test</h1>;
    };

    render(
      <ThemeProvider>
        <Children />
      </ThemeProvider>,
    );

    expect(theme).toBe(themes.light);
  });
});
