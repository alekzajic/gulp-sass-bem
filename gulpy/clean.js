// ~Clean Task
//
// 'gulp clean-dist'
// - Deletes the dist/ directory
// -------------------------------------------------------------------


var browserSync   = require( 'browser-sync' );

// Tasks
module.exports = function( gulp, plugins, del ) {

	gulp.task( 'clean-dist', function() {
		return del.sync( gulpy.path.dist )
	});

} // module.exports
