const express = require("express");
const app = express();
const env = require("dotenv");

const port = process.env.PORT || 5000;

//db connection


app.get("/user", userRoutes);

app.listen(port);
