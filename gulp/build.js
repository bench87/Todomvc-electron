var path = require('path');
var fs = require('fs');
var exorcist = require('exorcist');
var mold = require('mold-source-map');
var transform = require('vinyl-transform');
var babelify = require('babelify');

var pkg = require('../package.json');
var buildname = pkg.name + '-' + pkg.version;

var libs = [
    'react',
    'react-addons',
    'react-router',
    'react-mixin',
    'reflux',
    'immutable',
    'uuid',
    'classnames'
];

exports.vendor = function(gulp, plugins) {
    return function() {
        return gulp.src(['gulp/noop.js'], {read: false})
            .pipe(plugins.browserify({
                debug: false,
                transform: [babelify.configure({
                    compact: false,
                    optional: ['spec.protoToAssign']
                })]
            }))
            .on('prebundle', function(bundler) {
                libs.forEach(function(lib) {bundler.require(lib); });
            })
            .pipe(plugins.uglify())
            .pipe(plugins.rename(buildname + '.vendor.min.js'))
            .pipe(gulp.dest('./build/'));
    };
};

exports.client = function(gulp, plugins) {
    return function() {
        var isDevelopment = process.env.NODE_ENV !== 'production';
        var buildDir = path.join(__dirname, '../build');
        var stream;

        if (!fs.existsSync(buildDir)) {
            fs.mkdirSync(buildDir);
        }

        stream = gulp.src(['./src/app.js'])
            .pipe(plugins.browserify({
                debug: true,
                transform: [babelify.configure({
                    optional: ['spec.protoToAssign']
                })]
            }))
            .on('prebundle', function(bundler) {
                libs.forEach(function(lib) {bundler.external(lib); });
            });

        if (isDevelopment) {
            stream = stream
                .pipe(transform(function() {return mold.transformSourcesRelativeTo(path.join(__dirname, '../')); }))
                .pipe(transform(function() {return exorcist('./build/' + buildname + '.js.map'); }))
                .pipe(plugins.rename(buildname + '.js'))
                .pipe(gulp.dest('./build/'));
        }

        return stream
            .pipe(plugins.uglify())
            .pipe(plugins.rename(buildname + '.min.js'))
            .pipe(gulp.dest('./build/'));
    };
};
