module.exports = function(grunt) {

  grunt.initConfig({
    karma: {
	  unit: {
		options: {
		  files: ['test/**/*.js']
		}
	  }
	}
  });

  grunt.loadNpmTasks('grunt-karma');

  grunt.registerTask('default', ['jshint']);

};