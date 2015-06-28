var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

plugins.uglify = require('gulp-uglify');
plugins.rename = require('gulp-rename');

function getTask(task, sub) {
    if (sub) {
        return require('./gulp/' + task)[sub](gulp, plugins);
    }

    return require('./gulp/' + task)(gulp, plugins);
}

gulp.task('lint', getTask('lint'));
gulp.task('vendor', getTask('build', 'vendor'));
gulp.task('script', getTask('build', 'client'));
gulp.task('build', ['vendor', 'script']);

gulp.task('default', ['lint', 'build'], function() {
    gulp.watch('src/**/*.js', ['script']);
});
