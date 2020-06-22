const path = require("path");
// Import webp+ack.common.js file
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); // will clean up the bundles in /dist
const TerserPlugin = require("terser-webpack-plugin"); // does not to be installed

const common = require("./webpack.common");
const merge = require("webpack-merge");
const webpack = require("webpack");

require("dotenv").config({ path: ".env.prod" }); // or path: path.resolve(__dirname, "../.env.prod")

module.exports = merge(common, {
     // and merge it so this file can inherit the config
     mode: "production",

     devtool: "source-map",
     // optimization: {
     //minimizer: [new TerserPlugin()], // unless there is something more to minimize in prod this line isnt needed
     //}, // because the TerserPlugin will run automaticly
     // also TerserPlugin has automatiucly source-map sent to false IF you put it in like just above
     plugins: [
          new CleanWebpackPlugin(), // deletes the /dist folder and recreates it with every prod.build
          new webpack.DefinePlugin({
               "process.env.FIREBASE_API_KEY": JSON.stringify(process.env.FIREBASE_API_KEY),
               "process.env.FIREBASE_AUTH_DOMAIN": JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
               "process.env.FIREBASE_DATABASE_URL": JSON.stringify(process.env.FIREBASE_DATABASE_URL),
               "process.env.FIREBASE_PROJECT_ID": JSON.stringify(process.env.FIREBASE_PROJECT_ID),
               "process.env.FIREBASE_STORAGE_BUCKET": JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
               "process.env.FIREBASE_MESSAGING_SENDER_ID": JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID),
               "process.env.FIREBASE_APP_ID": JSON.stringify(process.env.FIREBASE_APP_ID),
          }), // can maybe only have thi sin common but with a simple if.statement
     ],
});
