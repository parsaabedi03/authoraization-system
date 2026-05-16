const express = require("express");
const { notFoundError, errorHandler } = require("./utils/error-handling");
const { AllRouters } = require("./router/index.routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(AllRouters);
app.use(notFoundError);
app.use(errorHandler);

app.listen(3000, () => console.log("server run http://localhost:3000"));
