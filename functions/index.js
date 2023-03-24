const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const httpStatus = require("http-status");
const {myLogger} = require("./middlewares/logs");
const {errorHandler} = require("./middlewares/errors");
const ApiError = require("./utils/ApiError");
const userController = require("./users/user.controller");

const app = express();

// Automatically allow cross-origin requests
app.use(cors({origin: true}));

// Add middleware to authenticate requests
app.use(myLogger);

// build multiple CRUD interfaces:
app.get("/:id", userController.getUser);
app.post("/", userController.createUser);
app.put("/:id", userController.updateUser);
app.delete("/:id", userController.deleteUser);
app.get("/", userController.getUsers);

app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, "Not found"));
});

// handle error
app.use(errorHandler);

// Expose Express API as a single Cloud Function:
exports.users = functions.https.onRequest(app);
