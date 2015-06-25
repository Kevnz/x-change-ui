var path = require('path');

module.exports = {
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel'}
    ],
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'source-map-loader'
      }
    ]
  },
  entry: path.resolve(__dirname, 'app/main.js'),

  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: 'bundle.js',
    sourceMapFilename: 'bundle.map'
  },
  devtool: "#source-map"
};