const errorHandler = (handler) => {
  return async (req, res, next) => {
    try {
      await handler(req, res);
    } catch (error) {
      next(error);
    }
  };
};

const unknownRequests = (req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
};

const errorResponse = (error, req, res, next) => {
  console.log(error.message);
};
module.exports = { errorHandler, unknownRequests, errorResponse };
