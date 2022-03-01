const router = require('express').Router();
let Expert = require('../models/expert.model');

router.route('/').get((req, res) => {
  Expert.find()
    .then(experts => res.json(experts))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;

  const newExpert = new Expert({username});

  newExpert.save()
    .then(() => res.json('Expert added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;