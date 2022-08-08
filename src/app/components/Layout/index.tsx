import { NavBar } from 'app/components/NavBar';
import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components/macro';
import { Footer } from '../Footer';

export function Layout() {
  return (
    <Container>
      <StyledNavBar />
      <Wrapper>
        <Outlet />
        <Footer />
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  align-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  margin-bottom: 3.75rem;
  margin-top: 3.75rem;
  max-width: 60rem;
  padding: 0.75rem 1rem;
  width: 100%;
`;

const StyledNavBar = styled(NavBar)`
  position: fixed;
`;
