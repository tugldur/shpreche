const { model, Schema } = require("mongoose");
const factSchema = new Schema({
  Date: { type: Date, default: Date.now() },
  likes: Array,
  dislike: Array,
  userId: String,
  title: String,
  fact: String,
});

const factModel = model("Facts", factSchema);
module.exports = factModel;
