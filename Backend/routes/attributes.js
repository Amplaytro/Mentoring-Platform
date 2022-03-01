const router = require('express').Router();
let Attribute = require('../models/attribute.model');

router.route('/').get((req, res) => {
  Attribute.find()
    .then(attributes => res.json(attributes))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const domain = req.body.domain;
  const company = req.body.company;
  const language = req.body.language;
  const hometown = req.body.hometown;
  const experience = Number(req.body.experience);
  const date = Date.parse(req.body.date);

  const newAttribute = new Attribute({
    username,
    firstname,
    lastname,
    domain,
    company,
    language,
    hometown,
    experience,
    date,
  });

  newAttribute.save()
  .then(() => res.json('Attribute added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Attribute.findById(req.params.id)
    .then(attribute => res.json(attribute))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Attribute.findByIdAndDelete(req.params.id)
    .then(() => res.json('Attribute deleted!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Attribute.findById(req.params.id)
    .then(attribute => {
      attribute.username = req.body.username;
      attribute.firstname = req.body.firstname;
      attribute.lastname = req.body.lastname;
      attribute.domain = req.body.domain;
      attribute.company = req.body.company;
      attribute.language = req.body.language;
      attribute.hometown = req.body.hometown;
      attribute.experience = Number(req.body.experience);
      attribute.date = Date.parse(req.body.date);

      attribute.save()
        .then(() => res.json('Attribute updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;