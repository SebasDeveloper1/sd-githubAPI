/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { UserCard } from 'containers/indexContainers';
import { Searcher } from 'components/indexComponents';
import { getUserInfo } from 'services/getUserInfo';

export default function HomeContainer() {
  const [inputUser, setInputUser] = useState('');
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const userData = async () => {
      const data = await getUserInfo({ userName: 'octocat' });
      return setUserInfo(data);
    };
    userData();
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        inlineSize: '92%',
        p: '2rem',
        borderRadius: '16px',
        backgroundColor: (t) =>
          t.palette.mode === 'light'
            ? t.palette.grey[100]
            : t.palette.grey[900],
      }}
    >
      <Searcher
        inputUser={inputUser}
        setInputUser={setInputUser}
        setUserInfo={setUserInfo}
      />
      <UserCard userInfo={userInfo} />
    </Box>
  );
}
