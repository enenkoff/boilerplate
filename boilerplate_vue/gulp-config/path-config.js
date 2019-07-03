module.exports = {
    build: {
        css: 'dist/css/' /* path to ready css */,
        img: 'dist/images/' /* path to ready images */,
        media: 'dist/media/' /* path to ready media-files */,
        svg: 'dist/svg/' /* path to ready svg */,
        fonts: 'dist/fonts/' /* path to ready fonts */,
    },
    src: {
        common: 'src/assets/' /* path to source folder */,
        svg: 'src/assets/svg/' /* path to source svg folder */,
        svg_sprite: 'src/assets/svg/sprite/*.svg' /* path to source svg sprite files */,
        svg_files: 'src/assets/svg/**/*.svg' /* path to source all svg files */,
        media: 'src/assets/media/**/*.*' /* path to source media files */,
        fonts: 'src/assets/fonts/**/*.*' /* path to source fonts folder */,
        sass: 'src/assets/sass/**/*.+(sass|scss)' /* path to source sass files */,
        img: 'src/assets/images/**/*.+(jpg|jpeg|png|gif)' /* path to source images files */,
    },
    watch: {
        style: 'src/assets/sass/**/*.scss' /* path for watch sass files */,
        svg: 'src/assets/svg/**/*.svg' /* path for watch svg files */,
        svg_no_sprite: '!src/assets/svg/**/sprite.svg' /* path for exclude sprite-svg */,
        img: 'src/assets/images/**/*.+(jpg|jpeg|png|gif)' /* path for watch image files */,
    },
    clean: 'dist/' /* path for clean files */,
    port: '6061',
};
