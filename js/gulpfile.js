var gulp =require('gulp');
var browserify =require('browserify');
var source =require('vinyl-source-stream');
var concat=require('gulp-concat');
var uglify=require('gulp-uglify');
var utilities=require('gulp-util');
var del=require('del');
var jshint=require('gulp-jshint');
var buildProduction=utilities.env.production;
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

var lib = require('bower-files')({
  "overrides":{
    "bootstrap" : {
      "main": [
        "less/bootstrap.less",
        "dist/css/bootstrap.css",
        "dist/js/bootstrap.js"
      ]
    }
  }
});


gulp.task('jsBrowserify',function(){
  return browserify({entries:['./js/*.js']})
  .bundle()
  .pipe(source('app.js'))
  .pipe(gulp.dest('./build/js'));
});
gulp.task('jsBrowserify',['concatInterface'],function(){
  return browserify({entries:['./tmp/allConcat.js']})
})
