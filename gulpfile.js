var gulp = require('gulp');
var electron = require('electron-connect').server.create();

var srcDir = 'src';
var outputDir = 'compiled';

var templateUrl = '**/*.html';
var jsUrl = '**/*.js';

String.prototype.appendPath = function (path) {
  return this + '/' + path;
};

String.prototype.appendPaths = function (paths) {
  return paths.map((path) => this.appendPath(path));
};

gulp.task('copy-template', function () {
  gulp.src(srcDir.appendPath(templateUrl))
    .pipe(gulp.dest(outputDir));
});

gulp.task('default', function() {
  electron.start();

  // Watch and Update Template Html files
  gulp.watch(srcDir.appendPath(templateUrl), ['copy-template']);

  // Update Electron on file Changes
  gulp.watch(outputDir.appendPath('main.js'), electron.restart);
  gulp.watch(outputDir.appendPaths([jsUrl, templateUrl]), electron.reload);
});
