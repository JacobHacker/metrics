module.exports = function(grunt) {
	grunt.initConfig({
		watch: {
			scripts: {
				files: ['web/**'],
			},
			options: {
				livereload: true
			},
		},
		connect: {
			server: {
				options: {
					port: 9001,
					base: 'web'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');

	grunt.registerTask('default', ['connect', 'watch']);
};
