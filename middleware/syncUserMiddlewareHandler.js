const syncHandler = (req, res, next) => {
  req.user = { name: "Thoka", surname: "Mamabolo" };
  next();
};

module.exports = { syncHandler };
