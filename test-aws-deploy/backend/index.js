// backend/index.js
const express = require("express");
const path = require("path");
const app = express();
const rateLimit = require('express-rate-limit');
const PORT = 3001; // Ensure this is not the same port as your Vite server

// Configure the rate limiter
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 20, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again after 15 minutes',
});


// Serve static files from the React app
app.use(express.static(path.join(__dirname, "build")));
app.use(limiter);

app.get("/api", (req, res) => {
  res.json({ message: "Hello from Express!" });
});
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hi from Express!" });
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
