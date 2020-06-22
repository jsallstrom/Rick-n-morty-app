const path = require("path");
let HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
     entry: "./src/index.js",

     output: {
          filename: "bundle.[hash].js",
          path: path.resolve(__dirname, "dist"),
     },

     plugins: [
          // With Styled-Components It's highly recommended to also use the babel-plugin-styled-components.
          new HtmlWebpackPlugin({
               template: "./src/index.html",
          }),
     ],

     module: {
          rules: [
               // we use babel-loader to load our jsx and tsx files
               {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                         loader: "babel-loader",
                    },
               },
               {
                    // besides minimizing, this loader also by default makes every local image
                    // required (require('./image.png)) so the images are found correctly
                    // BUT it will need another loader like file-loader or svg-url-loader to work
                    test: /\.html$/,
                    use: [{ loader: "html-loader", options: { minimize: true } }],
               }, // which creates smaller files, this minimizer OR using the minimizer from the youtube videos???

               // css-loader to bundle all the css files into one file and style-loader to add all the styles  inside the style tag of the document
               {
                    test: /\.s?css$/,
                    use: ["style-loader", "css-loader", "sass-loader"],
               },
               {
                    test: /\.(svg|png|jpg|gif)$/,
                    use: [
                         // question is if I should use url-loader FIRST here to get some inline img to save space???
                         // yes I got it to work, now the smaller picture gets loaded as url-string
                         // and the bigger pictures be optimized
                         // HOWEVER the SVG-files and the small files will not be optimized before going in
                         // If minimizing ALL pictures is important then JUST using the file loader down below is sufficent
                         // the bundle.js file is 1 KiB bigger, but that probably doesnt mean anything...
                         {
                              loader: "url-loader",
                              options: {
                                   limit: 1000,
                                   fallback: "file-loader",

                                   // Below are the fallback options
                                   name: "[name].[hash].[ext]",
                                   outputPath: "imgs",
                              },
                         },
                         /*{
                              loader: "file-loader",
                              options: {
                                   // we use this different syntax so we can describe how name should be
                                   name: "[name].[hash].[ext]",
                                   outputPath: "imgs",
                              },
                         },*/
                         {
                              // This need sto be after the file-loader, else it wont minimize
                              loader: "image-webpack-loader", // more options for quality on its github site
                              options: {},
                         },
                    ],
               },
          ],
     },
};
