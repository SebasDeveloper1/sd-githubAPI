/* eslint-disable operator-linebreak */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */ import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { HomeContainer } from 'containers/indexContainers';
import { Footer } from 'components/indexComponents';
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Box,
  IconButton,
  Typography,
} from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import GitHubIcon from '@mui/icons-material/GitHub';

function App() {
  /* Setting the theme to light if there is no theme in local storage. */
  const themeLocalStorage =
    window.localStorage.getItem('SD_GITHUB_API_THEME') || 'light';
  const [colorTheme, setColorTheme] = useState(themeLocalStorage);

  const theme = createTheme({
    palette: {
      mode: colorTheme,
    },
  });

  const handlerTheme = () => {
    if (colorTheme === 'dark') {
      window.localStorage.setItem('SD_GITHUB_API_THEME', 'light');
      return setColorTheme('light');
    }
    window.localStorage.setItem('SD_GITHUB_API_THEME', 'dark');
    return setColorTheme('dark');
  };

  return (
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <AppBar position="static">
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <GitHubIcon fontSize="large" />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                fontWeight: 700,
                letterSpacing: '.2rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              GithubAPI
            </Typography>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => {
                handlerTheme();
              }}
            >
              {theme?.palette?.mode === 'light' ? (
                <DarkModeIcon />
              ) : (
                <LightModeIcon />
              )}
            </IconButton>
          </Toolbar>
        </AppBar>
        <main>
          <Box
            component="main"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: '100vh',
              paddingBlock: 4,
              backgroundColor: (t) => t.palette.background.default,
            }}
          >
            <HomeContainer />
          </Box>
        </main>
        <Footer />
      </ThemeProvider>
    </CssBaseline>
  );
}

export default App;
