const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = function() {
    return {
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
        ]
    };
};