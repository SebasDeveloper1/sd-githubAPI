import { getData } from 'services/getData';

export const getUserInfo = async ({ userName }) => {
  const userInfo = await getData({
    apiUrl: `https://api.github.com/users/${userName}`,
  });

  if (userInfo.message === 'Not Found') {
    return getUserInfo({ userName: 'octocat' });
  }

  return userInfo;
};
