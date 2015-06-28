module.exports = function(gulp, plugins) {
    return function() {
        return gulp.src(['gulpfile.js', 'gulp/**/*.js', 'src/**/*.js'])
            .pipe(plugins.eslint({useEslintrc: true}))
            .pipe(plugins.eslint.format())
            .pipe(plugins.eslint.failAfterError())
            .pipe(plugins.jscs());
    };
};
