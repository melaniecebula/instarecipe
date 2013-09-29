var express = require('express');
var request = require('request');
var app = express();

app.configure(function() {
  app.use(express.compress());
  app.set("views", __dirname + "/views");
  app.set("view engine", "ejs");
  app.use(express["static"] (__dirname + "/static"));
  app.use(app.router);
});

app.get("/", function(req,res) {
  url = 'https://api.instagram.com/v1/tags/recipeshare/media/recent?client_id=452916002&access_token=' + process.env.INSTAGRAM_TOKEN;
  request.get(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      data = JSON.parse(body);
      links = [];
      images = [];
      console.log(data);
      for (var i = 0; i < 20; i++) {
        links.push(data.data[i].link);
        images.push(data.data[i].images.low_resolution.url);
      }

      console.log(links);
      console.log(images);

      res.render("index.ejs", {links: links, images: images});
    } else {
      console.log(error);
    }
  });
});

app.listen(8000);
console.log('Listening on port 8000');
