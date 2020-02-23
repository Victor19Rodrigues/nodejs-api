"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const config = require("./config");

const app = express();
const router = express.Router();

const Product = require("./models/Product");
const Customer = require("./models/Customer");
const Order = require("./models/Order");

const indexRoutes = require("./routes/index");
const productRoutes = require("./routes/product");
const customerRoutes = require("./routes/customer");
const orderRoutes = require("./routes/order");

mongoose.connect(config.connectionString);

app.use(
  bodyParser.json({
    limit: "5mb"
  })
);
app.use(bodyParser.urlencoded({ extended: false }));

// Habilita o CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, x-access-token"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

app.use("/", indexRoutes);
app.use("/products", productRoutes);
app.use("/customers", customerRoutes);
app.use("/orders", orderRoutes);

module.exports = app;
