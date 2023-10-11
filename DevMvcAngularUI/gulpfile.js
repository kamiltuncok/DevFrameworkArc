var ts = require('gulp-typescript');
var gulp = require('gulp');
var clean = require('gulp-clean');

var destPath = './libs/';

gulp.task('clean', function () {
    return gulp.src(destPath)
        .pipe(clean());
});

gulp.task("scriptsNStyles", function () {
    gulp.src([
        'node_modules/core-js/client/*.js',
        'node_modules/systemjs/dist/*.js',
        'node_modules/reflect-metadata/*.js',
        'node_modules/rxjs/**/*.js',
        'node_modules/zone.js/dist/*.js',
        'node_modules/@angular/**/bundles/*.js',
        'node_modules/bootstrap/dist/js/*.js'
    ]).pipe(gulp.dest(destPath));
});

var tsProject = ts.createProject('tsScripts/src/tsconfig.json', {
    typescript: require('typescript')
});

gulp.task('ts', function () {
    var tsResult = gulp.src([
        "tsScripts/**/*.ts"
    ])
        .pipe(tsProject());

    return tsResult.js.pipe(gulp.dest('./Scripts'));
});

gulp.task('watch', ['watch.ts']);
gulp.task('watch.ts', ['ts'], function () {
    return gulp.watch('tsScripts/**/*.ts', ['ts']);
});

gulp.task('default', ['scriptsNStyles', 'watch']);
