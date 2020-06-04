const path = require("path");

const express = require("express");
const app = express();

const distPath = path.join(__dirname, "..", "dist"); // This is the path to our bundled code in /dist folder
// go up one lvl then go into /dist folder (our production build)

app.use(express.static(distPath)); // serve up our /dist folder

app.get("*", (req, res) => {
     // to avoid getting / GET when you refresh the page
     res.sendFile(path.join(distPath, "index.html"));
});

app.listen(3000, () => {
     console.log("server is up! go to localhost:3000");
});
