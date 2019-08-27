const path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    'react-hot-loader/patch',
    path.join(__dirname, 'src/index.js')],
  output: {
      path: path.join(__dirname, './dist'),
      filename: 'bundle.js'
  },
  module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'stage-0', 'react']
            }
          },
          include: path.join(__dirname, 'src')
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          loader: 'url-loader',
          options: {
            limit: 8192
          }
        }
      ]
  },
  devServer: {
      contentBase: path.join(__dirname, './dist')
  }
};
