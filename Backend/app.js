const express = require("express");
const app = express();
const errorMiddleware = require("./Middlewares/error");
app.use(express.json());
// Route Imports
const product = require("./Routes/productRoute");
const user = require("./Routes/userRoutes");

app.use("/api/v1", product);
app.use("/api/v1", user);

// Middleware for Error
app.use(errorMiddleware);

module.exports = app;
