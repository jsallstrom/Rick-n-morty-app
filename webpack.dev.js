const path = require("path");

// Import webp+ack.common.js file
const common = require("./webpack.common");
const merge = require("webpack-merge");
const webpack = require("webpack");

require("dotenv").config({ path: ".env.dev" }); // or path: path.resolve(__dirname, "../.env.dev")
// now all values in .env.dev is in
// process.env.

module.exports = merge(common, {
     mode: "development",

     devtool: "cheap-module-eval-source-map", // Enabling Source Maps in Browsers
     devServer: {
          contentBase: path.join(__dirname, "dist"),
          historyApiFallback: true, // else you get / GET stuff
     },

     // You can access the source maps by pressing the arrow pointing to the right in the error
     // then it will go down and reveal where and how the error is made in the source-mapped code

     //f you are using webpack 4 and the new mode option
     //, the tool will generate source maps automatically for you in development mode, (might wanna check this...)
     plugins: [
          new webpack.DefinePlugin({
               "process.env.FIREBASE_API_KEY": JSON.stringify(process.env.FIREBASE_API_KEY),
               "process.env.FIREBASE_AUTH_DOMAIN": JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
               "process.env.FIREBASE_DATABASE_URL": JSON.stringify(process.env.FIREBASE_DATABASE_URL),
               "process.env.FIREBASE_PROJECT_ID": JSON.stringify(process.env.FIREBASE_PROJECT_ID),
               "process.env.FIREBASE_STORAGE_BUCKET": JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
               "process.env.FIREBASE_MESSAGING_SENDER_ID": JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID),
               "process.env.FIREBASE_APP_ID": JSON.stringify(process.env.FIREBASE_APP_ID),
          }),
     ],
});
