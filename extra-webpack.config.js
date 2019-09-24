const path = require('path');
const {Externals} = require('share-loader');

module.exports = {
  externals: [
    Externals({
      namespace: 'container-app',
      modules: [/@angular/]
    })
  ],
  output: {
    filename: '[name].js',
    path: path.resolve('../public'),
    chunkFilename: '[name].js',
    library: 'extapp',
    libraryTarget: 'umd'
  },
  optimization: {
    runtimeChunk: false,
  }

}
