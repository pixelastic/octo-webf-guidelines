module.exports = function(grunt) {
  // Autoload grunt-* tasks
  require('load-grunt-tasks')(grunt);
  // Autoload tasks defined in ./grunt_tasks
  grunt.loadTasks('grunt_tasks');

  var config = {
    pkg: grunt.file.readJSON('package.json'),
    env: process.env
  };

  function loadConfig(path) {
    var glob = require('glob');
    var object = {};
    var key;

    glob.sync('*', {
      cwd: path
    }).forEach(function(option) {
      key = option.replace(/\.js$/, '');
      object[key] = require(path + option);
    });

    return object;
  }

  // Init a generic config object with a merge of all task options defined in
  // ./grunt_tasks/options
  grunt.util._.extend(config, loadConfig('./grunt_tasks/options/'));
  grunt.initConfig(config);


  grunt.registerTask('default', 'build');
};
