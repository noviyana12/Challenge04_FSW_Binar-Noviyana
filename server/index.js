console.log("Implement servermu disini yak 😝!");

const http = require("http");
const fs = require("fs");

const port = 8000;

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    switch (req.url) {
      case "/":
        req.url = "index.html";
        break;
      case "/cars":
        req.url = "cariMobil.html";
        break;
      default:
        req.url;
        break;
    }
    let path = "public/" + req.url;
    fs.readFile(path, (err, data) => {
      res.writeHead(200);
      res.end(data);
    });
  })
  .listen(port, "localhost", () => {
    console.log("Server dapat dibuka di http://localhost:%d", port);
  });
