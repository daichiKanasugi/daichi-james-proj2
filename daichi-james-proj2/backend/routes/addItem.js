const router = require('express').Router();
let Item = require('../models/item.model');

router.route('/').get((req, res) => {
  Item.find()
    .then(items => res.json(items))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Lets user add items into item list
router.route('/add').post((req, res) => {
  const itemName = req.body.itemName;
  const description = req.body.description;
  const cost = Number(req.body.cost);

  const newItem = new Item({
    itemName,
    description,
    cost
  });

  newItem.save()
  .then(() => res.json('Item added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Item.findById(req.params.id)
    .then(item => res.json(item))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Item.findByIdAndDelete(req.params.id)
    .then(() => res.json('Items deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Allow users to edit the items
router.route('/update/:id').post((req, res) => {
  Item.findById(req.params.id)
    .then(item => {
      item.itemName = req.body.itemName;
      item.description = req.body.description;
      item.cost = Number(req.body.cost);

      item.save()
        .then(() => res.json('Items Updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;