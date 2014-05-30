module.exports = {
  dist: {
    files: [{
      expand: true,
      cwd: './app',
      dest: 'dist',
      src: [
        './*.html*',
        './*.ico'
      ]
    }, {
      expand: true,
      // dot: true,
      // cwd: '',
      dest: 'dist',
      src: [
        './_layouts/*'
      ]
    }]
  }
};
