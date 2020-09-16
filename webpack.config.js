//package of node.js - allows us to constract an absolute path
const path = require("path");
const autoprefixer = require("autoprefixer");

module.export = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "",
  },
  devtool: "cheap-module-eval-source-map",
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
                loadlIdentName: "[name]__[local]__[hash:base64:5]",
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
    ],
  },
};
