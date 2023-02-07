import React from 'react';
import { IconButton, Stack, TextField, InputAdornment } from '@mui/material';
import { Search } from '@mui/icons-material';
import { getUserInfo } from 'services/getUserInfo';

export default function Searcher(props) {
  const { inputUser, setInputUser, setUserInfo } = props;

  const handleSubmit = async () => {
    let data;
    if (inputUser.length <= 0) {
      data = await getUserInfo({ userName: 'octocat' });
      return setUserInfo(data);
    }
    data = await getUserInfo({ userName: inputUser.trim() });
    return setUserInfo(data);
  };

  return (
    <Stack
      sx={{
        inlineSize: '100%',
        maxInlineSize: '700px',
      }}
    >
      <TextField
        label="Github User"
        id="outlined-basic"
        placeholder="Search Github User"
        variant="outlined"
        sx={{
          position: 'relative',
          inlineSize: '100%',
        }}
        value={inputUser}
        onChange={(e) => setInputUser(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleSubmit}>
                <Search />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Stack>
  );
}
