// export const getData = ({ apiUrl }) => {
//   fetch(apiUrl)
//     .then((response) => response.json())
//     .then((data) => console.log(data));
// };

export const getData = async ({ apiUrl }) => {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};
