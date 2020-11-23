const express = require('express');
const router = express.Router();
const Person = require('../models/person');

router.get('/', async (req, res) => {
  const people = await Person.find();

  return res.status(200).send({ data: people });
});

router.post('/', async (req, res) => {
  const { name, last_name, age } = req.body;

  const newPerson = await new Person({ name, last_name, age });
  newPerson.save();

  return res.status(200).send({ message: `${newPerson.name} succesfully added to the DB...!` });
});

module.exports = router;
