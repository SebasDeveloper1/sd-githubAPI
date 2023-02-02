import React from 'react';
import { CardMedia, Grid, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { MainInformation } from 'components/indexComponents';
import { DescriptionCard } from 'containers/indexContainers';

const ResponsiveBox = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    border: 'none',
    borderBlockEnd: '1px solid gray',
  },
  [theme.breakpoints.up('sm')]: {
    border: 'none',
    borderInlineEnd: '1px solid gray',
  },
}));
export default function UserCard({ userInfo }) {
  return (
    <Grid
      container
      sx={{
        justifyContent: 'center',
        gap: 2,
        marginBlockStart: 6,
      }}
    >
      <Grid item xs={12} sm={5} md={4}>
        <ResponsiveBox>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2,
              paddingBlockEnd: 2,
            }}
          >
            <CardMedia
              component="img"
              alt={userInfo?.name}
              image={userInfo?.avatar_url}
              sx={{
                width: '70%',
                borderRadius: '50%',
                border: '4px solid red',
                borderColor: (t) => t.palette?.primary?.dark,
              }}
            />
            <MainInformation userInfo={userInfo} />
          </Box>
        </ResponsiveBox>
      </Grid>

      <Grid item xs={12} sm={6} md={7}>
        <DescriptionCard userInfo={userInfo} />
      </Grid>
    </Grid>
  );
}
