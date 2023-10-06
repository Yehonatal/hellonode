const express = require("express")

var app = express();

app.get("/", function(request, response) {
  response.send("Hello Node 😅");
})


const port = 5000;
app.listen(port, function() {
  console.log("Started application on post %d", port)
})
