import axios from 'axios';
import apiKeys from '../helpers/apiKeys.json';

const baseUrl = apiKeys.apiKeys.databaseURL;

const jokeSetup = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}`).then((response) => resolve(response.data.setup)).catch((error) => reject(error));
});

const jokePunchline = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}`).then((response) => resolve(response.data.punchline)).catch((error) => reject(error));
});

export default { jokeSetup, jokePunchline };
