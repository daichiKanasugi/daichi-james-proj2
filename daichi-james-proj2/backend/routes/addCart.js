const router = require('express').Router();
let Cart = require('../models/cart.model');

router.route('/').get((req, res) => {
  Cart.find()
    .then(cart => res.json(cart))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Adds new item in the cart
router.route('/add').post((req, res) => {
  const cartName = req.body.cartName;
  const description = req.body.description;
  const cost = Number(req.body.cost);

  const newCart = new Cart({
    cartName,
    description,
    cost
  });

  newCart.save()
  .then(() => res.json('item added in cart! added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

//Get specific items in cart
router.route('/:id').get((req, res) => {
  Cart.findById(req.params.id)
    .then(cart => res.json(cart))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Allow user to delete item
router.route('/:id').delete((req, res) => {
  Cart.findByIdAndDelete(req.params.id)
    .then(() => res.json('Item deleted from cart.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;