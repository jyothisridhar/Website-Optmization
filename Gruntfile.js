module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		responsive_images: {
			dev: {
				options: {
					engine: 'im',
					sizes: [{
						width: 100,
						upscale: true,
						quality: 60
					}]
				},
				files: [{
					expand: true,
					src: ['**/*.{jpg,png}'],
					cwd: 'src/',
					dest: 'dist/'
				}]
			}
		},

		htmlmin: {
			dist: {
				options: {
					removeComments: true,
					collapseWhitespace: true
				},
				files: [{
					expand: true,
					cwd: 'src',
					src: '**/*.html',
					dest: 'dist/'
				}]
			}
		}
	});

	grunt.registerTask('default', ['responsive_images', 'htmlmin']);
};