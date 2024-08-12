import React from 'react';
import { Container } from '@mui/material';
import Header from './Header';
import { MainContainer } from './Styles';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <MainContainer>{children}</MainContainer>
    </div>
  );
};

export default Layout;
