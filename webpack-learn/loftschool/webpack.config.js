const path = require('path');
const merge = require('webpack-merge');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const extractCSS = require('./webpack/css.extract');

const plugins = require('./webpack/plugins');
const devserver = require('./webpack/devserver');

const PATHS = {
    source: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'dist')
};

const common = merge([
    {
        entry: PATHS.source + '/index.js',
        output: {
            path: PATHS.build,
            filename: '[name].js'
        }
    },
    plugins()
]);

module.exports = function(env) {
    if (env === 'production') {
        return merge([
            common,
            extractCSS()
        ]);
    }
    if (env === 'development') {
        return merge([
            common,
            {
                module: {
                    rules: [
                        {
                            test: /\.scss$/,
                            use: [
                                'style-loader',
                                'css-loader',
                                'sass-loader'
                            ]
                        }
                    ]
                }
            },
            devserver()
        ]);
    }
};