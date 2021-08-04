import Client from '../../models/Client';

const clientListMock = () => [
  new Client({
    id: 1,
    name: 'NameFirst',
    surname: 'SurnameFirst',
    phone: 65432100,
    address: 'Savanorių pr. 5, LT-12345, Vilnius, Lithuania',
  }),
  new Client({
    id: 2,
    name: 'NameSecond',
    surname: 'SurnameSecond',
    phone: 61234567,
    address: 'Horse str. 61, LV-86544, Riga, Latvia',
  }),
  new Client({
    id: 3,
    name: 'NameThird',
    surname: 'SurnameThird',
    phone: 65555555,
    address: 'Harju str. 88, EE-75632, Tallinn, Estonia',
  }),
];

export default {
  // this is a mock instead of a real ajax call
  getClientList: () => new Promise((resolve) => resolve({ data: clientListMock() })),
  deleteItem: (item) => new Promise((resolve) => resolve({ data: item })),
  postItem: (item) => new Promise((resolve) => resolve(
    { data: { ...item, id: Math.floor(Math.random() * 10000) + 1 } },
  )),
  putItem: (item) => new Promise((resolve) => resolve({ data: item })),
};
