import { css } from 'styled-components/macro';
import { media, sizes } from '../media';

describe('media', () => {
  it('should return media query in css', () => {
    const mediaQuery = media.small`color:#c00;`.join('');
    const cssVersion = css`
      @media (min-width: ${sizes.small}px) {
        color: #c00;
      }
    `.join('');
    expect(mediaQuery).toEqual(cssVersion);
  });
});
