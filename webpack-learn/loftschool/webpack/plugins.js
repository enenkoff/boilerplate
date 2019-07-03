const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function() {
    return {
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                title: 'Webpack app'
            })
        ]
    };
};