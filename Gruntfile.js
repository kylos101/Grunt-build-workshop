module.exports = function(grunt) {

  //task configurations
  var config = {
    concat: {
      app: {
        dest: "generated/js/app.min.js",
        src: [
          "vendor/js/test.js",
          "js/main.js",
          "js/config/**/*.js",
          "js/data/**/*.js",
          "js/services/**/*.js",
          "js/**/*.js"
        ]
      }
    },
    watch: {
      // notice how watch.app.files (below) self-references concat.app.src (above)
      // what this does: when a change occurs, it runs the concat task.
      app: {
        files: ["<%= concat.app.src %>"],
        tasks: ["concat"]
      }
    }
  }

  // initialize task config (above)
  grunt.initConfig(config);

  // load local tasks from the tasks folder
  grunt.loadTasks("tasks");

  // load node packages that are grunt plugins
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // Note for the reader: concatentation is an alternative to require.js or common.js
  // concatentation is for small to medium stuff...be pragmatic.

  // a default task (so you don't have to specify one at the CLI)
  grunt.registerTask('default', ['concat','watch']);

  //TODO: Unit tests, JS LINT, other.z
};
