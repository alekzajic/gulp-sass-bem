// ~Javascript Tasks
//
// Command:      gulp lint-js
// Description:  Lints js files using .jshintrc for config.
//
// 'gulp fixjs'
// - Automatically fixes and configures js files.
// -------------------------------------------------------------------


var browserSync   = require( 'browser-sync' );

// Tasks
module.exports = function( gulp, plugins ) {

	// JS Linter
	gulp.task( 'lint-js', function() {
		return gulp.src( [
			// './gulpfile.js',
			// './gulpy/**',
			'./src/js/**',
			'!./**/*_~*',
		] )
			.pipe( plugins.jshint() )
			.pipe( plugins.jshint.reporter( 'jshint-stylish-ex' ));
	});

	// FixmyJS
	gulp.task( 'fixjs', function() {
		return gulp.src( [
			// '*.js',
			// '!node_modules/**',
			'./src/js/test.js'
		] )
			.pipe( plugins.fixmyjs() )
	});

} // module.exports


// TODO: fix FixmyJS plugin.
// TODO: Change file paths to variables.
