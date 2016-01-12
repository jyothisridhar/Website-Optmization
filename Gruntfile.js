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
					src: ['*.{jpg,png}'],
					cwd: 'src/views/images',
					dest: 'dist/views/images'
				}]
			}
		},
		imagemin: {
			dist: {
				options: {
					optimizationLevel: 5,
					progressive: true	
				},
        		files: [{
          			expand: true,
          			cwd: 'src/img',
          			src: ['img/*.{jpg,png}'],
          			dest: 'dist/img',
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

	grunt.registerTask('default', ['imagemin', 'responsive_images', 'htmlmin']);
};