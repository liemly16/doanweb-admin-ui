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

router.get("/orders", function(req, res, next) {
  res.render("pages/order");
});

router.get('/products/add', function(req, res, next){
  res.render("pages/add-product");
});

router.get("/products", function(req, res, next) {
  let products = [
    {
      thumb:
        "https://cdn.tgdd.vn/Products/Images/42/210653/iphone-11-pro-max-256gb-green-400x400.jpg",
      name: "iPhone 11 Pro Max 256GB",
      price: "37.990.000đ"
    },
    {
      thumb:
        "https://cdn.tgdd.vn/Products/Images/42/198986/sieu-pham-galaxy-s-moi-2-512gb-black-400x400.jpg",
      name: "Samsung Galaxy S10+ (512GB)",
      price: "20.990.000₫"
    },
    {
      thumb:
        "https://cdn.tgdd.vn/Products/Images/42/202703/oppo-f11-pro-128gb-400x400.jpg",
      name: "OPPO F11 Pro 128GB",
      price: "7.490.000₫"
    },
    {
      thumb:
        "https://cdn.tgdd.vn/Products/Images/42/207641/samsung-galaxy-a50s-green-400x400.jpg",
      name: "Samsung Galaxy A50s",
      price: "6.990.000₫"
    },
    {
      thumb:
        "https://cdn.tgdd.vn/Products/Images/42/190324/iphone-xs-256gb-white-400x400.jpg",
      name: "iPhone Xs 256GB",
      price: "29.990.000₫"
    },
    {
      thumb:
        "https://cdn.tgdd.vn/Products/Images/42/171028/blackberry-key2-4-400x400.jpg",
      name: "BlackBerry KEY2",
      price: "15.990.000₫"
    },
    {
      thumb:
        "https://cdn.tgdd.vn/Products/Images/42/74110/iphone-7-gold-400x400.jpg",
      name: "iPhone 7 32GB",
      price: "9.990.000₫"
    },
    {
      thumb:
        "https://cdn.tgdd.vn/Products/Images/42/210243/vivo-v17-pro-blue-noo-400x400.jpg",
      name: "Vivo V17 Pro",
      price: "9.990.000₫"
    }
  ];
  products = products.map((p, i) => {
    p.index = i + 1;
    return p;
  });

  res.render("pages/product", { products });
});

module.exports = router;
