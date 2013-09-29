var express = require('express');
var app = express();
app.configure(function() {
    app.use(express.compress());
    app.set("views", __dirname + "/views");
    app.set("view engine", "ejs");
    app.use(express["static"] (__dirname + "/static"));
    app.use(app.router);
});
app.get("/", function(req,res) {
    res.render("index.ejs");
});
app.listen(8000);
console.log('Listening on port 8000');
