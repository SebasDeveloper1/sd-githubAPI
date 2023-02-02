import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import {
  PaperInformation,
  LocationInformation,
} from 'components/indexComponents';

export default function DescriptionCard({ userInfo }) {
  const { bio } = userInfo;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
        paddingBlock: { xs: 2 },
        paddingInline: { xs: 0, md: 4 },
      }}
    >
      <Stack gap={1}>
        <Typography variant="h5" color={(t) => t.palette?.primary?.main}>
          Description
        </Typography>
        {bio ? (
          <Typography
            variant="subtitle1"
            color={(t) => t.palette?.text?.primary}
          >
            {bio}
          </Typography>
        ) : null}
      </Stack>
      <PaperInformation userInfo={userInfo} />
      <LocationInformation userInfo={userInfo} />
    </Box>
  );
}
