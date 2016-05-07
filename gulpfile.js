var gulp = require('gulp');
var pages = require('gulp-gh-pages');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var responsive = require('gulp-responsive-images');

gulp.task('deploy', function(){
  return gulp.src('./**/*')
    .pipe(pages());
});

gulp.task('serve', function(){
  browserSync.init({
    server: './',
    port: 3030
  })
});

gulp.task('sass', function(){
  return gulp.src('scss/style.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('styles'));
});

gulp.task('image', function(){
  gulp.src('assetPool/**/*')
    .pipe(responsive({
      'background.jpg': [{
        width: 2000,
        suffix: '-2000'
      },
      {
        width: 1000,
        suffix: '-1000'
      },
      {
        width: 500,
        suffix: '-500'
      }]
    }))
    .pipe(gulp.dest('assets/'));
});

gulp.task('default', ['serve', 'sass'], function(){
  gulp.watch(['scss/*.scss'], ['sass']);
  gulp.watch(['index.html', 'js/*.js', 'styles/style.css'], browserSync.reload);
});
