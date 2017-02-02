// ~Sass Tasks
//
// 'gulp sass'
// - Compile, add sourcemaps, autoprefix, output to css.
// -------------------------------------------------------------------
var browserSync   = require( 'browser-sync' );


// Tasks
module.exports = function( gulp, plugins ) {

	gulp.task( 'sass', function() {
		return gulp.src( gulpy.path.sass + 'main.+(scss|sass)' )
			.pipe( plugins.sass( gulpy.sassOpts ))
			.pipe( plugins.autoprefixer( gulpy.prefixOpts ))
			.pipe( gulp.dest( gulpy.path.css ))
			.pipe( browserSync.reload({
				stream: true,
				once: true
			}))
	});


	gulp.task('sass-lint', function() {
	gulp.src( [
		gulpy.path.sass + '**/*.+(scss|sass)',
		// '!' + gulpy.path.sass + '02-vendors/**/*.+(scss|sass)',
		] )
		.pipe( plugins.sassLint())
		.pipe( plugins.sassLint.format())
		.pipe( plugins.sassLint.failOnError());
});


} // module.exports
