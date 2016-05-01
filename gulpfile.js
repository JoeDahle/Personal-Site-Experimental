var gulp = require('gulp');
var pages = require('gulp-gh-pages');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');

gulp.task('deploy', function(){
  return gulp.src('./')
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

gulp.task('default', ['serve', 'sass'], function(){
  gulp.watch(['scss/*.scss'], ['sass']);
  gulp.watch(['index.html', 'js/*.js', 'styles/style.css'], browserSync.reload);
});
