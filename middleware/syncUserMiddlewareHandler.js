const { extractJWTToken } = require("../services/middleWareService");
const { findUser, createPerson } = require("../services/personDBService");

const userSyncHandler = async (req, res, next) => {
  if (req.headers.authorization) {
    const tokenInformation = extractJWTToken(req.headers.authorization);
    const user = await findUser(tokenInformation.name);

    if (!user) {
      const createdUser = await createPerson(tokenInformation);
      req.user = createdUser;
    } else {
      req.user = user;
    }
  }

  next();
};

module.exports = { userSyncHandler };
