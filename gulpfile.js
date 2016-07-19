
const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const browserSync = require('browser-sync');
const del = require('del');

const $ = gulpLoadPlugins();
const reload = browserSync.reload;

gulp.task('dist', () => {
    gulp.src('app/**/*')
        .pipe($.size())
        .pipe(gulp.dest('dist'));        
});

gulp.task('clean', del.bind(null, ['.tmp', 'dist']));

gulp.task('default', ['clean'], () => {
    gulp.start('build');
});

gulp.task('build', ['dist'], () => { // ['lint', 'html', 'images', 'fonts', 'extras'], 
});

gulp.task('scripts', () => {
    gulp.src('app/scripts/**/*.ts')
        .pipe($.plumber())
        .pipe($.sourcemaps.init())
        .pipe($.typescript()).js
        .pipe($.sourcemaps.write('.'))
        .pipe(gulp.dest('.tmp/scripts'))
        .pipe(reload({ stream: true }))
        ;
});

