const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const path = require("path");

/** @type {import('webpack').Configuration} */
const devConfig = {
  mode: "development",
  devServer: {
    port: 3000,
    static:{
      directory: path.join(__dirname, '../dist'),
    },
    compress: true, 
    hot: true,
    historyApiFallback: true,
  },
  devtool: "eval-source-map",
};

module.exports = merge(common, devConfig);