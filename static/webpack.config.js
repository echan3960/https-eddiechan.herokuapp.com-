const config = {
  entry: [
    'webpack/hot/only-dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    './src/js/index.jsx'
  ],
  output: {
    filename: 'dist/bundle.js',
  },
  devServer: {
    historyApiFallback: true,
  },
  resolve: {
    extensions: [".js", ".jsx", ".css"]
  },
  module: {
    rules: [
      { test: /\.jsx?/, exclude: /node_modules/, use: 'babel-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader', 'postcss-loader']},
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']},
      { test: /\.(png|svg|jpg|gif)$/, use: 'file-loader' }
    ]
  },
};

module.exports = config;
