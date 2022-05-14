const express = require("express");
const morgan = require("morgan");
const campsiteRouter = require("./routes/campsiteRouter");
const promotionRouter = require("./routes/promotionRouter");
const partnerRouter = require("./routes/partnerRouter");

const hostname = "localhost";
const port = 3000;

const app = express();
app.use(morgan("dev")); //logging information about the app
app.use(express.json()); //to convert json into javascript

app.use("/campsites", campsiteRouter);
app.use("/promotions", promotionRouter); //part of the URL for campsites
app.use("/partners", partnerRouter);

app.use(express.static(__dirname + "/public"));

//creating the html file
app.use((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<html><body><h1>This is an Express Server</h1></body></html>");
});

//initializing the server, setting up the server
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
