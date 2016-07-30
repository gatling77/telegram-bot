var gulp = require('gulp');
var lambda = require('gulp-awslambda');
var zip    = require('gulp-zip');

gulp.task('default', function() {
  // place code for your default task here
});


gulp.task('upload', function() {
    return gulp.src(['dest/src/**/*'])
        .pipe(zip('telegram-bot.zip'))
        .pipe(lambda("GatlingBot", {"region":"eu-central-1"}))
        .pipe(gulp.dest('.'));
});