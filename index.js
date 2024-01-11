const express = require("express");
const router = require("./routes/routes.js");
const cors = require("cors");
const connectDataBase = require("./database/db.js");
const factRoute = require("./routes/factRoute.js");

const app = express();
const port = 8080;
app.use(express.json());
app.use(cors());

app.use(router);
app.use(factRoute);

connectDataBase();

app.listen(port, () => {
  console.log(`your backend server is running on ${port}`);
});
