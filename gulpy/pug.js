// ~Pug Tasks
//
// 'gulp pug'
// - Compiles .pug into html and moves to html folder.
// -------------------------------------------------------------------
// TODO: Need to add Linter


var browserSync   = require( 'browser-sync' );

// Tasks
module.exports = function( gulp, plugins ) {

	gulp.task( 'pug', function buildHTML() {

		// All .pug (skips 'index' and partials)
		gulp.src( gulpy.path.pug + 'pages/**/*.pug' )
			.pipe( plugins.pug( {
				pretty: ' ',
				// data: { "css": './src/css/main.css' }
			}))
			.pipe( plugins.rename({ dirname: 'html' }))
			.pipe( gulp.dest( gulpy.path.dev ))
			.pipe( browserSync.reload( { stream: true } ))

		gulp.src( [
			gulpy.path.pug + 'index.pug',
			gulpy.path.pug + '404.pug',
		] )
			.pipe( plugins.pug( {
				pretty: ' ',
				// data: { "css": './src/css/main.css' }
			}))
			.pipe( gulp.dest( gulpy.path.serv )) // html Output to serv
			.pipe( browserSync.reload({ stream: true }))

	});
} // module.exports


// Gets all the files in the pug/ folder except files starting with "_" or the index.pug, or the 404.pug.
// gulp.src( [
// 	gulpy.path.pug + '**/*.pug',
// 	'!' + gulpy.path.pug + '**/*(_*|index|404).pug',
// ])
