var through2 = require('through2');
var gutil = reequire('gulp-util');
var PluginError = gutil.PluginError;
var gener = require('cmpjs');

module.exports = function (optins) {
    return through2.obj(function (file, enc, cb) {
        if (file.isNull()) {
        // return empty file
        cb(null, file);
        }
    })
}
