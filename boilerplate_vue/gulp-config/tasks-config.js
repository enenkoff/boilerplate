module.exports = function(gulp, plugins) {
    function getTask(task, path_src, path_dest, condition) {
        return require('./tasks/' + task)(gulp, plugins, path_src, path_dest);
    }

    /* clean all files ------------------------------------- */

    gulp.task('files:clean', () => {
        return getTask('clean', PATH_CONFIG.clean);
    });

    /* svg:compile --------------------------------------*/

    // svg sprite build

    gulp.task('svg:sprite', () => {
        return getTask('svg-sprite', PATH_CONFIG.src.svg_sprite, PATH_CONFIG.src.svg);
    });

    // svg copy all files to build

    gulp.task('svg:copy', () => {
        return getTask('copy', PATH_CONFIG.src.svg_files, PATH_CONFIG.build.svg);
    });

    // svg build sprite and copy all files to build

    gulp.task(
        'svg:build',
        gulp.series('svg:copy', done => {
            done();
        }),
    );

    /* img:compile --------------------------------------*/

    gulp.task('img:optimize', () => {
        return getTask('img-optimize', PATH_CONFIG.src.img, PATH_CONFIG.build.img, true);
    });
    gulp.task('img:optimize-force', () => {
        return getTask('img-optimize', PATH_CONFIG.src.img, PATH_CONFIG.build.img);
    });

    /* media:copy --------------------------------------*/

    gulp.task('media:copy', () => {
        return getTask('copy', PATH_CONFIG.src.media, PATH_CONFIG.build.media);
    });

    /* fonts:copy --------------------------------------*/

    gulp.task('fonts:copy', () => {
        return getTask('copy', PATH_CONFIG.src.fonts, PATH_CONFIG.build.fonts);
    });

    /* css:compile ------------------------------------- */

    gulp.task('css:build', () => {
        return getTask('css-build', PATH_CONFIG.src.sass, PATH_CONFIG.build.css);
    });

    /* watchers --------------------------------------*/

    gulp.task(
        'watch:css',
        gulp.parallel('css:build', () => {
            return getTask('watch', PATH_CONFIG.watch.style, 'css:build');
        }),
    );

    gulp.task(
        'watch:img',
        gulp.parallel('img:optimize', () => {
            return getTask('watch', PATH_CONFIG.watch.img, 'img:optimize');
        }),
    );

    gulp.task(
        'watch:svg',
        gulp.parallel('svg:build', () => {
            return getTask('watch', [PATH_CONFIG.watch.svg, PATH_CONFIG.watch.svg_no_sprite], 'svg:build');
        }),
    );

    gulp.task(
        'watch',
        gulp.series(
            'files:clean',
            gulp.parallel(
                'css:build',
                'svg:copy',
                'img:optimize',
                () => {
                    getTask('watch', PATH_CONFIG.watch.style, 'css:build');
                    getTask('watch', PATH_CONFIG.watch.img, 'img:optimize');
                },
            ),
        ),
    );

    /* server build --------------------------------------*/

    gulp.task(
        'build',
        gulp.parallel(
            'css:build',
            'img:optimize',
            'svg:build',
            'media:copy',
            'fonts:copy',
            done => {
                done();
            },
        ),
    );

    /* gulp default --------------------------------------*/

    gulp.task('default', gulp.series('watch'), done => {
        done();
    });
};
