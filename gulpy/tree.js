// -------------------------------------------------------------------
// ~Tree
//
// 'tree'
// - Outputs directory tree in terminal.
// - See bottom for instructions
// -------------------------------------------------------------------


// var browserSync   = require( 'browser-sync' );

// Tasks
module.exports = function( gulp, plugins ) {

	// // All the tasks go here.

	gulp.task( 'tree', plugins.shell.task([
	  'tree -a -I "node_modules|.git|.DS_Store|prvt|.todo-luscious.md|cache|*.css.map"'
	]));

} // module.exports


// -------------------------------------
// Using Brew Tree
//
// This is a terminal command that is run via gulp
//
// Required: Homebrew and Brew Tree need to be installed
//
// Homebrew:
	// ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
//
// Brew Tree:
	// brew install tree
//
// Helpful Info:
	// http://tinyurl.com/jp53uj2
	// http://tinyurl.com/zcv3zds
//
// Ignored Files:
	// node_modules
	// .git
	// .DS_Store
	// prvt
	// .todo-luscious.md
	// cache
	// *.css.map
