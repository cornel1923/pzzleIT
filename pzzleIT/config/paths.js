const path = require('path');
const ROOT_PATH = path.resolve('.');
const APP_PATH = path.resolve(ROOT_PATH, 'app');

module.exports = {
  NODE_MODULES_PATH: path.resolve(ROOT_PATH, 'node_modules'),
  OUTPUT_PUBPATH: '/',
  ENTRY_PATH: './index.js',
  BUILD_PATH: path.resolve(ROOT_PATH, 'build'),
  APP_PATH: APP_PATH,
  STYLES_PATHS: APP_PATH,
  HTML_TEMP_PATH: path.join(APP_PATH, 'index.ejs'),
};

