//jshint esversion:6

const express = require("express");
const app = express();

app.get("/", function (req, res) {
    res.send("<h1>hello world</h1>");
});

app.get("/contact", function (req, res) {
    res.send("Contact me at : angela@gmail.com");
});

app.get("/about", function (req, res) {
    res.send("My name is Takuro Kayamoto. My nick name is Tak");
});

app.get("/creative", function (req, res) {
    res.send("here is my past creatives");
});

app.listen(3000, function () {
    console.log("server started on port 3000");
});
