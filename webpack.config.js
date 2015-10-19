
module.exports = {

  context: __dirname + '/app',
  entry: './app.jsx',
  output: {
    path: __dirname + '/dist',
    filename: 'main.js'
  },
  module: {
    loaders: [

    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel'
    }

    ]

  }

};
