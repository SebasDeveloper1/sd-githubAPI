import React from 'react';
import { Paper, Stack, Typography } from '@mui/material';

export default function PaperInformation({ userInfo }) {
  const { public_repos: publicRepos, followers, following } = userInfo;

  const paperInfo = {
    repositories: publicRepos,
    followers,
    following,
  };

  return (
    <Paper elevation={5}>
      <Stack
        sx={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          flexWrap: 'wrap',
          gap: 2,
          paddingBlock: 3,
          paddingInline: 1,
        }}
      >
        {Object.entries(paperInfo).map((item) => (
          <Stack
            key={`Info_${item[0]}`}
            sx={{
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography
              variant="h6"
              color={(t) => t.palette?.text?.primary}
              sx={{ textTransform: 'capitalize' }}
            >
              {item[0]}
            </Typography>
            <Typography variant="h4" color={(t) => t.palette?.primary?.main}>
              {item[1]}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Paper>
  );
}
