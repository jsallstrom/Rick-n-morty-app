const path = require("path");
// Import webp+ack.common.js file
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); // will clean up the bundles in /dist
const TerserPlugin = require("terser-webpack-plugin"); // does not to be installed

const common = require("./webpack.common");
const merge = require("webpack-merge");

// and merge it so this file can inherit the config

module.exports = merge(common, {
     mode: "production",
     output: {
          filename: "bundle.[contentHash].js",
          path: path.resolve(__dirname, "dist"),
     },
     devtool: "source-map",
     // optimization: {
     //minimizer: [new TerserPlugin()], // unless there is something more to minimize in prod this line isnt needed
     //}, // because the TerserPlugin will run automaticly
     // also TerserPlugin has automatiucly source-map sent to false IF you put it in like just above
     plugins: [new CleanWebpackPlugin()], // deletes the /dist folder and recreates it with every prod.build
});
