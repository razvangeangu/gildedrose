import { translations } from 'locales/translations';
import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components/macro';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer>
      <Footnote>
        {`© ${new Date().getFullYear()} Răzvan-Gabriel Geangu. ${t(
          translations.footer.rights,
        )}`}
      </Footnote>
    </footer>
  );
}

const Footnote = styled.span`
  font-size: 0.75rem;
`;
