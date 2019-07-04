const HtmlWebPackPlugin = require("html-webpack-plugin");

var path = require('path');
var webpack = require('webpack');

module.exports = {
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
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'scss': [
              'vue-style-loader',
              'css-loader',
              'sass-loader'
            ],
            'sass': [
              'vue-style-loader',
              'css-loader',
              'sass-loader?indentedSyntax'
            ]
          }
          // other vue-loader options go here
        }
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
  plugins: [
      new HtmlWebPackPlugin({
          template: "./src/index.html",
          chunks: ['index'],
          filename: "./index.html",
      }),
      new HtmlWebPackPlugin({
          template: "./src/blog.html",
          chunks: ['blog'],
          filename: "./blog.html",
      })
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    stats: 'errors-only',
    publicPath: '/',
    port: 3232,
    overlay: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
};

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
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
    }),
    // new webpack.LoaderOptionsPlugin({
    //   minimize: true
    // })
  ])
}
