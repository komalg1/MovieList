'use strict';
var http = require('http');

var express = require("express");
var app = express();
var controllers = require("./controllers");
var bodyParser = require('body-parser');

app.set("view engine", "vash");
app.use(express.static(__dirname + "/public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


//app.get("/", function (req, res) {
//    res.render("index", { title: "Express" + " Vash" });
//});
controllers.init(app);

var server = http.createServer(app);
server.listen(3000);