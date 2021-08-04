import Axios from '../axios';

const axios = new Axios('https://maps.googleapis.com');

const defaultPayload = {
  key: 'SOME_PRIVATE_KEY',
  inputtype: 'textquery',
  fields: 'formatted_address',
};

export default {
  getAddress: (payload = {}) => axios.get('/maps/api/place/findplacefromtext/json', { ...defaultPayload, ...payload }),
};
