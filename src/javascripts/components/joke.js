import axios from 'axios';
import apiKeys from '../helpers/apiKeys.json';

const baseUrl = apiKeys.apiKeys.databaseURL;

const jokeSetup = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/setup.json`).then((response) => resolve(response)).catch((error) => reject(error));
});

const jokePunchline = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/punchline.json`).then((response) => resolve(response)).catch((error) => reject(error));
});

export default { jokeSetup, jokePunchline };
