const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'
console.log('Mode dev = ', isDev)
module.exports = {
  mode: process.env.NODE_ENV || 'production',
  devtool: false,
  output: {
    filename: `./js/[name]${!isDev && '.[contenthash:8]'}.js`,
    clean: true,
    assetModuleFilename: 'images/[name][ext][query]',
    sourceMapFilename: '[name].js.map',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ],
        
      },
      {
        test: /\.(jpg|png|svg|jpeg|gif)$/,
        type: 'asset/resource'
     }
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx'],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `./css/[name]${!isDev && '.[contenthash:8]'}.css`
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
      filename: 'index.html',
      inject: 'body',
      favicon: './src/assets/favicon.ico',
    }),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, './dist')
    },
    port: 4343,
    compress: true,
  },
}
