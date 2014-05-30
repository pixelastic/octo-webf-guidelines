module.exports = function(grunt) {
  grunt.registerTask('build', [
    'useminPrepare',
    'concat',
    'cssmin',
    'usemin'
  ]);
};
