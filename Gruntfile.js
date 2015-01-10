module.exports = function(grunt) {

  //task configurations
  var config = {
    concat: {
      app: {
        dest: "generated/js/app.min.js",
        src: [
          "vendor/js/test.js",
          "js/main.js"
        ]
      }
    }
  }

  // initialize task config (above)
  grunt.initConfig(config);

  // load local tasks from the tasks folder
  grunt.loadTasks("tasks");

  // load node packages that are grunt plugins
  grunt.loadNpmTasks('grunt-contrib-concat');
  // Note for the reader: concatentation is an alternative to require.js or common.js
  // concatentation is for small to medium stuff...be pragmatic.

  // a default task (so you don't have to specify one at the CLI)
  grunt.registerTask('default', ['concat']);
};
