const path = require('path')

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        public: path.resolve(__dirname, 'public'),
        src: path.resolve(__dirname, 'src'),
        service: path.resolve(__dirname, 'src/service'),
        utils: path.resolve(__dirname, 'src/utils'),
      },
    },
  },
}
