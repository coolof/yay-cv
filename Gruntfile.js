module.exports = function(grunt) {

  // 1. All configuration goes here
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    less: {
      development: {
        options: {
          compress: false,
          yuicompress: true,
          optimization: 2
        },
        files: {
          "styles.css": "styles.less"
        }
      }
    },
    watch: {
      styles: {
        files: [
          '*.less'
        ], // which files to watch
        tasks: ['less'],
        options: {
          spawn: false
        }
      }
    }
  });

  // 3. Where we tell Grunt we plan to use this plug-in.
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
  grunt.registerTask('default', ['less', 'build', 'watch']);

};
