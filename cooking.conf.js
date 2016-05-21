var cooking = require('cooking');

cooking.set({
  entry: {
    index: './src/index.js',
    demo: './demo/app.js'
  },
  dist: './dist',
  template: {
    'index.html': {
      template: 'demo/index.tpl',
      chunks: ['demo']
    }
  },
  // development
  devServer: true,

  // production
  clean: true,

  extends: []
});

module.exports = cooking.resolve();
