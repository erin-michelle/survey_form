var express = require('express');
var path = require("path");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, "./views"));
app.set('view engine', 'ejs');
app.get("/", function(req, res){
    res.render("index");
})
app.post("/submit", function(req, res){
    console.log(req.body);
    var submit = {
        name: req.body["name"],
        location: req.body["location"],
        language: req.body["language"],
        comment: req.body["comment"]
    }
    console.log(submit);
    res.render("results", {submit: submit});
})
app.post("/main", function(req, res){
    res.redirect("/");
})
app.listen(8000, function(){
    console.log("listenting on port 8000");
})