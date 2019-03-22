const express = require('express');
const productRoutes = express.Router();

let Product = require('../model/product.model');

productRoutes.route('/add').post(function (req, res) {
  let product = new Product(req.body);
  product.save()
    .then(product => {
      res.status(200).json({ 'product': 'product added successfully' });
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

productRoutes.route('/').get(function (req, res) {
  Product.find(function (err, products) {
    let response = {};
    if (err) {
      console.log(err);
      response = err;
    }
    else {
      res.json(products);
      response = res;
    }
    return response;
  });
});

productRoutes.route('/upvote/:id').post(function (req, res) {
  Product.findById(req.params.id, function (err, product) {
    if (!product)
      res.status(404).send("Product not found");
    else {
      product.likes = product.likes + 1;

      product.save().then(product => {
        res.json('Product upvote complete');
      })
        .catch(err => {
          res.status(400).send("Unable to upvote the product");
        });
    }
  });
});

productRoutes.route('/downvote/:id').post(function (req, res) {
  Product.findById(req.params.id, function (err, product) {
    if (!product)
      res.status(404).send("Product not found");
    else {
      product.dislikes = product.dislikes + 1;

      product.save().then(product => {
        res.json('Product downvote complete');
      })
        .catch(err => {
          res.status(400).send("Unable to downvote the product");
        });
    }
  });
});

module.exports = productRoutes;