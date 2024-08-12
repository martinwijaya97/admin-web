import React from 'react';
import { AppBar, styled, Toolbar, Typography } from '@mui/material';

export const HeaderRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
}));

const Header = () => {
  return (
    <HeaderRoot position='static'>
      <Toolbar>
        <Typography
          style={{ fontSize: 24, fontWeight: 'bold', marginRight: 8 }}
        >
          GitHub{' '}
        </Typography>
        <Typography style={{ fontSize: 24, fontWeight: 'normal' }}>
          Jobs
        </Typography>
      </Toolbar>
    </HeaderRoot>
  );
};

export default Header;
