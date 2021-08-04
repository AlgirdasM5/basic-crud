module.exports = {
  env: {
    es6: true,
  },
  extends: [
    'plugin:vue/recommended',
    'airbnb-base',
  ],
  plugins: [
    'vue',
  ],
  rules: {
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'state',
        ],
      },
    ],
  },
};
