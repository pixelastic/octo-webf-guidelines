module.exports = function(grunt) {
  grunt.registerTask('build', [
    'wiredep',         // Update all bower dependencies
    'useminPrepare',   // Generate concat and cssmin config
    'concat',          // Concatenate all css and js files into one file in .tmp
    'cssmin',          // Minify the css file
    'uglify',          // Minify the js file
    'copy',            // Copy all html files to ./dist
    'usemin'           // Replace references in ./dist/*.html to concatenated+minified files
  ]);
};
