'use strict';

const Gulp = require('gulp');
const Elixir = require('laravel-elixir');
const GulpGoogleWebfonts = require('gulp-google-webfonts');
const GulpConnect = require('gulp-connect');

Elixir.config.assetsPath = 'src';
Elixir.config.publicPath = 'www';

Elixir.config.js.browserify.transformers.push({
    name: 'reactify',
    options: {"es6": true}
});

Gulp.task('edison-gulp-utils-fonts', function () {
    return Gulp.src(__dirname + "/../fonts/fonts.list")
        .pipe(GulpGoogleWebfonts({
			cssFilename: 'edison-gulp-utils.css'
        }))
        .pipe(Gulp.dest(Elixir.config.publicPath+'/fonts'))
        ;
});

module.exports = {
	"configure" : function(callback) {
		return callback(Elixir, Gulp);
	},
	"build" : function(callback) {
		Elixir(function(mix) {
			mix
				.task('edison-gulp-utils-fonts')
				;
			callback(mix, Elixir.config);
		});
	}
};
