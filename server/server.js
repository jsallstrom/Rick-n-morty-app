const path = require("path");
// in package.json we had to change the "start"-script to run "node server/server.js"
// because Heroku needs it
//  also something Heroku needs is this:
// "heroku-postbuild": "npm run build", so Heroku will create the app when it is in teh git

const express = require("express");
const app = express();

const distPath = path.join(__dirname, "..", "dist"); // This is the path to our bundled code in /dist folder
// go up one lvl then go into /dist folder (our production build)

const port = process.env.PORT || 3000; // IF this exist we will use the Port number
// Heroku gives us, else we will default to opur own

app.use(express.static(distPath)); // serve up our /dist folder

app.get("*", (req, res) => {
     // to avoid getting / GET when you refresh the page
     res.sendFile(path.join(distPath, "index.html"));
});

app.listen(port, () => {
     console.log("server is up! go to localhost:3000");
});
