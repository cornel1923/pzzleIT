const paths = require('./config/paths');
const common = require('./config/webpack.common.config');

const rules = common.commonRules;
const plugins = common.commonPlugins;

module.exports = {
  context: paths.APP_PATH,
  entry: {
    app: paths.ENTRY_PATH,
    vendor: [
      'babel-polyfill',
      'immutable',
      'isomorphic-fetch',
      'react-dom',
      'react-router',
      'react'
    ],
  },
  output: {
    path: paths.BUILD_PATH,
    publicPath: paths.OUTPUT_PUBPATH,
    filename: '[name].[hash].js',
  },
  module: {
    rules,
  },
  resolve: {
    extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx', '.css'],
    modules: [
      paths.NODE_MODULES_PATH,
      paths.APP_PATH,
    ],
  },
  plugins,
};
