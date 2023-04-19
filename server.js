// Node or CommonJS import
// const express = require("express");
// const colors = require("colors");

// ES6 Module Based import
import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";

const app = express();

//dotenv config
dotenv.config()

// database config
connectDB();

// middlewares
app.use(express.json());
app.use(morgan('dev'));

/* 
// JSON response
app.get("/", (req, res) => {
    res.send({
        message: "Hello world!"
    })
});
 */

// HTML response
app.get("/", (req, res) => {
    res.send("<h1>Hello world!</h1>");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    // console.log(`Server is running on port ${PORT}`);
    // console.log(`Server is running on port ${PORT}`.bgGreen.blue);
    console.log(`Server is running on ${process.env.MODE} mode on port ${PORT}`.bgGreen.blue);
});