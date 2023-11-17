import axios from 'axios';

export const get = (url) => {
  return axios({method: 'get', url: url, timeout: 8000})
    .then(response => response)
    .catch(error => error);
};
