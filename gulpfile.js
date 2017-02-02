// ~Gulpy
// Version: 1.1.3
// -------------------------------------------------------------------

// ~Tasks
//
// See 'readme.md' for Gulp tasks

// -------------------------------------------------------------------

// ~Options & Variables

// Local Base Paths (used in global vars)
var base = {
	dist:      './dist/',                // Production folder
	src:       './src/',                 // Dev folder
	sass:       './src/sass/',           // Sass folder
	js:        './src/js/',              // JS folder
};


// Global Vars (used in gulpy files)
global.gulpy = {

	// Global Paths
	path: {
		root:  './',                 // Project root folder
		serv:  './',                 // Static sites for browser-sync
		// serv:  'yourlocal.dev',   // For dynamic server
		tasks: './gulpy/',           // Gulp tasks
		dist:  base.dist,            // Distribution output folder
		dev:   base.src,             // Dev directory
		sass:  base.sass,            // Contains all the sass
		js:    base.js,              // Raw js for dev
		css:   base.src + 'css/',    // Compiled from Sass files
		pug:   base.src + 'pug/',    // Precompiled for dev
	},
	// -------------------------------------

	// Sass Options
	sassOpts: {
		errLogToConsole: true,
		outputStyle: 'expanded',
		sourceComments: 'false',
		indentType: 'tab',
		indentWidth: '1'
		// precision: '10'
	},
	// -------------------------------------

	// Autoprefixer Options
	prefixOpts: {
		// browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
		browsers: ['last 2 versions', 'ie >= 9', 'and_chr >= 2.3'] // Zurb Suggested
	},
	// -------------------------------------

	// Todo Options
	todoSearch: [    // Controls what files are searched
		'./**/*.sass',
		'./**/*.scss',
		'./src/**/*.js',
		'!node_modules/**'
		// './**/*.md',
		// './**/*.pug',
		// '!_*',
	],
	todoOpts: {
		fileName: '_TODO.md',  // Controls filename
		// absolute: 'true'.        // Prints absolute file path
		customTags: [               // Tags used other than 'todo' and 'fixme'.
			'HOTFIX',
			'REVIEW',
		],
		transformHeader: function (kind) {   // Header output in todo file.
			return ['### ' + kind,
				'| Filename | line # | ' + kind,
				'|:------|:------:|:------'
			];
		} } // end todoOpts
}; // End Global Variables


// -------------------------------------------------------------------

// ~Imports
var gulp          = require( 'gulp' ),
		runSequence   = require( 'run-sequence' ),
		del           = require( 'del' ),
		requireDir    = require( 'require-dir' )( './gulpy' ), // Modularize Gulp
		browserSync   = require( 'browser-sync' ),
		plugins       = require( 'gulp-load-plugins' )({
			pattern: [ 'gulp-*', 'gulp.*' ],
			replaceString: /\bgulp[\-.]/
		});

// -------------------------------------------------------------------

// ~Import Task Files

// Sitecake Tasks
require( gulpy.path.tasks + 'sitecake' )( gulp, plugins, del );

// tODO Printer
require( gulpy.path.tasks + 'todo' )( gulp, plugins );

// Sync-to
require( gulpy.path.tasks + 'sync-to' )( gulp, plugins );

// Browswer Sync
require( gulpy.path.tasks + 'browsersync' )( gulp, plugins );

// ~Watch Tasks
require( gulpy.path.tasks + 'watch' )( gulp, plugins );

// Pug Tasks
require( gulpy.path.tasks + 'pug' )( gulp, plugins );

// Sass Tasks
require( gulpy.path.tasks + 'sass' )( gulp, plugins );

// Javascript Tasks
require( gulpy.path.tasks + 'scripts' )( gulp, plugins );

// Concat Files
require( gulpy.path.tasks + 'concat' )( gulp, plugins );

// Clean Task
require( gulpy.path.tasks + 'clean' )( gulp, plugins );

// Homebrew Tree
require( gulpy.path.tasks + 'tree' )( gulp, plugins );


// -------------------------------------------------------------------

// ~Workflows

// ~Boom                (Just for fun. Plays an audio file on success)
gulp.task( 'boom', plugins.shell.task([
  'afplay ./src/_rsc/boom.m4a'
]));


// ~Gulp Temp
gulp.task( 'default', function(done) {
	runSequence( 'server', 'watch-sass', done );
});