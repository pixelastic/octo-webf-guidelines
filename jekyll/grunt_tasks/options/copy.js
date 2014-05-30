module.exports = {
  dist: {
    files: [{
      expand: true,
      dot: true,
      // cwd: '',
      dest: 'dist',
      src: [
        './_layouts/*',
        './_plugins/*',
        './_includes/*'
      ]
    }]
  }
};
