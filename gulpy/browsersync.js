// ~Browser Sync
//
// 'gulp server'
// - Creates local server and refreshes browser
// -------------------------------------------------------------------


var browserSync   = require( 'browser-sync' );

// Tasks
module.exports = function( gulp, plugins ) {

	gulp.task( 'server', function() {
		browserSync.init({
			server: {
				baseDir: gulpy.path.serv
				// proxy: "yourlocal.dev"
			}
		});
	});

} // module.exports
