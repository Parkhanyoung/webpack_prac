const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: {
    index: "./source/index.js",
    about: "./source/about.js"
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name].bundle.js"
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader", // 가져온 css 코드를 웹페이지 안의 style tag로 주입해줌
          "css-loader", // css 파일을 읽어와서 웹팩으로 가져옴
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './source/index.html',
      filename: './index.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './source/about.html',
      filename: './about.html',
      chunks: ['about']
    })
  ]
}