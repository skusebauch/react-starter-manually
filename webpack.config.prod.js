//package of node.js - allows us to constract an absolute path
const path = require("path");
const autoprefixer = require("autoprefixer");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "",
  },
  devtool: "none",
  module: {
    rules: [
      {
        // setup js files - all files -> babel
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        // setup css files - all files -> style, and css loader
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              // enable css models
              modules: {
                // name of classes
                localIdentName: "[name]__[local]__[hash:base64:5]",
              },
            },
          },
          // auto prefix
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: () => [autoprefixer()],
              // additional add browserslist to package.json
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        // setup images
        test: /\.(png|jpe?g|gif)$/,
        // inline options with ? -after ? specify options
        loader: "url-loader?limit=8000&name=images/[name].[ext]",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/src/index.html",
      filename: "index.html",
      inject: "body",
    }),
  ],
};
