const httpStatus = require("http-status");

const errorHandler = (err, req, res, next) => {
  let {statusCode, message} = err;
  // if (config.env === 'production' && !err.isOperational) {
  statusCode = httpStatus.INTERNAL_SERVER_ERROR;
  message = httpStatus[httpStatus.INTERNAL_SERVER_ERROR];
  // }

  res.locals.errorMessage = err.message;

  const response = {
    code: statusCode,
    message,
    // ...(config.env === 'development' && { stack: err.stack }),
  };

  // if (config.env === 'development') {
  //   logger.error(err);
  // }

  res.status(statusCode).send(response);
};

module.exports = {
  errorHandler,
};
