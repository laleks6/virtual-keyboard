module.exports = {
  env: {
    browser: true,
  },
  extends: [
    'eslint-config-airbnb-base',
  ],
  overrides: [
    {
      files: ['*.js'],
      rules: {
        'import/extensions': 'off',
      },
    },
  ],
};
