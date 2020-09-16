//package of node.js - allows us to constract an absolute path
const path = require("path");

module.export = {
  mode: "development"
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "",
  },
  devtool: "cheap-module-eval-source-map",
};
