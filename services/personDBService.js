const PersonModel = require("../models/person");

const createPerson = async (personInformation) => {
  const person = await PersonModel.create({
    name: personInformation.name,
    last_name: personInformation.last_name,
    age: personInformation.age
  });

  return person;
};

const findUser = async (userName) => {
  const user = await PersonModel.findOne({ name: userName });

  return user;
};

module.exports = { createPerson, findUser };
