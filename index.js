var http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  switch (url) {
    case "/":
        res.write("Welcome to Main App Page");
        return res.end();
        
    case "/home":
      res.write("Welcome home");
      return res.end();

    case "/about":
      res.write("Welcome to About Us page");
      return res.end();

    case "/node":
      res.write("Welcome to my Node Js project");
      return res.end();

  }
});

server.listen(3000);
