import defaults from './properties';

export default class Client {
  constructor(properties = {}) {
    Object.assign(this, defaults, properties);
  }
}
