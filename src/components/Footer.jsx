import React from 'react';
import { Box, CardMedia, Typography } from '@mui/material';
import logoSebasDeveloper from 'images/sebas-developer.logo.png';

export default function Footer() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        rowGap: 1,
        minHeight: '200px',
        textAlign: 'center',
        color: (t) => t.palette?.grey[100],
        backgroundColor: (t) => t?.palette?.grey[900],
      }}
    >
      <CardMedia
        component="img"
        alt="SebasDeveloper"
        image={logoSebasDeveloper}
        sx={{
          inlineSize: '160px',
          marginBlockEnd: 1,
          borderColor: (t) => t.palette?.primary?.dark,
        }}
      />
      <Typography
        variant="subtitle1"
        sx={{ maxInlineSize: '90%', color: (t) => t?.palette?.primary?.main }}
      >
        Sebas Pedroza ◉ @SebasDeveloper ◉ 2023
      </Typography>
      <Typography variant="subtitle1">
        Hecho con el 💙 por Sebastian Pedroza
      </Typography>
    </Box>
  );
}
