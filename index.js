/**
 * Created by a on 14-7-21.
 */
'use strict';
var gutil = require('gulp-util');
var through = require('through2');
var cheerio = require('cheerio');



// Consts
var PLUGIN_NAME = 'gulp-preprocess';

module.exports = function (fn) {

	return through.obj(function (file, enc, cb) {
		if (file.isNull()) {
			this.push(file);
			return cb();
		}

		if (file.isStream()) {
			this.emit('error', new gutil.PluginError(PLUGIN_NAME, 'Streaming not supported'));
			return cb();
		}

		//处理区块 start
		var html=file.contents.toString();
		var $ = cheerio.load(html);
		fn.call(this,$);
		var content = $.html();
		// end !
		file.contents = new Buffer(content);
		this.push(file);

		cb();
	});
};