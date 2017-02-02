// ~Sitecake Tasks
//
// Command:      gulp clean-sc
// Description:  Deletes 'sitecake-temp' folder for re-loading sc admin.
//
// 'gulp remove-sitecake'
// - Removes all sitecake files and folders from project.
// -------------------------------------------------------------------


var browserSync   = require( 'browser-sync' );

// Tasks
module.exports = function( gulp, plugins, del ) {

	// Remove Temp File for testing sitecake
	gulp.task( 'clean-sc', function() {
		return del.sync( 'sitecake-temp' )
	});

	// Remove all Sitecake Files
	gulp.task( 'remove-sitecake', function() {
		del.sync( 'sitecake-temp' )
		del.sync( 'sitecake-backup' )
		del.sync( 'sitecake.php' )
		del.sync( 'sitecake' )
	});

} // module.exports
