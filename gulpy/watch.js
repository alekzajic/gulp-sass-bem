// ~Watch Tasks
//
// 'gulp watch'
// - Watches sass, pug, js for changes and runs tasks.
//   Watches css, html for changes and runs tasks.
// -------------------------------------------------------------------

var browserSync   = require( 'browser-sync' );

// Tasks
module.exports = function( gulp, plugins ) {

	gulp.task( 'watch', function() {
		// gulp.watch( gulpy.path.sass + '**/*.+(scss|sass)', ['sass']);
		gulp.watch( gulpy.path.sass + '**/*.+(scss|sass)', [ 'sass', 'sass-lint' ]);
		//gulp.watch( gulpy.path.pug + '**/*.pug', [ 'pug' ]);
		gulp.watch( gulpy.path.js + '**/*.js', [ 'lint-js' ]).on('change', browserSync.reload);
		gulp.watch( gulpy.path.dev + '**/*.css' ).on('change', browserSync.reload);
		gulp.watch( gulpy.path.html + '**/*.html' ).on('change', browserSync.reload);
	});

	// Just worry about the sass
	gulp.task( 'watch-sass', function() {
		gulp.watch( gulpy.path.sass + '**/*.+(scss|sass)', [ 'sass' ]);
		gulp.watch( gulpy.path.dev + '**/*.css' ).on('change', browserSync.reload);
	});

} // module.exports
