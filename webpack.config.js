module.exports = {
  mode: "development",
  devtool: false,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      }
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx'],
  },
}
