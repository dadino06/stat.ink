var gulp = require('gulp');
var uglify = require('gulp-uglify');
var $ = require('gulp-load-plugins')();

gulp.task('gh-fork', function() {
  gulp.src('resources/gh-fork-ribbon/gh-fork-ribbon.js')
    .pipe(uglify({
      preserveComments: 'some',
      output: {
        ascii_only: true,
      },
    }))
    .pipe($.gzip({gzipOptions:{level:9}}))
    .pipe(gulp.dest('resources/.compiled/gh-fork-ribbon'));
});

gulp.task('gh-fork-css', function() {
  gulp.src('resources/gh-fork-ribbon/gh-fork-ribbon.css')
    .pipe($.minifyCss({keepBreaks:true}))
    .pipe($.gzip({gzipOptions:{level:9}}))
    .pipe(gulp.dest('resources/.compiled/gh-fork-ribbon'));
});

gulp.task('flot-icon', function() {
  gulp.src('resources/flot-graph-icon/jquery.flot.icon.js')
    .pipe(uglify({
      preserveComments: 'some',
      output: {
        ascii_only: true,
      },
    }))
    .pipe($.gzip({gzipOptions:{level:9}}))
    .pipe(gulp.dest('resources/.compiled/flot-graph-icon'));
});

gulp.task('main-css', function() {
  gulp.src('resources/stat.ink/*.less')
    .pipe($.less())
    .pipe($.minifyCss({keepBreaks:true}))
    .pipe($.gzip({gzipOptions:{level:9}}))
    .pipe(gulp.dest('resources/.compiled/stat.ink'))
});

gulp.task('main-js', function() {
  gulp.src('resources/stat.ink/main.js/*.js')
    .pipe($.concat('main.js', {newLine:';'}))
    .pipe(uglify({
      preserveComments: 'some',
      output: {
        ascii_only: true,
      },
    }))
    .pipe($.gzip({gzipOptions:{level:9}}))
    .pipe(gulp.dest('resources/.compiled/stat.ink'));
});

gulp.task('activity', function() {
  gulp.src('resources/activity/activity.js')
    .pipe(uglify({
      preserveComments: 'some',
      output: {
        ascii_only: true,
      },
    }))
    .pipe($.gzip({gzipOptions:{level:9}}))
    .pipe(gulp.dest('resources/.compiled/activity'));
});

gulp.task('gear-calc', function() {
  gulp.src('resources/gears/calc.js')
    .pipe(uglify({
      preserveComments: 'some',
      output: {
        ascii_only: true,
      },
    }))
    .pipe($.gzip({gzipOptions:{level:9}}))
    .pipe(gulp.dest('resources/.compiled/gears'));
});

gulp.task('default', [
  'activity',
  'flot-icon',
  'gear-calc',
  'gh-fork',
  'gh-fork-css',
  'main-css',
  'main-js',
]);
