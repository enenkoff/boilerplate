module.exports = function() {
    return {
        devServer: {
            historyApiFallback: true,
            noInfo: true,
            stats: 'errors-only',
            publicPath: '/',
            port: 3232,
            overlay: true
        }
    };
};