import { translations } from 'locales/translations';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import { ReactComponent as LogoSvg } from './assets/logo.svg';

export interface NavBarProps {
  /**
   * The className passed to the styled container.
   *
   * @default undefined
   */
  className?: string;
}

export function NavBar({ className }: NavBarProps) {
  const { t } = useTranslation();

  return (
    <Container className={className}>
      <Wrapper>
        <LinkContainer to="/">
          <Logo as={LogoSvg} />
          <LogoText>{t(translations.appName)}</LogoText>
        </LinkContainer>
      </Wrapper>
    </Container>
  );
}

const LinkContainer = styled(Link)`
  align-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
`;

const Wrapper = styled.div`
  max-width: calc(60rem - 1.5rem);
  width: 100%;
`;

const Container = styled.div`
  align-content: center;
  align-items: center;
  background-color: ${p => p.theme.primary};
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0.75rem 1rem;
  width: 100%;
`;

const Logo = styled.svg`
  height: 2.25rem;

  path {
    fill: #fff;
  }
`;

const LogoText = styled.span`
  color: #fff;
  font-size: 1.5rem;
  line-height: 1;
  margin-left: 0.5rem;
`;
