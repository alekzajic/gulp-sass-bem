// ~Todo Printer
//
// 'gulp todo'
// - Searches through files and prints out any comments with 'TODO'
//   File can be exported as most filetypes. Default is .md
// -------------------------------------------------------------------


var browserSync   = require( 'browser-sync' );

// Tasks
module.exports = function( gulp, plugins ) {

	gulp.task( 'todo', function() {
		gulp.src( gulpy.todoSearch )
			.pipe( plugins.todo( gulpy.todoOpts ) )
			.pipe( gulp.dest( gulpy.path.root ))
	});

} // module.exports


// -------------------------------------------------------------------
// Reference: https://www.npmjs.com/package/gulp-todo


// Common Tags used other than 'todo' and 'fixme'.
	// 'HOTFIX',
	// 'rEVIEW',                // Actual use is in all caps.
	// 'TO-LUS',                // Things to add or fix in Luscious
	// 'TO-GULPY',              // Things to add or fix in Gulpy
	// 'YISRAEL',               // Something for Yisrael to look at
	// 'TO-SASSDOC',            // Specific tag for sassdoc related things
	// 'TO-DEPRECATE',          // Things to deprecate in the next main release.
	// 'TO-UPDATE',          // Things to add/update in the next main release.


// To export as json or xml instead of md, add this to
// the todoOpts in gulpfile.js:
// To return a json file instead of md. Can also be 'xml'
// .pipe( plugins.todo.reporter( 'json', {
// 	fileName: '_TODO-sass.json'
// }))
