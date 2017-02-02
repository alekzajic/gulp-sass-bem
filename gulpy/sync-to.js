// ~Sync To Tasks
//
// 'gulp sync-up'
// - Sync local project files to live server.
//
// 'gulp sync-down'
// - Sync live server project to local files.
// -------------------------------------------------------------------


var browserSync   = require( 'browser-sync' );

// Tasks
module.exports = function( gulp, plugins, del ) {

	// Sends local files to live server
	gulp.task( 'sync-up', plugins.shell.task([
	  'open src/_rsc/#sync_local-to-serv-boundaryhunter.app'
	]));

	// Brings server files down from live server
	gulp.task( 'sync-down', plugins.shell.task([
	  'open src/_rsc/#sync_serv-to-local-boundaryhunter.app'
	]));

} // module.exports


// TODO: Update file paths to include variables.
