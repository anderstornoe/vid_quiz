
var gulp = require('gulp'),
    connect = require('gulp-connect');


gulp.task('connect', function() {
    connect.server({
        root: "builds/development/",
        livereload: true
    });
});

gulp.task('default', ['connect']);
