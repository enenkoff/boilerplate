module.exports = function (gulp, plugins, path_src, path_dest) {

    let webpack = require('webpack'),
        webpackStream = require('webpack-stream');

    let onError = function(err) {
        plugins.notify.onError({
            title: 'Error in ' + err.plugin,
            message: err.message,
        })(err);
        this.emit('end');
    };

    return gulp.src(path_src + 'main.js')
            .pipe(plugins.plumber({ errorHandler: onError }))
            .pipe(webpackStream({
                mode: 'development',
                output: {
                    publicPath: path_dest,
                    filename: 'app.js',
                },
                module: {
                    rules: [
                        {
                            test: /\.(js)$/,
                            exclude: /(node_modules)/,
                            loader: 'babel-loader',
                            query: {
                                presets: ['env']
                            }
                        },
                        {
                            test: /\.vue$/,
                            loader: 'vue-loader',
                            options: {
                                loaders: {
                                }
                                // other vue-loader options go here
                            }
                        },
                    ]
                },
                resolve: {
                    alias: {
                        'vue$': 'vue/dist/vue.esm.js'
                    },
                    extensions: ['*', '.js', '.vue', '.json']
                }
            }))
            .pipe(plugins.uglify())
            .pipe(plugins.rename({ suffix: '.min' }))
            .pipe(gulp.dest(path_dest))
            .pipe(browserSync.reload({ stream: true }))
};