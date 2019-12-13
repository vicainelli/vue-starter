module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  testMatch: ['**/*.spec.(js|ts)'],
  transformIgnorePatterns: ['/node_modules/(?!@babel)']
}
