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

	// JS Compile
	gulp.task( 'js', function() {
		return gulp.src( [
			// './gulpfile.js',
			// './gulpy/**',
			'./src/js/**/*.js',
			'!./**/*_~*',
      '!' + gulpy.path.js + 'vendor/**/*_~*',
		] )
    .pipe( plugins.plumber())
    .pipe( plugins.changed(gulpy.path.dist_js))
    .pipe( plugins.jshint() )
    .pipe( plugins.jshint.reporter( 'jshint-stylish-ex' ))
    .pipe( plugins.uglify())
    .pipe( plugins.concat('custom.min.js'))
    .pipe( plugins.sourcemaps.init())
    .pipe( plugins.sourcemaps.write(gulpy.path.js_maps))
    .pipe( gulp.dest(gulpy.path.dist_js));
	});

	// FixmyJS
	gulp.task( 'fixjs', function() {
		return gulp.src( [
			// '*.js',
			// '!node_modules/**',
			'./src/js/**/*.js'
		] )
			.pipe( plugins.fixmyjs() )
	});

} // module.exports


// TODO: fix FixmyJS plugin.
// TODO: Change file paths to variables.
