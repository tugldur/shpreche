const { Router } = require("express");
const {
  createFact,
  getFacts,
  getUserFact,
  deleteFact,
  updateFact,
  addlikes,
  disLikes
} = require("../controller/factController");
const factRoute = Router();

factRoute.get("/fact", getFacts);
factRoute.post("/fact", createFact);
// factRoute.get("/fact/userId",usersFact );
factRoute.get("/fact", getUserFact);
factRoute.delete("/fact/:factId", deleteFact);
factRoute.put("/fact/:factId", updateFact);
factRoute.post("/addLikes/:factId/:userId", addlikes);
factRoute.post("/disLikes/:factId/:userId", disLikes);
module.exports = factRoute;
