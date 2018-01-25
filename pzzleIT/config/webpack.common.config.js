const webpack = require('webpack');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const paths = require('./paths');

const APP_TITLE = 'PzzleIT';

const TARGET = 'development';

module.exports = {
    TARGET: TARGET,
    commonPlugins: [
        new webpack.IgnorePlugin(/vertx/),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: '[name].js',
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(TARGET),
                BABEL_ENV: JSON.stringify(TARGET),
            },
        }),
        new HtmlwebpackPlugin({
            template: paths.HTML_TEMP_PATH,
            path: paths.BUILD_PATH,
            filename: 'index.html',
            title: APP_TITLE,
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
              postcss: [
                require('postcss-import'),
                require('postcss-color-function')(),
                require('postcss-cssnext')({
                  browsers: ['last 2 versions', 'not ie < 11'],
                }),
              ],
              context: paths.APP_PATH,
            },
          }),
    ],
    commonRules: [
        {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader',
                'postcss-loader',
            ],
        },
        {
            test: /\.(js|jsx)$/,
            include: /app/,
            use: [
                'babel-loader',
                {
                    loader: 'eslint-loader',
                    options: {
                        emitWarning: true,
                    },
                },
            ],
        }
    ],
};
