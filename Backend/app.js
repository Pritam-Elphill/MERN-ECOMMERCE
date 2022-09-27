const express = require("express");
const app = express();
const errorMiddleware = require("./Middlewares/error");
app.use(express.json());
// Route Imports
const product = require("./Routes/productRoute");

app.use("/api/v1", product);

// Middleware for Error
app.use(errorMiddleware);

module.exports = app;
