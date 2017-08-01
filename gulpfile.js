var gulp = require('gulp');
var tinify = require('tinify');
var fs = require('fs');

tinify.key = 'fad3NFNTvFHBio8CbmJeeO2rv3dQGxgD';

gulp.task('tiny', function () {
    var images = 'images';
    var fileSplit;
    var source;

    fs.readdirSync(images).forEach(file => {
        fileSplit = file.split('.');
        source = tinify.fromFile(images + '/' + file);
        source.toFile(images + '/' + fileSplit[0] + '-optimized.' + fileSplit[1]);
    });
});

gulp.task('default', [ 'tiny' ]);
