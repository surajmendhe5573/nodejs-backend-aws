const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from your EC2 Node.js server!");
});

app.get("/home", (req, res) => {
  res.send("This is home page !");
});

// Start server
app.listen(3000, () => {
  console.log(`Server is running on http://localhost:${3000}`);
});
