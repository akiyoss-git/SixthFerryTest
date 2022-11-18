const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    main: path.resolve(__dirname, "./src/index.tsx"),
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].bundle.js",
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "./dist"),
    },
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".css"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Sixth Ferry Test @akiyoss_git",
      template: path.resolve(__dirname, "./src/template.html"),
      filename: "index.html",
    }),
  ],
};