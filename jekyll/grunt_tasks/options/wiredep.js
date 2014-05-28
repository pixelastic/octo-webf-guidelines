module.exports = {
  target: {
    src: [
      '_layouts/default.html'
    ],
    cwd: '',
    targetDir: './libs',
    dependencies: true,
    devDependencies: false,
    exclude: [],
    fileTypes: {
      html: {
        replace: {
          css: function(filepath) {
            filepath = filepath.split('/').slice(2).join('/');
            return '<link rel="stylesheet" href="'+filepath+'">';
          },
          js: function(filepath) {
            filepath = filepath.split('/').slice(2).join('/');
            return '<script src="'+filepath+'"></script>';
          }
        }
      }
    },
    ignorePath: '',
    overrides: {}
  }
};
