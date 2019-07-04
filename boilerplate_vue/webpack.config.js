const path = require('path');
var webpack = require('webpack');
const merge = require('webpack-merge');

const pluginHtml = require('./webpack/plugin-html');
const pluginCssExtract = require('./webpack/plugin-css-extract');
const devserver = require('./webpack/devserver');

const common = merge([
    {
        entry: {
            'index': './src/main.js',
            'blog': './src/main.js'
        },
        output: {
            path: path.resolve(__dirname, './dist'),
            publicPath: './',
            filename: 'js/[name].js'
        },
        module: {
            rules: [
                {
                    test: /\.html$/,
                    use: [{ loader: "html-loader"}]
                },
                {
                    test: /\.vue$/,
                    loader: 'vue-loader',
                },
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.(png|jpg|gif|svg)$/,
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]?[hash]'
                    }
                }
            ]
        },
        resolve: {
            alias: {
                'vue$': 'vue/dist/vue.esm.js'
            },
            extensions: ['*', '.js', '.vue', '.json']
        },
        performance: {
            hints: false
        }
    },
    pluginHtml()
]);



module.exports = function () {

    if (process.env.NODE_ENV === 'development') {
        return merge([
            common,
            {
                devtool: '#eval-source-map',
                module: {
                    rules: [
                        {
                            test: /\.css$/,
                            use: [
                                'vue-style-loader',
                                'css-loader'
                            ],
                        }
                    ]
                }
            },
            devserver()
        ]);
    }

    if (process.env.NODE_ENV === 'production') {

        return merge([
            common,
            {
                devtool: '#source-map',
                plugins: [
                    new webpack.DefinePlugin({
                        'process.env': {
                            NODE_ENV: '"production"'
                        }
                    }),
                    new webpack.optimize.UglifyJsPlugin({
                        sourceMap: true,
                        compress: {
                            warnings: false
                        }
                    })
                ]
            },
            pluginCssExtract()
        ]);

    }

};


