const express = require('express');
const router = express.Router();
const Person = require('../models/person');
const { errorHandler } = require('../middleware/errorHandler');

router.get(
  '/',
  errorHandler(async (req, res) => {
    const people = await Person.find();

    return res.status(200).send({ data: people });
  })
);

router.get(
  '/:name',
  errorHandler(async (req, res) => {
    const name = req.params.name;
    const people = await Person.find({ name: name });

    return res.status(200).send({ data: people });
  })
);

router.post(
  '/',
  errorHandler(async (req, res) => {
    const { name, last_name, age } = req.body;

    const newPerson = await new Person({ name, last_name, age });
    newPerson.save();

    return res.status(200).send({ message: `${newPerson.name} succesfully added to the DB...!` });
  })
);

module.exports = router;
