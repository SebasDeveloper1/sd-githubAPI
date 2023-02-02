/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */ import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { HomeContainer } from 'containers/indexContainers';
import { CssBaseline, Box } from '@mui/material';

function App() {
  const theme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  return (
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <main>
          <Box
            component="main"
            maxWidth="xl"
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
      </ThemeProvider>
    </CssBaseline>
  );
}

export default App;
