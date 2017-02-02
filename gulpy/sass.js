// ~Sass Tasks
//
// 'gulp sass'
// - Compile, add sourcemaps, autoprefix, output to css.
// -------------------------------------------------------------------
var browserSync   = require( 'browser-sync' );
//var cleanCSS      = require('gulp-clean-css');


// Tasks
module.exports = function( gulp, plugins ) {

	gulp.task( 'sass', function() {
    return gulp.src( [
        gulpy.path.sass + '**/*.+(scss|sass)',
        '!./src/sass/base/_typographic.scss',
      ])
      .pipe( plugins.plumber())
      .pipe( plugins.changed(gulpy.path.css))
      .pipe( plugins.sourcemaps.init())
      .pipe( plugins.sass( gulpy.sassOpts ))
      .pipe( plugins.autoprefixer( gulpy.prefixOpts ))
      // .pipe( cleanCSS({compatibility: 'ie8'}))
      .pipe( plugins.sourcemaps.write(gulpy.path.sass_maps))
      .pipe( gulp.dest( gulpy.path.css ))
      .pipe( browserSync.reload({
        stream: true,
        once: true
      }))
	});


	gulp.task('sass-lint', function() {
	gulp.src( [
		gulpy.path.sass + '**/*.+(scss|sass)',
		'!' + gulpy.path.sass + 'vendors/**/*.+(scss|sass)',
		] )
		.pipe( plugins.sassLint())
		.pipe( plugins.sassLint.format())
		.pipe( plugins.sassLint.failOnError());
});


} // module.exports
