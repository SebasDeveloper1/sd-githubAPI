import React from 'react';
import { Stack, Typography } from '@mui/material';

export default function MainInformation({ userInfo }) {
  const { name, login, created_at: accountCreation } = userInfo;

  const day = new Date(accountCreation).getDate();
  const month = new Date(accountCreation).getMonth() + 1;
  const year = new Date(accountCreation).getFullYear();

  const normalizerDate = (date) => {
    if (date < 10) {
      return `0${date}`;
    }
    return date;
  };

  return (
    <Stack
      spacing={1}
      sx={{
        textAlign: 'center',
      }}
    >
      <Typography variant="h4" color={(t) => t.palette?.primary?.main}>
        {name}
      </Typography>
      <Typography variant="h5" color={(t) => t.palette?.text?.primary}>
        {`@${login}`}
      </Typography>
      <Typography variant="subtitle1" color={(t) => t.palette?.text?.secondary}>
        {`${normalizerDate(day)} / ${normalizerDate(month)} / ${year}`}
      </Typography>
    </Stack>
  );
}
