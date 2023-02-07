/* eslint-disable no-nested-ternary */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable function-paren-newline */
/* eslint-disable no-confusing-arrow */
import React from 'react';
import { Grid, Stack, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';
import BusinessIcon from '@mui/icons-material/Business';
import MailIcon from '@mui/icons-material/Mail';

export default function LocationInformation({ userInfo }) {
  const {
    location,
    twitter_username: twitterUserName,
    blog,
    company,
    email,
  } = userInfo;

  const data = [
    { title: 'location', value: location },
    {
      title: 'twitter',
      value: twitterUserName ? `@${twitterUserName}` : null,
    },
    { title: 'blog', value: blog },
    { title: 'company', value: company },
    { title: 'email', value: email },
  ];

  return (
    <Grid
      container
      sx={{
        justifyContent: 'center',
        gap: 2,
        paddingBlock: 3,
        paddingInline: 1,
      }}
    >
      {data.map(({ title, value }) =>
        value ? (
          <Grid
            xs={12}
            item
            key={`Info_${title}`}
            sx={{
              color: (t) => t.palette?.primary?.dark,
            }}
          >
            <Stack
              sx={{
                flexDirection: 'row',
                gap: 1,
              }}
            >
              <Stack
                sx={{
                  flexDirection: 'row',
                  gap: 1,
                }}
              >
                {title === 'location' ? (
                  <LocationOnIcon />
                ) : title === 'twitter' ? (
                  <TwitterIcon />
                ) : title === 'blog' ? (
                  <LanguageIcon />
                ) : title === 'company' ? (
                  <BusinessIcon />
                ) : title === 'email' ? (
                  <MailIcon />
                ) : null}
                <Typography
                  variant="h6"
                  color={(t) => t.palette?.text?.primary}
                  sx={{ textTransform: 'capitalize' }}
                >
                  {`${title}:`}
                </Typography>
              </Stack>
              <Typography
                variant="subtitle1"
                color={(t) => t.palette?.primary?.main}
                sx={{
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                  overflow: 'hidden',
                  lineHeight: 2,
                }}
              >
                {value}
              </Typography>
            </Stack>
          </Grid>
        ) : null
      )}
    </Grid>
  );
}
