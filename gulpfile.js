var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require("vinyl-source-stream");

gulp.task('build', () => {
  return browserify('./src/lib/DataProvider.js', { debug: true })
    .transform(babelify)
    .bundle()
    .on("error", function (err) { console.log("Error : " + err.message); })
    .pipe(source("app.js"))
    .pipe(gulp.dest('./dist/'))
});