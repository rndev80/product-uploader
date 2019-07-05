const Product = require('../models/product');
const logger = require('../logger');

exports.list = (req, res) => {
  const query = req.query || {};

  Product.apiQuery(query)
    .select('_id productName variable1 variable2 variable3 variable4')
    .then(products => {
      res.json(products);
    })
    .catch(err => {
      logger.error(err);
      res.status(422).send(err.errors);
    });
};

exports.post = (req, res) => {
  const data = Object.assign({}, req.body) || {};

  Product.create(data)
    .then(product => {
      res.json(product);
    })
    .catch(err => {
      logger.error(err);
      res.status(500).send(err);
    });
};

exports.put = (req, res) => {
  const data = req.body || {};
  const { _id: productId, ...rest } = data;

  Product.findByIdAndUpdate(productId, { ...rest }, { new: true })
    // eslint-disable-next-line consistent-return
    .then(product => {
      if (!product) {
        return res.sendStatus(404);
      }

      res.json(product);
    })
    .catch(err => {
      logger.error(err);
      res.status(422).send(err.errors);
    });
};
