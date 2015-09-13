// Plugin for Pulling the stylesheet files to a separate file.
var ExtractTextPlugin = require('extract-text-webpack-plugin');

// Adding hot deployment based on the environment.
function getEntrySources(sources) {
  if (process.env.NODE_ENV !== 'production') {
    sources.push('webpack-dev-server/client?http://localhost:8080');
  }
  return sources;
}

module.exports = {
  context: __dirname + "/app",
  // multiple entry points.
  entry: {
    page1:[
      'webpack-dev-server/client?http://localhost:8080',
      "./page1/app.js"
    ]
  },
  output: {
    path: __dirname + "/dist",
    filename: "[name].app.js"
  },
  module: {
    loaders: [
      // JSX and ES6 transpilers.
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["react-hot", "babel-loader"],
      },
      // Sass preprocessor
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      // Seperating out stylesheets to a new file.
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass')
      }],
    },
    // Plugin for extracting stylesheets.
    plugins: [
      new ExtractTextPlugin('public/style.css', {
        allChunks: true
      })
    ]
  }
