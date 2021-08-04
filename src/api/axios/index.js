import axios from 'axios';

export default class Axios {
  constructor(baseUrl = '') {
    this.baseUrl = baseUrl;
  }

  get(url, conf = {}) {
    return this.getClient().get(url, conf)
      .then((response) => Promise.resolve(response))
      .catch((error) => Promise.reject(error));
  }

  getClient() {
    return axios.create({ baseURL: this.baseUrl });
  }
}
