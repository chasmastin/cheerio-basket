'use strict';

const GulpUtils = require('./src/js/util/edison-gulp-utils.js');


GulpUtils.build(function(mix, config) {
	// https://laravel.com/docs/5.2/elixir
	//   - elixir.config.assetPath = "src"
	//   - elixir.config.publicPath = "www"
    mix
    	// start backstage
    	.browserify('ux-backstage.jsx')
    	.sass('ux-backstage.scss')
	    .copy('./src/images', './www/images')
		.styles([
				'bower_components/font-awesome/css/font-awesome.css',
			], './www/css/edison-build.css', './')
		.scripts([
				'bower_components/jquery/dist/jquery.js',
			], './www/js/edison-build.js', './')
		.copy(
			'bower_components/bootstrap/dist/fonts',
			'./www/fonts'
		)
		.copy(
			'bower_components/font-awesome/fonts',
			'./www/fonts'
		)
    	// end backstage

    	// start ux-backstage
    	.browserify('ux-personal.jsx', './ux-personal/www/js')
    	.sass('ux-personal.scss', './ux-personal/www/css')
	    .copy('./src/images', './ux-personal/www/images')
	    // end ux-backstage

		;
});
