module.exports = function( grunt ) {

	grunt.initConfig({

		pkg: grunt.file.readJSON( "package.json" ),

		meta: {
			banner: "/*! <%= pkg.name %> v<%= pkg.version %> (<%= pkg.homepage %>)\n" +
					"** Copyright (c) 2014 - <%= grunt.template.today( \"yyyy\" ) %> <%= pkg.author.name %>\n" +
					"** Dual licensed under MIT and GPL-2.0\n*/",
		},

		concat: {
			options: {
				stripBanners: true,
				banner: "<%= meta.banner %>\n"
			},
			dist: {
				src: [ "src/simple-sidebar.js" ],
				dest: "dist/jquery.<%= pkg.name %>.js"
			}
		},

		jshint: {
			files: [ "src/simple-sidebar.js" ],
			options: {
				jshintrc: true
			}
		},

		uglify: {
			dist: {
				src: "<%= concat.dist.dest %>",
				dest: "dist/jquery.<%= pkg.name %>.min.js"
			},
			options: {
				banner: "<%= meta.banner %>\n"
			}
		},

		watch: {
			files: [ "src/simple-sidebar.js" ],
			tasks: [ "jshint", "concat", "uglify" ]
		}
	});

	grunt.loadNpmTasks( "grunt-contrib-concat" );
	grunt.loadNpmTasks( "grunt-contrib-jshint" );
	grunt.loadNpmTasks( "grunt-contrib-uglify" );
	grunt.loadNpmTasks( "grunt-contrib-watch" );

	grunt.registerTask("default", [ "jshint", "concat", "uglify" ] );

};
