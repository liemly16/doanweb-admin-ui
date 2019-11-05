var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  const products = [
    {
      index: 1,
      name: "Iphone X 256GB",
      quantity: 103213,
      price: "32.000.000đ"
    },
    {
      index: 2,
      name: "iPhone 11 Pro Max 256GB",
      quantity: 93213,
      price: "37.990.000₫"
    },
    {
      index: 3,
      name: "iPhone 11 Pro Max 256GB",
      quantity: 83213,
      price: "22.990.000₫"
    },
    {
      index: 4,
      name: "OPPO F11 Pro 128GB",
      quantity: 73213,
      price: "7.490.000₫"
    },
    {
      index: 5,
      name: "Samsung Galaxy A50s",
      quantity: 63213,
      price: "6.690.000₫"
    },
    {
      index: 6,
      name: "Xiaomi Redmi Note 8 (3GB/32GB)",
      quantity: 53213,
      price: "6.690.000₫"
    },
    {
      index: 7,
      name: "Samsung Galaxy A50 128GB",
      quantity: 43123,
      price: "6.490.000₫"
    },
    {
      index: 8,
      name: "Vivo S1",
      quantity: 33123,
      price: "5.490.000₫"
    },
    {
      index: 9,
      name: "iPhone Xs 64GB",
      quantity: 23123,
      price: "27.990.000₫"
    },
    {
      index: 10,
      name: "iPhone 11 128GB",
      quantity: 13123,
      price: "23.990.000₫"
    }
  ];

  res.render("index", { products });
});

module.exports = router;
