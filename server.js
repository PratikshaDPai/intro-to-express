const express = require("express");
const app = express();
// Define a route for the root URL "/"
app.get("/", (req, res) => {
  res.status(200).send("<h1>Hello, World!</h1>"); //status is optional, but recommended
});

// Start the server on port 8000
app.listen(8000, () => {
  console.log("Server running at http://127.0.0.1:8000/");
});

app.get("/home", (req, res) => {
  res.send("<h1>Home Page</h1>");
});
