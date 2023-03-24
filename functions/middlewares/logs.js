const myLogger = function(req, res, next) {
  console.log("LOGGED");
  console.log("Time:", Date.now());
  next();
};

module.exports = {
  myLogger,
};
