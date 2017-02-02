// ~Concat Files
//
// 'gulp concat'
// - Minimizes and optimizes files.
// -------------------------------------------------------------------


var browserSync   = require( 'browser-sync' );

// Tasks
module.exports = function( gulp, plugins ) {

	gulp.task('concat', function() {
		// return gulp.src( gulpy.path.dev + '*.html')
		return gulp.src( './*.html')
			.pipe( plugins.useref()) // Checks html for build tags, then concats
			// .pipe( gulpIf('*.js', uglify())) // Minifies only js
			// .pipe( gulpIf('*.css', cssnano())) // Minifies only css
			// .pipe( size({ gzip: true, showFiles: true }))
			.pipe( gulp.dest( gulpy.path.dist ))
			.pipe( browserSync.reload({ stream:true }))
	});

} // module.exports

// Example:
//       -type-       -path-
// <!-- build:css css/combined.css -->
// .... Scripts go here.
// <!-- endbuild -->


// TODO: Make sure file paths/folder structures are setup properly
// TODO: Add optimizations for other file types
