const path = require("path");

// Import webp+ack.common.js file
const common = require("./webpack.common");
const merge = require("webpack-merge");

// and merge it so this file can inherit the config

module.exports = merge(common, {
     mode: "development",
     output: {
          filename: "bundle.js",
          path: path.resolve(__dirname, "dist"),
     }, //f you are using webpack 4 and the new mode option
     //, the tool will generate source maps automatically for you in development mode
     devtool: "cheap-eval-source-map",
     devServer: {
          // in case you refresh the page you need this
          contentBase: path.join(__dirname, "dist"),
          historyApiFallback: true, // else you get / GET stuff
     },
});
