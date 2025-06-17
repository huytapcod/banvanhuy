"use strict";

var errorHandler = function errorHandler(err, req, res, next) {
  var statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode).json({
    message: err.message || "Lỗi server",
    stack: process.env.NODE_ENV === "production" ? null : err.stack
  });
};
module.exports = {
  errorHandler: errorHandler
};