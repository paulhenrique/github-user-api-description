import axios from 'axios';

const github = axios.create({
  baseURL: `https://api.github.com/users/${process.env.VUE_APP_USER}`
});

export default github;