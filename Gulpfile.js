var gulp = require('gulp'),
  source = require('vinyl-source-stream'),
  browserify = require('browserify');

gulp.task('scripts', function () {

  var bundler = browserify({
    entries: ['app/main.js'],
    debug: true,
    transform: ['reactify']
  });

  bundler.bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('./public/'));

});

gulp.task('default', ['scripts']);
